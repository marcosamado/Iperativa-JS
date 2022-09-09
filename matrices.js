const prompt = require("prompt-sync")({ sigint: true });
//***************SUMAR CONTENIDOS DE MATRIZ */
// let numeros = [
//     [10,3,2,1,4,7],
//     [5,5,10,100,4],
//     [5,125,10,1020,4],
//     [5,5,5097,100,4]
// ];
// function suma(matriz){
//     let acumulador = 0;
//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             if (matriz[i][j] >= 10 && matriz[i][j] < 1000){
//                 acumulador += matriz[i][j]; 
//             }
//         }
//     }
//     return acumulador;
// }
// console.log(suma(numeros));



// let matrizNueva = [];
// let acumulador = 1;
// for (let i = 0; i < 10; i++){
//     matrizNueva.push([]);
//     for(let j = 0; j < 10; j++){
//         matrizNueva[i][j] = j + acumulador;
//     }
//     acumulador += 10;
// }
// console.table(matrizNueva);


// function sumarDiagonal(matriz){
//     let suma = 0;
//     for(let i = 0; i < matriz.length; i++){
//         for(j = 0; j < matriz[i].length; j++){
//             if(i === j){
//                 suma += matriz[i][j];
//             }
//         }
//     }
//     return suma;
// }
// console.log(sumarDiagonal(matrizNueva));

// function sumaDiagonalInvertida(matriz){
//     let sumar = 0;
//     for (let i= 0; i < matriz.length; i++){

//     }
// }

// Desarrollar una matriz de Strings llamada mice que represente la imagen.
// ● Mostrar a luisa.
// ● Cambiar él valor null por Jerry
// ● Crear una función que reciba por parámetro la matriz creada e imprimir por consola
// él saludo de cada elemento:
// ○ Hola soy lucas
// ○ Hola soy camila

let mice = [
    ["lucas","camila","pedro"],
    ["juan",  "luisa" , null]
]

console.log(mice[1][1]);

mice[1][2] = "Jerry";
console.log(mice);


function saludo(matriz){
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log("Hola soy " + matriz[i][j]);
        }
    }
}
saludo(mice);



// Function `printArray()` prints all the elements of a 2D array using nested for loops.
let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
        ];

// printArray(arr) //  1 2 3 4 5 6

function printArray(array){
    let nuevoPrint = [];
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++) {
            nuevoPrint.push(array[i][j]);
        }
    }
    return nuevoPrint;
}
console.log(printArray(arr));


// Function printPattern() is used to print a pattern for a given range using nested for loop.

// printPatter(8);

/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 */