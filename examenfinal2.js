const alumnos = [
    {
    id: 0,
    nombre: "Leandro",
    apellido: "Borrelli",
    legajo: 20210308,
    notas: [],
    },
    {
    id: 1,
    nombre: "Esteban",
    apellido: "Piazza",
    legajo: 20210211,
    notas: [],
    },
    {
    id: 2,
    nombre: "Martin",
    apellido: "Cejas",
    legajo: 20210218,
    notas: [],
    },
    {
    id: 3,
    nombre: "Karina",
    apellido: "Borgna",
    legajo: 20210516,
    notas: [],
    },
    {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [],
    },
];

// 2. Crear una función que ordene la estructura definida en el archivo final.js
// según la propiedad legajo de forma descendente. (*)

function ordenandoAlumnos(arreglo,propiedad){
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length- 1; j++) {
            if(arreglo[j][propiedad] < arreglo[j+1][propiedad]){
                let cont = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = cont;
            }
        }
    }
    return arreglo;
}
// console.log(ordenandoAlumnos(alumnos,"legajo"));

// Dado el objeto 
let alumno = {
id: 5,
nombre: "Lucas",
apellido: "Astrada",
legajo: 20220125,
notas: [10,6,8,7,9]
};
// 3. Crear un método que retorne el promedio de notas. (*)

function promedioNotas(objeto){
    suma = 0;
    for (let i = 0; i < objeto.notas.length; i++) {
        suma += objeto.notas[i];
    }
    return suma / objeto.notas.length;
};
// console.log(promedioNotas(alumno));

// 4. Crear una función que ordene las notas del alumno de forma ascendente.

function ordenandoNotas(objeto){
    for (let i = 0; i < objeto.notas.length; i++) {
        for (let j = 0; j < objeto.notas.length -1; j++) {
            if (objeto.notas[j] < objeto.notas[j+1]) {
                let cont = objeto.notas[j];
                objeto.notas[j] = objeto.notas[j+1];
                objeto.notas[j+1] = cont;
            }
        }
    }
    return objeto;
};
// console.log(ordenandoNotas(alumno));


// A. Crea una matriz de 3x3, cuadrada, con números enteros negativos en
// cada una de sus posiciones.

function crearMatriz(filas, columnas){
    let matriz = [];
    for (let fila = 0; fila < filas; fila++) {
        let nuevaFila = [];
        for (let col = 0; col < columnas; col++) {
            nuevaFila[col] = Math.round(Math.random()*100*-1);
        }
        matriz.push(nuevaFila);
    }
    return matriz;
}
// console.table(crearMatriz(3,3))
let matrizzz = [
    [-8,-6,-20],
    [-25,-38,-90],
    [-9,-33,-55]
];

// B. Crear una función que retorne la suma de todos los números dentro de la
// matriz que sean múltiplos de 5.
function multiplosCinco(matriz){
    let acumulador = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] % 5 == 0){
                acumulador += matriz[i][j];
            }
        }
    }
    return acumulador;
};
// console.log(multiplosCinco(matrizzz));
// C. Crear una función que retorne un valor booleano dependiendo si la suma
// de todos los valores de la matriz es impar.
function sumaDeTodo(matriz){
    let acumulador = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acumulador+= matriz[i][j];
        }
    }
    return acumulador % 2 != 0 ? true : false;
};
console.log(sumaDeTodo(matrizzz));

// D. Crear una función que retorne la multiplicación de las diagonales de la
// matriz.

function multiplicacionDiag(matriz){
    let multip1 =1;
    let multip2 =1;
    for (let i = 0; i < matriz.length; i++) {
        multip1 *= matriz[i][i];
    }
    for (let j = 0; j < matriz.length; j++) {
        multip2 *= matriz[j][matriz.length -1 - j];
    }
    return [multip1, multip2];
};
console.log(multiplicacionDiag(matrizzz));