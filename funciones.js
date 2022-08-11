const prompt = require("prompt-sync")({ sigint: true });

// FUCION EXPRESADA
let sumar = function(numeroA, numeroB) {
    return numeroA + numeroB;
}

console.log(sumar (8,9));

// FUNCION DECLARADA

function restar(numeroC, numeroD) {
    return numeroC - numeroD;

}
console.log(restar(10,8));

// Ejemplos de scope

let mensaje = "hola";

function saludar(){
    let mensaje = "chau"
    return mensaje;
}

console.log(mensaje);
console.log (saludar());

// let nombre;
// let apellido;

function saludo(nombre = "rosita", apellido = "la pistolera") {
    return "hola" + " " + nombre + " " + apellido;

}

console.log(saludo());

let golpe = "puñito ";

function golpearARigo (cantidad) {
    return golpe .repeat(cantidad);
}

let aRigo = golpearARigo(5);

console.log(aRigo);

