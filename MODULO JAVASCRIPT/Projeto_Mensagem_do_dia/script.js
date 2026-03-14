mensagem = document.getElementById("pMensagem")
btnMensagem = document.getElementById("btnMensagem")


const data = new Date();
const diaSemana = data.getDay();
console.log(diaSemana);

btnMensagem.addEventListener("click", function aparecerMensagem() {
    switch (diaSemana) {
    case 0:
        mensagem.innerText =  "Hoje é domingo tenha um bom descanso! "
        break;

    case 1:
        mensagem.innerText =  "Hoje é segunda-feira e eu venho te desejar muita força e motivação para esta nova semana! Continue brilhando e conquistando o mundo! Bom dia! Que a luz do Sol ilumine o seu caminho e o seu coração nesta segunda-feira especial e abençoada!"
        break;

    case 2:
        mensagem.innerText =  "Que seu dia seja produtivo e cheio de alegria! Boa terça-feira!"
        break;

    case 3:
        mensagem.innerText =  "Quarta-feira chegou! Que o ritmo da semana não roube sua sensibilidade, e que você siga enxergando beleza nas pequenas coisas — no cheiro do café, no céu que muda, na gentileza de alguém"
        break;

    case 4:
        mensagem.innerText =  "Que a sua quinta-feira seja repleta de paz, esperança e boas energias para inspirar novas conquistas, e que cada passo hoje te aproxime mais dos seus objetivos e da tranquilidade do fim de semana!"
        break;

    case 5:
        mensagem.innerText =  "Não há nada melhor que a capacidade de desfrutar plenamente de uma sexta-feira e viver a vida que se deseja. Sexta-feira é um lembrete de que, mesmo nas rotinas mais intensas, sempre há um momento de alívio e renovação à vista. Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite."
        break;

    case 6:
        mensagem.innerText =  "Sabadou! Dia de ser feliz e recarregar as energias"
        break;

    default:
        break;
}
})

