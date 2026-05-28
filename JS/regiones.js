// Galería de regiones
let cargar = document.getElementsByClassName("img");
let indice = 0;

for (let i = 0; i < cargar.length; i++) {
    cargar[i].style.display = "none";
}
cargar[indice].style.display = "";

document.getElementById("anterior").addEventListener("click", function () {
    cargar[indice].style.display = "none";
    indice--;
    if (indice < 0) { indice = cargar.length - 1; }
    cargar[indice].style.display = "";
});

document.getElementById("siguiente").addEventListener("click", function () {
    cargar[indice].style.display = "none";
    indice++;
    if (indice >= cargar.length) { indice = 0; }
    cargar[indice].style.display = "";
});