const prompt = require("prompt-sync")({ sigint: true });

function noParesDeContarImparesHasta(numero){
    let cont = 0;
    for(let i = 0; i <= numero; i++){
        if (i % 2 == 1) {
            cont = cont+1;
        }
    }
    return cont;
}
console.log(noParesDeContarImparesHasta(4));

function tablaDeMultiplicar(numero) {
    let i = 0;
    while(i <= 10) {
        i++;
    }
}


let f = 6;
do{
    console.log(f);
    f++;
}
while(f <= 5)

for(let i = 1; i <=5; i++ ){
    console.log(i);
}

for(let i = 11; i <=50; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
function sumarDiez(){ 
    let a = parseInt(prompt("ingrese un numero: "));
    let i= 1;
    while (i <=10) {
    console.log(a+i);
    i++;
    }
}
sumarDiez();

// let i = 5;
// while (i <=20){
//     i+=3;
// }
// console.log(i);


//FOR
//QUE QUREMOS REPETIR
//cuantas veces queremos que se repita
//que queremos que cambie en cada repeticion

//FIBONACCI

/* 5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro.
*/
//Orden en la serie
// 1  2  3  4  5  6  7   8   9   10
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// resultado = a + b
// a = b
// b = resultado



//que queremos repetir.
//cuantas veces queremos que se repita.
//que queremos que cambie en cada repetición.
