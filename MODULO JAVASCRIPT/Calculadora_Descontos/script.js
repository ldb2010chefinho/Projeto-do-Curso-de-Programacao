let eletronico = document.getElementById("sub-eletronicos");
let livros = document.getElementById("sub-livros");
let roupas = document.getElementById("sub-roupas");
let outros = document.getElementById("sub-outros");

let calcular = document.getElementById("calcular-input");
let btn_calcular = document.getElementById("calcular-btn");

let tDesconto = document.getElementById("totalDesconto");
let vDesconto = document.getElementById("valorDesconto");
let pDesconto = document.getElementById("porcentagemDesconto");

let categoria
let valueCalcular

function atualizarCategoria(nome) {
    categoria = nome
    console.log(categoria);
    
}

eletronico.addEventListener("click", () => atualizarCategoria("eletronico")) // arrow function = () => "Função chama função"

livros.addEventListener("click", () => atualizarCategoria("livros")) // arrow function = () => "Função chama função"

roupas.addEventListener("click", () => atualizarCategoria("roupas")) // arrow function = () =>  "Função chama função"

outros.addEventListener("click", () => atualizarCategoria("outros")) // arrow function = () =>  "Função chama função"




// CALCULO DE DESCONTOS

let desconto 
let descontoV
let porcentagem


function calcularDesconto() {
    switch (categoria) {
        case "eletronico":
            desconto = valueCalcular * 0.1;
            descontoV = valueCalcular - desconto
            porcentagem =  "10%"
            break;

        case "livros":
            desconto = valueCalcular * 0.05;
            descontoV = valueCalcular - desconto
            porcentagem =  "5%"        
            break;

        case "roupas":
            if(valueCalcular > 100){
                desconto = valueCalcular * 0.2;
                porcentagem =  "20%"  
            }
            else{
                desconto = valueCalcular * 0.15;
                porcentagem =  "15%"  
            }
            descontoV = valueCalcular - desconto
            break;

        case "outros":
            desconto = 0
            descontoV = valueCalcular - desconto
            porcentagem =  "0%"    
            break;

        default:
            desconto = "Por favor, escolha uma das opções da categoria acima"
            descontoV = "Por favor, escolha uma das opções da categoria acima"
            porcentagem =  "Por favor, escolha uma das opções da categoria acima"
            break;
    }

    tDesconto.innerText = "R$ "+desconto
    vDesconto.innerText = "R$ "+descontoV
    pDesconto.innerText = porcentagem
}

btn_calcular.addEventListener( "click",function() {
    valueCalcular = parseFloat(calcular.value)
    console.log(valueCalcular);
    calcularDesconto()
    if(valueCalcular < 0  ||  isNaN(valueCalcular)){
        tDesconto.innerText = "Por favor, adicione um valor positivo"
        vDesconto.innerText = "Por favor, adicione um valor positivo"
        pDesconto.innerText = "Por favor, adicione um valor positivo"
    }
})