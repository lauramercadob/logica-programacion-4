function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario () {
    alert("Prueba al hacer clic en el botòn")
} 
asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p','Indica un número del 1 al 10');