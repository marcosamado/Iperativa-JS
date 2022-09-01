const prompt = require("prompt-sync")({ sigint: true });


let hasta = Number(prompt("ingresa el numero limite para devolverte los primos: "));
let numeros = [];
for(let i = 0; i < hasta; i++){
    numeros[i] = i+1;
}
function quitarMultiplos(n,num) {
    for(let i = 0; i <= num.length; i++){
        if(num[i] % n == 0 && num[i]>n){
            num.splice(i,1);
        }
    }
    
}

function cribaEra(longitud,num){
    let iter = Math.ceil(Math.sqrt(longitud));
    for(let i = 2; i < iter; i++){
        quitarMultiplos(i,num);
    }
    num.shift();
}
console.time("t1");
cribaEra(hasta,numeros);
console.timeEnd("t1");

console.log(numeros);



// vamos a ingresar 8 numeros por terminal que van a ser las coordenadas de 4 puntos  -


// let A = [2,1];
// let B = [4,3];
// let C = [5,3];
// let D = [2,7];

// function ecuacionRecta(A,B,x){
//     let y;
//     A[0] != B[0] ? y = (B[1]-A[1]) / (B[0]-A[0]) * (x-A[0]) + A[1] : y = "Los X de los puntos no pueden ser Iguales"; 
//     return y;
// }
// console.log("valor y de la recta 1");
// console.log(ecuacionRecta(A,B,3));
// console.log("valor y de la recta 2");
// console.log(ecuacionRecta(C,D,3));

// function interseccion(A,B,x){
//     (B[1]-A[1]) / (B[0]-A[0]) ;
//     }
// interseccion();

// function menciona(texto,palabra){
//     if (texto.indexOf(palabra) == -1 ){
//     return false;
//     }else {
//     return true 
//     }
// }
// console.log(menciona("este es un texto","la"));

let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11);
console.log(licenciada);
