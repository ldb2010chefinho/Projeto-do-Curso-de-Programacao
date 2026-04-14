const guest_name = document.getElementById("guestName");
const btn_actions = document.getElementById("actions");
const guest_list = document.getElementById("guest-list");
const array_name = [];

const sortArray = document.getElementById("sort_list")
const clearArray = document.getElementById("clean_list")
const downloadArray = document.getElementById("download_list")

let content = "";

//ADICIONAR CONVIDADO
const add_name = document.getElementById("add");
    
function add_guest_name(){
if (guest_name.value === "") {
    alert("Adicione o nome do convidado")
}
else{
    array_name.push(guest_name.value);
    btn_actions.style.display = "block";
    showList(guest_name.value)
}
guest_name.value = "";
}
//MOSTRAR LISTA DE NOMES 
function showList(guest) {
    let element_li = document.createElement("li")
    element_li.innerText = guest;
    guest_list.appendChild(element_li);
    let btn_close = document.createElement("span")
    btn_close.innerHTML = "\u00d7";
    element_li.appendChild(btn_close);
}
//  BTN ORGANIZAR LISTA
sortArray.addEventListener("click", function(){sortList()});
function sortList() {
    array_name.sort();
    guest_list.innerHTML = "";
    array_name.forEach(showList)
}
///////////////////////////////////
//BTN LIMPAR LISTA

function clearList() {
    btn_actions.style.display = "none";
    guest_list.innerHTML = "";
    array_name.length = 0;
}

///////////////////////////////////
//BTN DOWNLOAD LISTA

function downloadList() {
    if (array_name.length == 0) {
        alert("Adicione os nomes dos convidados")
        return true
    }
    const today = new Date().toLocaleDateString();
    content += `\nGerado em: ${today} \n\n`;
    content += "Lista de Convidados \n\n";

    array_name.forEach((guest, index) => {
        content += `${index + 1}. ${guest}\n`;
    })
    const file = new Blob([content], { type: "text/plain"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "lista-de-convidado.txt";
    link.click();
};

///////////////////////////////////
//EVENTOS

guest_name.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.key == "Enter") {
        add_guest_name()
    }
})

add_name.addEventListener("click", function (){ add_guest_name() });

clearArray.addEventListener("click", function(){clearList()})

downloadArray.addEventListener("click", function(){downloadList()})

guest_list.addEventListener("click", (e)=>{
    if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
    }    
},false)