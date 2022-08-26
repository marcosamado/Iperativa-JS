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

// let aleatorio = parseInt(Math.random()*10);
// let numUsuario = Number(prompt("Adivina el numero: "));

// if (aleatorio === numUsuario) {
//     console.log("Felicitaciones, ese era!");
// } else {
//     console.log("Lo siento, intenta nuevamente!");
// };
// console.log(aleatorio);

// Escribí un programa que imprima los números pares del 0 al
// 100.

// function numerosPares(){
//     for(let i=0; i<=50; i++){
//         console.log(i+i);
//     } 
// }
// numerosPares();

// Escribí un programa que itere sobre el arreglo nombres e
// imprima cada uno en la consola: const nombres = ["Pedro",
// "Pablo", "Maria", "Juan", "Diana"];


// let nombres = ["Pedro","Pablo","Maria","Juan","Diana"];
// function devolverMayuscula(nombres){
//     for (let i= 0; i<=4; i++){
//         console.log(nombres[i].toUpperCase()); 
//     }
// }
// devolverMayuscula(nombres);

// Construí un pseudocódigo que permita ingresar un número, si
// el número es mayor de 500, se debe calcular y mostrar en
// pantalla el 18% de este.

// ingresar un numero X ---  si X > 500 --   x * 18 / 100 = 

// function veremos(x) {
//     if (x > 500){
//         x=  (x * 18) / 100;
//     }else {

//     }
//     return x;
// }
// console.log(veremos(1000));

// Escribí una función llamada elemento que recibe un arreglo
// como parámetro. La función debe devolver el valor que se
// encuentra en la tercera posición. Si el arreglo no tiene al menos
// 3 elementos deberá retornar -1.

// func elemto [] me tiene que devolver el valor que se encuentra en la tercera PromiseRejectionEvent

// let array = ["coco","caca","rigo","rosita"];
// function elemento(array){
//     array.length >=3 ? console.log(array[3]): console.log("-1");
// }
// elemento(array);

// Se ingresa por teclado un número natural de hasta 2 cifras, si
// tiene una cifra que muestre lo mínimo que le falta para ser un
// número de 2 cifras; de lo contrario, que muestre lo mínimo que
// le falta para ser un número de 3 cifras. Considerar que el
// usuario ingresa números de hasta dos cifras.

// --se ingresa el 1 hasta el 99 ---- si es de una cifra (de 1 a 9) que muestre lo que le falta ser 10-
// si es desde 10 hasta 99 - lo que falta para 100

// si el numero es entre 1-9 mostrame 10-el numero que ingreso
// si el numero es entre 10 y 99 mostrame 100 - el numero

// function mostrarNumero(x){
//     if(x <=9 && x >=1) {
//         console.log(10 - x);
//     }else if (x >=10 && x <=99){
//         console.log(100 - x);
//     } else {
//         console.log("ingresa un dato entre 1 y 99");
//     }
// }
// mostrarNumero(9);

// Hacer un algoritmo que muestre el promedio de varias
// notas o de N notas ingresadas, se debe definir el valor de N
// para conocer la cantidad de notas a ingresar.
// X notas - 

function promedio(notas){
    let suma= 0;
    let resultado;
    for(let i = 1; i<= notas; i++){
        suma = suma + Number(prompt("ingresa"));
    }
    resultado = suma/notas;
    return resultado;
}
console.log(promedio(4));