let iniciar = document.getElementById("btnIniciar");
let pausar = document.getElementById("btnPausar");
let resetar = document.getElementById("btnResetar");

let timer = document.getElementById("cronometro");

let crescente = document.getElementById("form_crescente");
let decrescente = document.getElementById("form_decrescente");
let valorInicial = document.getElementById("input_valorInicial")
let ligado_desligado = 0
let reiniciar_tempo

let meu_audio = new Audio();


let tempo;

let myInterval = 0 

function formatarTempo(tempos) {
    let centesimo = Math.floor((tempos % 1000) / 10);
    let segundos = Math.floor(tempos / 1000)
    let minutos = Math.floor(segundos / 60)
    let horas = Math.floor(minutos / 60)

    centesimo = String(centesimo).padStart(2, '0');
    horas = String(horas).padStart(2, '0');
    minutos = String(minutos % 60).padStart(2, '0');
    segundos = String(segundos % 60).padStart(2, '0');    
    return `${horas}:${minutos}:${segundos}:${centesimo}`;
}

const ajustarTempo = (tempoAtual)=> timer.innerText = formatarTempo(tempoAtual);
//Inicializar cronometro
function inicializar() {
    configAudio("iniciar")
    let actionInicio = iniciar.getAttribute("action")
    console.log(ligado_desligado);
    
    
    let tipo_selecionado = document.querySelector("input[name = 'tipo']:checked").value;
    if(actionInicio == "iniciar" && ligado_desligado == 1){
        tempo = reiniciar_tempo;
        console.log("entei"+reiniciar_tempo);
        
    }
    else if (actionInicio == "iniciar" && ligado_desligado == 0) {
        tempo = (valorInicial.value)*1000;
        console.log("else if");
        
        
    }

    console.log(tempo , tipo_selecionado);
               
    clearInterval(myInterval)
    myInterval = setInterval( function(){
            switch (tipo_selecionado) {
            case "decrescente":
                tempo -= 10;
                break;
        
            case "crescente":
                tempo += 10;
                break;
        }
        if(tempo >= 0){
            ajustarTempo(tempo);
        }
        else{
            clearInterval(myInterval)
        }
    }, 10)
    iniciar.setAttribute("action","continue")
}

//Pausar Cronometro
function fPausar() {
    clearInterval(myInterval);
    configAudio("pausar")

}
//Resetar Cronometro
function fResetar() {
    clearInterval(myInterval);
    tempo = 0;
    ajustarTempo(tempo);
    configAudio("resetar") 
}

//AUDIO

function configAudio(status_btn) {
    switch (status_btn) {
        case "iniciar":
            meu_audio.src="Audio/running.mp3";

            meu_audio.loop = true;

            meu_audio.play()
            break;
        case "pausar":
            meu_audio.pause()
            meu_audio.loop =false;
        
        case "resetar":
            meu_audio.pause();
            meu_audio.src="Audio/end.mp3";
            meu_audio.play();
            meu_audio.loop =false;

    }
}

//Evento dos botões
iniciar.addEventListener("click", inicializar)
pausar.addEventListener("click", fPausar)
resetar.addEventListener("click", fResetar)

valorInicial.addEventListener("change", function () {
    ligado_desligado = 1;
    reiniciar_tempo = (valorInicial.value)*1000;
    iniciar.setAttribute("action","iniciar")

})

