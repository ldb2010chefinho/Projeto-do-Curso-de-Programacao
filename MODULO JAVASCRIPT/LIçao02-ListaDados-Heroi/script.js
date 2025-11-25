const nome = document.getElementById('nome');
const poder = document.getElementById('poder');
const fraqueza = document.getElementById('fraqueza');
const forca = document.getElementById('forca');
const defesa = document.getElementById('defesa');
const classificado = document.getElementById('classificado');
const inimigo = document.getElementById('inimigo');

const nome_dados = document.getElementById('nome_dados');
const poder_dados = document.getElementById('poder_dados');
const fraqueza_dados = document.getElementById('fraqueza_dados');
const forca_dados = document.getElementById('força_dados');
const defesa_dados = document.getElementById('defesa_dados');
const classificado_dados = document.getElementById('classificado_dados');
const inimigo_dados = document.getElementById('inimigo_dados');

function flip() {
    const flip_card = document.getElementById("hero_card");
    flip_card.classList.toggle("fliped")
}

nome_dados.innerText = typeof(nome.value);
poder_dados.innerText = typeof(poder.value);
fraqueza_dados.innerText = typeof(fraqueza.value);
forca_dados.innerText = typeof(forca.value);
defesa_dados.innerText = typeof(defesa.value);
classificado_dados.innerText = typeof(classificado.value);
inimigo_dados.innerText = typeof(inimigo.value);
console.log(nome.value);

