const prompt = require("prompt-sync")({ sigint: true });

// 1) Escribí un programa que le pida al usuario ingresar una frase y
// la imprima en la consola.
// Recordá que para pedirle al usuario que escriba una frase
// debés utilizar el método prompt() y para escribir en la consola
// debés utilizar el método console.log().

// let frase = prompt("Ingresa tu frase: ");
// console.log(frase);

// 2) Escribí un programa que le pregunte al usuario su nombre e
// imprima "Hola " seguido del nombre y un signo de
// exclamación.
// Por ejemplo, si el usuario ingresa "Pedro" el programa debe
// imprimir en la consola "Hola Pedro!".

// let nombre = prompt("Cual es tu nombre? ");
// console.log("Hola " + nombre + " !!");

// 3) Escribí un programa que le pida al usuario ingresar un número,
// luego le pida un segundo número, e imprima en la consola la
// suma de los dos números que ingresó el usuario.

// let num1 = Number(prompt("Ingresa el primer numero: "));
// let num2 = Number(prompt("Ingresa el segundo numero:"));
// console.log("la suma de esos numeros es: " + (num1 + num2));

// 4) Escribí un programa que le pida al usuario su año de
// nacimiento e imprima su edad actual en la consola con la frase
// "Tienes X años" (siendo X la cantidad de años).
// Por ejemplo, asumiendo que el año actual es 2019 y el usuario
// ingresa 1999, el programa debe imprimir en la consola: “Tienes
// 20 años”.

// let anioNacimiento = Number(prompt("Ingresa tu año de nacimiento:"));
// console.log("Tienes " + (2022 - anioNacimiento) + " años");

// 5) Escribí un programa que piense un número de forma aleatoria
// del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
// número es correcto debe imprimir en la consola "Felicitaciones,
// ese era!", de lo contrario, debe imprimir "Lo siento, intenta
// nuevamente!"

let aleatorio = Math.round(Math.random()*10);
let numUsuario = Number(prompt("Adivina el numero: "));

if (aleatorio === numUsuario) {
    console.log("Felicitaciones, ese era!");
} else {
    console.log("Lo siento, intenta nuevamente!");
};
console.log(aleatorio);