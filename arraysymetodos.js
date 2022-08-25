const prompt = require("prompt-sync")({ sigint: true });

// ARRAYS
let nombres = ["marcos", "nico", "rosita"];
let edades = [20,35,10,23,12,10,9];
let valoresDeVerdad = [true,false,true];
let variados = ["marcos", 34 , false, "rigo", edades];

console.log(variados[4][6]);

// METODOS ARRAYS
// .push[] -----------------------AGREGAR  DATOS al ultimo en los arrays
let colores = ["azul","verde","rojo"];

colores.push("amarillos,negro");

console.log(colores);

//unshift ----------------------AGREGA ELEMENTOS AL PRINCIPIO EN LOS INDICES
let comidas = ["piza", "burguers", "lomito"];

comidas.unshift("barroluco");

console.log(comidas);
// .pop() ------------------------- quita el ultimo elemento de la array y retorna el dato !, (recomendable asignar nueva variable)
let names = ["rigo","marcos","rosita"];

let extraigo_nombre = names.pop();

console.log(extraigo_nombre);

//shift ------------------- quita el primer elemento de la array y retorna el dato !, (recomendable asignar nueva variable al dato extraido
let nomb = ["rigo", "rosita", "chop"];

let extraigo_nomb = nomb.shift();

console.log(extraigo_nomb);

// indexOf() -------------------- sirve para buscar el elemento dentro del array desde el index 0 en adelante
let numeros = [1,3,4,6,7,8,10,11,6];

let posicionDelSeis = numeros.indexOf(6);
console.log(posicionDelSeis);

//lastIndexOf()-------------------- busca desde el ultimo elemento para atras dentro de la array

console.log(numeros.lastIndexOf(6));

//Join() ---------------------- Para unificar todos los elementos de una array

console.log(numeros.join(" ---- "));

///-----------------STRINGS
//indexOf ---------- busca el string que recibe como parametro
let saludos = "Hola que tal";
console.log(saludos.indexOf("Hola")); //---- Devuelve el valor index 0
console.log(saludos.indexOf("a")); // ------

//slice - corta el string y devuelve la parte donde se aplica, en negativo muestra desde el final para atras
let frase = "breaking bad rules!";
console.log(frase.slice(10,12));
console.log(frase.slice(-10));

//length -------------- Retorna la cantidad de caracteres que tiene el string, inluidoslos espacios
let texto = "Mad Med";
console.log(texto.length); //------ retorna 7 caracteres incluyendo el espacio
let arraytexto = ["mad", "manes", "man"];
console.log(arraytexto.length); //---------- devuelve 3 elementos que tiene el array
console.log(arraytexto[1].length);//----------- devuelve 5 (manes)





