
const page = document.getElementById("pages")
console.log(page);

function change_color() {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    
    console.log(red, green, blue);

    // Aplica a cor aleatória ao fundo
    page.style.backgroundColor = `rgb(${red},${green},${blue})`;
};
////////////////////////////////////////////////////////////////////
//EVENTOS DE CLICK
const botao = document.getElementById("btn_acender")
const lampada_acender = document.getElementById("lampada")
botao.addEventListener('click', function(){

    if (botao.innerText == "acender") {
        lampada_acender.src = "img/lamp_turnOn.png"
        botao.innerText = "apagar"
    }
    else if(botao.innerText == "apagar"){
        lampada_acender.src = "img/lamp_turnOff.png"
        botao.innerText = "acender"
    }
})
/////////////////////////////////////////////////////////////////////
//Evento de mouse
const cadeado = document.getElementById("img_cadeado")

cadeado.addEventListener('mouseover', function () {
    cadeado.style.filter = "opacity(25%)"
})
cadeado.addEventListener("mouseout" ,function () {
    cadeado.style.filter = "opacity(100%)"
})
cadeado.addEventListener("mousedown" ,function () {
    cadeado.src = "img/lock_open.png"
})
cadeado.addEventListener("mouseup" ,function () {
    cadeado.src = "img/lock_close.png"
})
////////////////////////////////////////////////////////////////////////
// Evento de input
const borboleta = document.getElementById("img_borboleta")
const coordX = document.getElementById("coord_X")
const coordY = document.getElementById("coord_Y")

coordX.addEventListener("change", function(){
    console.log(coordX.value);
    borboleta.style.left = coordX.value + "px"
})
coordY.addEventListener("change", function(){
    console.log(coordY.value);
    borboleta.style.left = coordY.value + "px"
})
///////////////////////////////////////////////////////////
// Evento de change
const bot_speak = document.getElementById("message")

const synth = window.speechSynthesis;


bot_speak.addEventListener("change", function(){
    const utterThis = new SpeechSynthesisUtterance(bot_speak.value);
    console.log(bot_speak.value);
    synth.speak(utterThis)
})

///////////////////////////////////////////////////////////
//Keypress
const mao = document.getElementById("mao_direita")
const seta = document.getElementById("keypress")
 seta.addEventListener("keydown", function(event){
    let key = event.key;
    if (key == "ArrowRight"){
    
        mao.src = "img/right_hand.png"
    }
    else if(key == "ArrowLeft"){
        mao.src = "img/left_hand.png"
    }
    console.log(key);
    
 })