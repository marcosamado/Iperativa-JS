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

let todasLasPeliculas = [];
function agregandoPelis(array1,array2){
    todasLasPeliculas = array1.concat(array2);
    return todasLasPeliculas;
}
agregandoPelis(peliculas,peliculasAnimadas);
console.log(todasLasPeliculas);
