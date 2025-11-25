//1. Imprima números de 1 a 100. Para múltiplos de 3, imprima "Fizz". Para múltiplos de 5, imprima "Buzz". Para múltiplos de ambos, imprima "FizzBuzz". 
console.log("Exercicio 1:");
for (let numero = 1; numero <= 100; numero++){
    
    if (numero % 3 == 0  && numero %5 == 0) {
        console.log("FizzBuzz");
    }       
    else if (numero % 3 == 0) {
        console.log("Fizz");
        
    }
    else if (numero % 5 == 0) {
        console.log("Buzz");
        
    }
    else{
        console.log(numero);
        
    }
}
//2. Dada uma string, use um loop for para contar o número de vogais (a, e, i, o, u) presentes.  
console.log("Exercicio 2");

let texto = "ldb2010chefinho";
let contadorVogais = 0;
let vogais = "aeiouAEIOU";

for (let i = 0; i < texto.length; i++) {
  if (vogais.includes(texto[i])) {
    contadorVogais++;
  }
}

console.log("O texto possui ",contadorVogais, "vogais.");

//3. Crie uma função chamada fibonacci que recebe um número n e retorna um array contendo os primeiros n números da sequência de Fibonacci (onde cada número é a soma dos dois anteriores, começando com 0 e 1).
// Restrição: Se n = 0, retorne [ ]. n = 1, retorne [0]. Se n = 2, retorne [0, 1].

//A sequência de Fibonacci é uma série de números onde cada número é a soma dos dois anteriores, começando com \(0\) e \(1\). A sequência começa como \(0,1,1,2,3,5,8,13,21,34,\dots \), e esse padrão é encontrado em muitas aplicações na natureza, arte e ciência. 
console.log("Exercicio 3:");

let sequencia = [0, 1] 
let n = 2
function fibonacci(n) {
    if (n == 0){
        n = 1
        console.log([])
        return
    }
    else if(n == 1){
        console.log(sequencia[0])
        return
    }
    else if(n == 2){
        console.log(sequencia);
        return
    }
    else{
        for (let i = 2; i < n; i++) {
            
            let termo_anterior = sequencia[i - 1]
            let segundo_termo_anterior = sequencia[i - 2]
            let novo_termo = termo_anterior+ segundo_termo_anterior
            sequencia.push(novo_termo) //push e para adicionar na array
            
        }
        console.log(sequencia);
    }
}
fibonacci(103)
