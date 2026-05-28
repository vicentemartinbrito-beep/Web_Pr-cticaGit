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