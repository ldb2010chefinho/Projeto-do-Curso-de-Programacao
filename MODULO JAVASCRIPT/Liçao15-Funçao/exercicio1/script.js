let frase

function verificarDivisor(numero){
    let resultado    
    if (numero % 3 == 0) {
        resultado = "O numero "+numero+ " é divisivel por 3"
    }
    else{
        resultado = "O numero "+numero+ " não é divisivel por 3"
    }
    return resultado
}
 frase = verificarDivisor(10 + 2 - 1);
 console.log(frase);