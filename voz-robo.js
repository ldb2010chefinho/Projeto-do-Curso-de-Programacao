/* =========================================================
   VOZ DO BUG: áudios gravados (voz de IA) passando por um efeito de robô
   feito no próprio navegador (Web Audio API):
     - modulação em anel (mistura a voz com um zumbido de ~50 Hz: o "metálico")
     - filtro pente (um eco curtíssimo que realimenta: soa como dentro de uma lata)
     - redução de bits (deixa a voz "digital", com degraus)
     - voz um pouco mais lenta e grave
   A intensidade vai de 0 (voz normal) a 1 (bem robô).
   Sem internet, os áudios não carregam: o texto continua aparecendo normalmente.
   ========================================================= */
window.VOZ_ROBO = (() => {
  const BASE = 'https://cdn.creativeclaw.co/u/a9f5bb8e/audio/';
  const ARQ = {
    inv1: '0e113e6d-d29b-43fc-b22a-41a8fca1ef3b', inv2: 'a18fd0a3-53a2-4850-919f-1fb1af5974c7',
    inv3: 'b1f45f9f-3104-4b28-bdcb-e1765159a5a4', inv4: '697e0462-8684-4703-a246-60e3c5bd50a9',
    inv5: '3d61b3be-764e-40ca-a1eb-17dc4051c38b',
    ch1: 'bdd11360-1970-4ef5-95a0-89a9c10aec69', ch4: '511ee601-b25c-4afa-872a-166ded116ff6',
    ch7: '4566ea9d-8805-4b48-a13d-872986b08222', ultimo: 'b0adbcec-c846-49e3-9353-d4e6b00ede3c',
    apagao: '571a8f4e-74bd-4f9f-a2bd-db83ccd28dbc', susto: '46472a7d-13ce-4809-bad0-aa004f875adc',
    jogo1: '212b293b-d4ea-4370-a057-49ec4b267cc8', jogo2: '90f8d03d-86df-424c-81ce-66dc30d2aa01',
    derrota: '09d91df8-ac77-4397-882f-416237b35ce0', volta: '57918a65-2475-419e-9413-1a7053c63c0e',
    evo2: '98f6cf36-d5d7-4332-b59b-161482fae412', evo3: 'f59b4e8f-8087-495e-b23d-8771af33ea4a',
    evo4: 'cc21bb88-8981-4f4e-ab51-634840f2e539'
  };
  let ctx = null, buffers = {}, atual = null, fimEm = 0, intensidade = 0.85, ouvintes = [];
  let ligado = true;

  function criar(){
    if(ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext; if(!AC) return null;
    ctx = new AC();
    Object.entries(ARQ).forEach(([k, id]) => {
      fetch(BASE + id + '.mp3').then(r => r.arrayBuffer()).then(a => ctx.decodeAudioData(a)).then(b => { buffers[k] = b; }).catch(() => {});
    });
    return ctx;
  }
  /* o navegador só deixa tocar som depois de uma tecla ou clique */
  ['keydown', 'pointerdown'].forEach(ev => addEventListener(ev, () => { criar(); if(ctx && ctx.state === 'suspended') ctx.resume(); }, { capture: true }));
  criar();

  /* curva de "degraus" para a redução de bits */
  function curvaBits(passos){
    const n = 2048, c = new Float32Array(n);
    for(let i = 0; i < n; i++){ const x = i / (n - 1) * 2 - 1; c[i] = Math.round(x * passos) / passos; }
    return c;
  }

  function falar(chave){
    if(!ligado || !ctx || !buffers[chave]) return 0;
    parar();
    const r = intensidade, t = ctx.currentTime;
    const src = ctx.createBufferSource(); src.buffer = buffers[chave];
    src.playbackRate.value = 1 - 0.08 * r;                       // um pouco mais lento e grave

    const entrada = ctx.createGain();
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 110;
    src.connect(hp); hp.connect(entrada);

    // seco (voz original)
    const seco = ctx.createGain(); seco.gain.value = 1 - 0.65 * r;
    // modulação em anel
    const anel = ctx.createGain(); anel.gain.value = 0;
    const osc = ctx.createOscillator(); osc.type = 'sine'; osc.frequency.value = 48;
    const prof = ctx.createGain(); prof.gain.value = 1; osc.connect(prof); prof.connect(anel.gain);
    const anelMix = ctx.createGain(); anelMix.gain.value = 0.9 * r;
    entrada.connect(seco); entrada.connect(anel); anel.connect(anelMix);
    // filtro pente (lata metálica)
    const pente = ctx.createDelay(0.05); pente.delayTime.value = 0.0065;
    const realim = ctx.createGain(); realim.gain.value = 0.55 * r;
    const penteMix = ctx.createGain(); penteMix.gain.value = 0.6 * r;
    entrada.connect(pente); pente.connect(realim); realim.connect(pente); pente.connect(penteMix);
    // soma + bits + brilho metálico
    const soma = ctx.createGain();
    seco.connect(soma); anelMix.connect(soma); penteMix.connect(soma);
    const bits = ctx.createWaveShaper(); bits.curve = curvaBits(Math.round(64 - 48 * r)); bits.oversample = 'none';
    const pico = ctx.createBiquadFilter(); pico.type = 'peaking'; pico.frequency.value = 2400; pico.Q.value = 1.2; pico.gain.value = 5 * r;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -20; comp.ratio.value = 4;
    const vol = ctx.createGain(); vol.gain.value = 1.1;
    soma.connect(bits); bits.connect(pico); pico.connect(comp); comp.connect(vol); vol.connect(ctx.destination);

    // medidor para a boca mexer junto com a voz
    const an = ctx.createAnalyser(); an.fftSize = 512; vol.connect(an);
    const dados = new Uint8Array(an.fftSize);
    osc.start(t); src.start(t);
    const dur = src.buffer.duration / src.playbackRate.value;
    fimEm = performance.now() + dur * 1000;
    atual = { src, osc };
    const passo = () => {
      if(!atual || atual.src !== src) return;
      an.getByteTimeDomainData(dados);
      let s = 0; for(let i = 0; i < dados.length; i++){ const v = (dados[i] - 128) / 128; s += v * v; }
      const nivel = Math.min(1, Math.sqrt(s / dados.length) * 5);
      ouvintes.forEach(f => f(nivel, chave));
      requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
    src.onended = () => { if(atual && atual.src === src){ atual = null; ouvintes.forEach(f => f(0, null)); } try { osc.stop(); } catch(e){} };
    return dur * 1000;
  }
  function parar(){ if(atual){ try { atual.src.stop(); atual.osc.stop(); } catch(e){} atual = null; ouvintes.forEach(f => f(0, null)); } }
  return {
    falar, parar,
    restante: () => Math.max(0, fimEm - performance.now()),
    aoNivel: f => ouvintes.push(f),
    setIntensidade: v => { intensidade = Math.max(0, Math.min(1, v)); },
    getIntensidade: () => intensidade,
    setLigado: v => { ligado = v; if(!v) parar(); },
    chaves: Object.keys(ARQ),
    pronto: () => Object.keys(buffers).length
  };
})();
