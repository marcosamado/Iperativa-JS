const prompt = require("prompt-sync")({ sigint: true });

// 1. Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de
// las películas una vez creada la estructura correspondiente.

let peliculas = ["stars wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
// en mayúsculas. Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.
// Pista: revisá qué hace el método de strings .toUpperCase().
// let array = [];
function peliculasMayusculas(array){
    for(let i= 0; i < array.length; i++){
        array[i] = array[i].toUpperCase();
    }
    return array;
}
console.log(peliculasMayusculas(peliculas));

// Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
// crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
// para poder agregar los elementos contenidos en el segundo array dentro del
// primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas.

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
peliculasMayusculas(peliculasAnimadas);
console.log(peliculasAnimadas);

// let concatenando = [];
// concatenando = peliculas.concat(peliculasAnimadas);
// console.log(concatenando);
let juego = peliculasAnimadas.pop();

let todasLasPeliculas = [];
function agregandoPelis(array1,array2){
    todasLasPeliculas = array1.concat(array2);
    return todasLasPeliculas;
}
agregandoPelis(peliculas,peliculasAnimadas);
console.log(todasLasPeliculas);

// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
// array de películas animadas es un videojuego. Ahora tenés que editar el código y
// modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
// contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.

console.log(todasLasPeliculas);
console.log(juego);

// Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
// del mundo sobre las películas con el siguiente formato:

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// Te piden crear una función que compare las calificaciones e indique si son iguales
// o diferentes. Te confirman que están en el orden adecuado y que solo traen
// valores numéricos del 1 al 10.

function comparacion(asia,euro){
    for(let i = 0; i <asia.length; i++){
        if(asia[i] === euro[i]){
            console.log("Son iguales");
        }else{
            console.log("Son diferentes");
        }
    }
}
comparacion(asiaScores,euroScores);

// En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
// números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:
let arreglo = [4,5,1];
function sumaArray(array){
    let suma = 0;
    for(let i = 0; i<array.length; i++){
        suma = suma + array[i];
    }
    return suma;
}
console.log(sumaArray(arreglo));

// En este ejercicio deberás crear una función que devuelva un array con sus elementos
// invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta
// el orden de sus elementos.
let arraicito = [1,2,3];
function invertido(array){
    for(let i = array.length -1; i >= 0; i--){
        console.log(array[i]);
    }
}
invertido(arraicito);




