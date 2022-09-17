let paises = [
    {
    nombre: "Argentina",
    continente: "Sudamerica",
    copaMundial: true,
    clima: "nublado"
    },
    {
    nombre: "brasil",
    continente: "Sudamerica",
    copaMundial: true,
    clima: "soleado"
    },
    {
    nombre: "venezuela",
    continente: "Sudamerica",
    copaMundial: true,
    clima: "nublado"
    },
    {
    nombre: "chile",
    continente: "Sudamerica",
    copaMundial: false,
    clima: "lluvios"
    },
    {
    nombre: "australia",
    continente: "oceania",
    copaMundial: false,
    clima: "soleado"
    },
    {
    nombre: "nueva zelanda",
    continente: "oceania",
    copaMundial: true,
    clima: "lluvios"
    },
];
// ● Crear una función que reciba como parámetro un arreglo de objetos y un continente.
// La función deberá retornar un nuevo arreglo que contenga solo los países que sean
// del continente pasado por parámetro, y además, que dicho país tenga una
// copaMundial.

function buscarPais(arreglo,continente){
    let paisConCopas = [];
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i].continente == continente && arreglo[i].copaMundial){
            paisConCopas.push(arreglo[i]);
        }
    }
    return paisConCopas;
}
// console.log(buscarPais(paises,"Sudamerica"));

let arrayDeNumeros = [1, 2, 3, 8, 9, 104, 5, 6, 7, 15];

// Crear una función que reciba como parámetros el array y un string que
// represente el sentido de ordenamiento, la función deberá realizar un
// ordenamiento interno del array según el orden indicado
// ● “ASC” lo ordenará ascendente
// ● “DESC” lo ordenará descendente
// Para analizar el correcto funcionamiento imprimir por consola el array antes y
// después de ejecutar la función.

// funcion que reciba arrayDeNumeros y "asc" o "desc" y ordenar segun lo que el parametro, debo imprimir el array antes y despues

function ordenandoArreglo(arreglo,ordenamiento){
    console.log(arreglo)
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length; j++) {
            if(arreglo[j] > arreglo[j+1] && ordenamiento == "asc"){
                let aux = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = aux;
            }else if(arreglo[j] < arreglo[j+1] && ordenamiento == "desc"){
                let aux = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = aux;
            }
        }
    }
    return arreglo;
};
// console.log(ordenandoArreglo(arrayDeNumeros,"desc"));
// console.log(ordenandoArreglo(arrayDeNumeros,"asc"));

// 1. Crear una matriz de 5 x 3
// 2. Sumar todos los valores de las filas impares (considerando que la primera fila es la
// 0, la segunda la 1, etc)
// 3. Crear una función que recorra la columna 1 y me devuelva, por cada valor de la
// columna, un objeto con una propiedad llamada ‘número’ y que el valor sea el
// elemento de la matriz

let matrizz = [
    [2,3,5],
    [5,6,2],
    [8,7,1],
    [6,9,2],
    [1,6,7]
];

function sumaFilaImpar(matriz){
    sumaImpares = 0;
    for (let i = 1; i < matriz.length; i+=2) {
        for (let j = 0; j < matriz[i].length; j++) {
            sumaImpares += matriz[i][j];
        }
    }
    return sumaImpares;
};
console.log(sumaFilaImpar(matrizz));

function columnaUno(matriz){
    nuevoObjeto = {};
    for (let i = 0; i < matriz.length; i++) {
        nuevoObjeto["numero"+ " "+ i] = matriz[i][1];
    }
    return nuevoObjeto;
};
// console.log(columnaUno(matrizz));;

function columnaUno(matriz,nombreClave){
    nuevoArreglo = [];
    for (let i = 0; i < matriz.length; i++) {
        objeto = {};
        objeto[nombreClave] = (matriz[i][1]);
        nuevoArreglo.push(objeto);
    }
    return nuevoArreglo;
};
console.log(columnaUno(matrizz,"numero"));