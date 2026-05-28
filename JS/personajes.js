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

// Creador de Sinluz
let botonCambiar = document.getElementById("crear");
botonCambiar.addEventListener("click", function () {

    const clase = document.getElementById("class").value;
    const nombre = document.getElementById("nombre").value;
    const recuerdo = document.getElementById("recuerdo").value;
    const tablaResultado = document.getElementById("resultado-clase");

    let nombreClase, nivel, imagen, vig, men, res, fue, des, int2, fe, arc;

    if (clase === "vagante") {
        nombreClase = "Vagante"; nivel = 9; imagen = "../IMG/vagante.png";
        vig = 15; men = 10; res = 11; fue = 14; des = 13; int2 = 9; fe = 9; arc = 7;
    } else if (clase === "samurai") {
        nombreClase = "Samurai"; nivel = 9; imagen = "../IMG/samurai.png";
        vig = 12; men = 11; res = 13; fue = 12; des = 15; int2 = 9; fe = 8; arc = 8;
    } else if (clase === "guerrero") {
        nombreClase = "Guerrero"; nivel = 8; imagen = "../IMG/guerrero.png";
        vig = 11; men = 12; res = 11; fue = 10; des = 16; int2 = 10; fe = 8; arc = 9;
    } else if (clase === "heroe") {
        nombreClase = "Héroe"; nivel = 7; imagen = "../IMG/heroe.png";
        vig = 14; men = 9; res = 12; fue = 16; des = 9; int2 = 7; fe = 8; arc = 11;
    } else if (clase === "astrologo") {
        nombreClase = "Astrólogo"; nivel = 6; imagen = "../IMG/astrologo.png";
        vig = 9; men = 15; res = 9; fue = 8; des = 12; int2 = 16; fe = 7; arc = 9;
    } else if (clase === "prisionero") {
        nombreClase = "Prisionero"; nivel = 9; imagen = "../IMG/prisionero.png";
        vig = 11; men = 12; res = 11; fue = 11; des = 14; int2 = 14; fe = 6; arc = 9;
    } else if (clase === "profeta") {
        nombreClase = "Profeta"; nivel = 7; imagen = "../IMG/profeta.png";
        vig = 10; men = 14; res = 8; fue = 11; des = 10; int2 = 7; fe = 16; arc = 10;
    } else if (clase === "confesor") {
        nombreClase = "Confesor"; nivel = 10; imagen = "../IMG/Confesor.png";
        vig = 10; men = 13; res = 10; fue = 12; des = 12; int2 = 9; fe = 14; arc = 9;
    } else if (clase === "bandido") {
        nombreClase = "Bandido"; nivel = 5; imagen = "../IMG/bandido.png";
        vig = 10; men = 11; res = 10; fue = 9; des = 13; int2 = 9; fe = 8; arc = 14;
    } else if (clase === "miserable") {
        nombreClase = "Miserable"; nivel = 1; imagen = "../IMG/miserable.png";
        vig = 10; men = 10; res = 10; fue = 10; des = 10; int2 = 10; fe = 10; arc = 10;
    }

    tablaResultado.innerHTML =
        "<img class='clase-img' src='" + imagen + "' alt='" + nombreClase + "'>" +
        "<table class='tabla-stats'>" +
        "<tr><td>Nombre:</td><td colspan='3'>" + nombre + "</td></tr>" +
        "<tr><td>Clase:</td><td colspan='3'>" + nombreClase + "</td></tr>" +
        "<tr><td>Nivel:</td><td colspan='3'>" + nivel + "</td></tr>" +
        "<tr><td>Regalo:</td><td colspan='3'>" + recuerdo + "</td></tr>" +
        "<tr><td>VIG</td><td>" + vig + "</td><td>DES</td><td>" + des + "</td></tr>" +
        "<tr><td>MEN</td><td>" + men + "</td><td>INT</td><td>" + int2 + "</td></tr>" +
        "<tr><td>RES</td><td>" + res + "</td><td>FE</td><td>" + fe + "</td></tr>" +
        "<tr><td>FUE</td><td>" + fue + "</td><td>ARC</td><td>" + arc + "</td></tr>" +
        "</table>";
});