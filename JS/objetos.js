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