const prompt = require("prompt-sync")({ sigint: true });
// *********************** NIVEL 1 *********************** 
//***********/ 1
function suma(a,b) {
    return a+b;
}
console.log(suma(3,5));
//**********/ 2
function sumasi(a,b){
    let resultado = a >= b ? a+b : a-b;
    return resultado;
}
console.log(sumasi(1,6));
//*********/ 3
function sumaTotal(a,b,c,d) {
    let sumando = a+b+c+d ;
    if(sumando >= 7) {
        return "Estas Aprobado";
    }else {
        return "Otra Chance";
    }
}
console.log(sumaTotal(1,1,1,3));
//*********** 4
function mitadODoble(a,b,c,d){
    let sumando = a+b+c+d;
    if(sumando % 2 === 0){
        return sumando / 2;
    }else {
        return sumando * 2;
    }
}
console.log(mitadODoble(2,4,6,7));

// ***************************** NIVEL 2 ***********************

let edad1 = [10,6,7,67,5,9];
let edad2 = [8,9,10,4,25,18];
let edad3 = [7,13,16,2,19];

//****** 1
function promedioEdad (arrayEdad){
    let promedio = 0;
    for (let i = 0; i < arrayEdad.length; i++){
        promedio = promedio + arrayEdad[i];
        
    }
    return promedio / arrayEdad.length;
}
console.log(promedioEdad(edad1));
//********* 2
function mayorElemento(arrayEdad) {
    let mayor = 0;
    for (let i = 0; i < arrayEdad.length; i++){
        if(arrayEdad[i] > mayor){
            mayor = arrayEdad[i];
        }
    }
    return mayor;
}
console.log(mayorElemento(edad1));
//***************3
function mayorElemento(arrayEdad) {
    let mayor = 100;
    for (let i = 0; i < arrayEdad.length; i++){
        if(arrayEdad[i] < mayor){
            mayor = arrayEdad[i];
        }
    }
    return mayor;
}
console.log(mayorElemento(edad1));
// ***************4
function repeticiones(array){
    for (let j=0;j<array.length;j++){
        for (let i=0;i<array.length;i++){
            if (array[j]===array[i]){
                return true;
        }else{
                return false;
        }
    }
    }
}
console.log(repeticiones(edad2));
//**************5
function buscandoEdad(arrayEdad,busca) {
    for(let i = 0; i <arrayEdad.length; i++){
        if(arrayEdad[i] === busca){
            return i;
        }
    }    
    return null;
}
console.log(buscandoEdad(edad2,4));
//******************6
// function retornoObjeto(arrayEdad){
//     let arrayMenor = [];
//     let arrayMayor = [];
//     let j = 0;
//     let p=0;
//     for (let i = 0; i < arrayEdad.length; i++){
//         if(arrayEdad[i] <18){
//             arrayMenor[j] = arrayEdad[i];   
//             j= j+1; 
//         }else{
//             arrayMayor[p] = arrayEdad[i];   
//             p= p+1; 
//         }
//     }
//     return {
//         edadesMenores: arrayMenor,
//         edadesMayores: arrayMayor
//     }
// }
// console.log(retornoObjeto(edad2));
// 2 - Dado el Siguiente array de personas desarrollar funciones:
//   - Funcion que reciba el array de personas y liste el nombre de cada una. 
  let personas=[
    {
    "id": 0,
    "isProgrammer": true,
    "age": 28,
    "name": "Harrington Curry",
    "company": "TRANSLINK",
    "favoriteFruit": "strawberry"
    },
    {
    "id": 1,
    "isProgrammer": false,
    "age": 38,
    "name": "Greta Morton",
    "company": "PYRAMI",
    "favoriteFruit": "apple"
    },
    {
    "id": 2,
    "isProgrammer": false,
    "age": 32,
    "name": "Hester Bowen",
    "company": "TURNABOUT",
    "favoriteFruit": "apple"
    },
    {
    "id": 3,
    "isProgrammer": false,
    "age": 25,
    "name": "Melendez Mcfarland",
    "company": "XSPORTS",
    "favoriteFruit": "strawberry"
    },
    {
    "id": 4,
    "isProgrammer": false,
    "age": 31,
    "name": "Kimberly Matthews",
    "company": "KNOWLYSIS",
    "favoriteFruit": "banana"
    },
    {
    "id": 5,
    "isProgrammer": false,
    "age": 36,
    "name": "Hardin Sims",
    "company": "SEALOUD",
    "favoriteFruit": "banana"
    },
    {
    "id": 6,
    "isProgrammer": false,
    "age": 29,
    "name": "Natalia Huff",
    "company": "ENERSOL",
    "favoriteFruit": "apple"
    }
  ]
function nombresPersonas (personas){
for (let i=0;i<personas.length;i++){
    console.log(personas[i].name);
}
}
nombresPersonas(personas);
// Funcion que reciba el array de personas y retorne en un array los que son programadores.
function sonProgramadores(personas){
    let nuevoArray=[];
    let j=0;
    for (let i=0;i<personas.length;i++){
        if (personas[i].isProgrammer===true){
            nuevoArray[j]=personas[i];
            j=j+1;
        }
    }
    return nuevoArray;
}
