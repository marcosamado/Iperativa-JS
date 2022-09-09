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



let matrizNueva = [];
let acumulador = 1;
for (let i = 0; i < 10; i++){
    matrizNueva.push([]);
    for(let j = 0; j < 10; j++){
        matrizNueva[i][j] = j + acumulador;
    }
    acumulador += 10;
}
console.table(matrizNueva);


function sumarDiagonal(matriz){
    let suma = 0;
    for(let i = 0; i < matriz.length; i++){
        for(j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] == matriz[i][j]){
                suma += matriz[i][j] 
            }
        }
        return suma;
    }
}
console.log(sumarDiagonal(matrizNueva));

