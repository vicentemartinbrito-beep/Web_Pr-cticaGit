// Imágenes automáticas Cenizas de Guerra
let cargar = document.getElementsByClassName("ceniza");
let indice = 0;

for (let i = 0; i < cargar.length; i++) {
    cargar[i].style.display = "none";
}
cargar[indice].style.display = "";

function pasarImagenes() {
    for (let i = 0; i < cargar.length; i++) {
        cargar[i].style.display = "none";
    }
    indice++;
    if (indice >= cargar.length) { indice = 0; }
    cargar[indice].style.display = "";
}

setInterval(pasarImagenes, 3000);

// Contador de visitas
if (!sessionStorage.getItem("visitado")) {
    sessionStorage.setItem("visitado", true);
    let visitas = localStorage.getItem("visitas");
    if (visitas === null) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }
    localStorage.setItem("visitas", visitas);
}
document.getElementById("visitas").innerHTML = "Visitas: " + localStorage.getItem("visitas");

// Reloj
let reloj = document.getElementById("reloj");
function actualizarReloj() {
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    if (horas < 10) { horas = '0' + horas; }
    if (minutos < 10) { minutos = '0' + minutos; }
    if (segundos < 10) { segundos = '0' + segundos; }

    setTimeout(actualizarReloj, 1000);
    reloj.innerHTML = horas + ":" + minutos + ":" + segundos;
}
actualizarReloj();