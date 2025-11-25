const robo = document.getElementById("imgRobo");
const porco = document.getElementById("imgPorco");
const tigre = document.getElementById("imgTigre");

// ROBÔ
robo.addEventListener("mouseover", function () {
    robo.style.filter = "opacity(100%)";
});

robo.addEventListener("mouseout", function () {
    robo.style.filter = "opacity(0%)";
});

// PORCO
porco.addEventListener("mouseover", function () {
    porco.style.filter = "opacity(100%)";
});

porco.addEventListener("mouseout", function () {
    porco.style.filter = "opacity(0%)";
});

// TIGRE
tigre.addEventListener("mouseover", function () {
    tigre.style.filter = "opacity(100%)";
});

tigre.addEventListener("mouseout", function () {
    tigre.style.filter = "opacity(0%)";
});
