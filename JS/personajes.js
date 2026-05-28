// Mostrar/ocultar descripción de personajes
let descripciones = document.getElementsByClassName("descripcion");

for (let i = 0; i < descripciones.length; i++) {
    descripciones[i].style.display = "none";
}

function mostrarInfo(id, boton) {
    let descripcion = document.getElementById(id);
    let nombreGrande = document.getElementById("nombre-" + id);
    if (descripcion.style.display === "none") {
        descripcion.style.display = "";
        nombreGrande.style.display = "none";
        boton.innerHTML = "Ver menos";
    } else {
        descripcion.style.display = "none";
        nombreGrande.style.display = "";
        boton.innerHTML = "Ver más";
    }
}

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