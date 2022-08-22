const prompt = require("prompt-sync")({ sigint: true });

// 1. Crear una función que convierta pulgadas en centímetros.

// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

// function conversionPulgCm(pulgadas){
//     return pulgadas * 2.54;
// }
// console.log(conversionPulgCm(10));

let conversionPulgCm = pulgadas => pulgadas * 2.54;

console.log(conversionPulgCm(10));

// Crear una función que recibe un string y lo convierte en una URL.
// Ej: “pepito” es devuelto como “http://www.pepito.com”

// function pagina(nombre){
//     return "http://www." + nombre + ".com"
// }
// console.log(pagina("chonejo"));

let pagina = nombre => "http://www." + nombre + ".com";
console.log(pagina("entraaqui"));

// Crear una función que recibe un string y devuelve la misma frase pero con
// admiración.

function saludo(frase){
    return frase + "!!!!";
}
console.log(saludo("HOLA COMO ANDAS"));

// Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos.

function edadPerro(anios) {
    return anios * 7;    
}
console.log(edadPerro(6));

// Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro.
// PD: considerá que tu mes de trabajo tiene 40 horas.

function valorHora(sueldo){
    return sueldo / 40;
}
console.log(valorHora(90000));

// Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
// probando diferentes valores.

function calculadorIMC(altura,kilogramos){
    return kilogramos / (altura*altura);
}
console.log(calculadorIMC(1.90,88));

// Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
// y lo retorne.

function mayuscula(frase){
    return frase;
}
console.log(mayuscula("rigooooooooooooooooooo".toUpperCase()));

// Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
// parámetro.

function tipoDeDato(dato){
    return typeof dato;
}
console.log(tipoDeDato(10));

// Crear una función que le pasamos el radio de un círculo y nos devuelve la
// circunferencia.

function circunferencia(radio){
    let diametro = radio * 2;
    return diametro * Math.PI ;
}
console.log(circunferencia(10));




