let textInput = document.getElementById("fruta")
let result = document.getElementById("resultado")
let nameFruta
textInput.addEventListener("change",function () {
   nameFruta = (textInput.value).toLowerCase().trim()// trim = tirar espaços
   
    console.log(nameFruta); 
    switch (nameFruta) {
    case "banana":
        result.innerText = "A " + nameFruta + " foi escolhida"
        break;

    case "uva":
        result.innerText = "A " + nameFruta + " foi escolhida"
        break;

    case "pera":
        result.innerText = "A " + nameFruta + " foi escolhida"
        break;
    
    case "maçã":
        result.innerText = "A " + nameFruta + " foi escolhida"
        break;

    case "macã":
        result.innerText = "A " + nameFruta + " foi escolhida"
        break;

    case "maça":
        result.innerText = "A " + nameFruta + " foi escolhida"
        break;

    case "arroz":
        result.innerText = "O " + nameFruta + " foi escolhida"
        break;
    
        case "qwertyuiopasdfghjklçzxcvbnm":
        result.innerText = "A " + nameFruta + " foi escolhida"
        break;

    default:
        result.innerText = "Esse nome("+ nameFruta+ ") não é uma fruta ou eu não a coloquei"
}
})