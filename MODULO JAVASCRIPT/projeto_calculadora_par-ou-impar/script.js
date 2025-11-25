let textInput = document.getElementById("numero")
let result = document.getElementById("resultado")

textInput.addEventListener( "change",function() {
    let valueNumber = parseFloat(textInput.value)
    if (valueNumber % 2 == 0) {
        console.log("Seu numero é PAR");
        result.innerText = "O número " + valueNumber + " é PAR"
    }
    else{
        console.log("Seu numero e IMPAR");
        result.innerText = "O número " + valueNumber + " é IMPAR"
    }
})