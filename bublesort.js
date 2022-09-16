const prompt = require("prompt-sync")({ sigint: true });


let gente = [
    {
    nombre: "Dua",
    apellido: "Lipa",
    ocupacion: "cantante",
    estatura: 173
    },
    {
    nombre: "Ariana",
    apellido: "Grande",
    ocupacion: "cantante",
    estatura: 160
    },
    {
    nombre: "Taylor",
    apellido: "Swift",
    ocupacion: "cantante",
    estatura: 180
    }
];
function ordenarEstatura(objeto,parametro) {
    for (let i = 0; i < objeto.length; i++) {
    for (let j = 0; j < objeto.length - 1; j++) {
        if (objeto[j][parametro] > objeto[j + 1][parametro]) {
        let cont = objeto[j];
        objeto[j] = objeto[j + 1];
        objeto[j + 1] = cont;
        }
    }
    }
}
ordenarEstatura(gente, "estatura");
// console.log(gente);

let matrizGastos = [
    [1135,2500,900,1600,2800,3650,1100],
    [1750,1890,1900,1300,898,1750,2800],
    [1700,1150,1690,1900,1770,4500,2560],
    [800,1250,1430,2100,1980,1270,950]
];
// a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 
// necesito recorrer y sumar los elementos de una fila de una columna.

function gastoSemana(matriz,columna){
    let sumador = 0;
            for(let j = 0; j < matriz[columna].length; j++){
            sumador += matriz[columna][j];
            // console.log(sumador);
        }
        return sumador;
    };
// console.log(gastoSemana(matrizGastos,1));

// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
// buscar la semana elegida (indice) , buscar el dia 
function gastoDia(semana,dia){
    return matrizGastos[semana][dia];
};
// console.log(gastoDia(0,1));
// ------------------
function gastoDiaDeMes(matriz,dia){
    let sumador = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(dia == j){
                sumador += matriz[i][j];
            }
        }
    }
    return sumador;
};
// console.log(gastoDiaDeMes(matrizGastos,3));

let promedio = gastoDiaDeMes(matrizGastos,3) / matrizGastos.length;
// console.log(promedio);

// c) Por último, es necesario tener el total de gastos realizados en el mes.

function gastosDelMes(matriz) {
    let sumaTotal = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            sumaTotal += matriz[i][j];
        }
        
    }
    return sumaTotal;
}
// console.log(gastosDelMes(matrizGastos));

// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.

let mes = [
    gastoSemana(matrizGastos,0),
    gastoSemana(matrizGastos,1),
    gastoSemana(matrizGastos,2),
    gastoSemana(matrizGastos,3)
];

// console.log(Math.max(...mes));
// console.log(Math.max(...matrizGastos[0],...matrizGastos[1],...matrizGastos[2],...matrizGastos[3]));

// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let likes = [4,7,1,24,5,47,8,5,2,4,88,54,62,43,64];

function ordenarArreglo(arreglo){
    for (let i = 0; i< arreglo.length; i++) {
        for (let j = 0; j < arreglo.length - 1; j++) {
            if(arreglo[j] < arreglo[j+1]){
                let aux = arreglo[j];
                arreglo[j] = arreglo[j+1]
                arreglo [j+1] = aux;
            }
        }
    }
    return arreglo;
}
// console.log(ordenarArreglo(likes));

// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.

let objetoTemperatura = [
    {
        dia : 1,
        mes: 3,
        temperaturaMinima: 5,
        temperaturaMaxima: 24
    },
    {
        dia : 2,
    mes: 3,
    temperaturaMinima: 7,
    temperaturaMaxima: 39
    },
    {
    dia : 3,
    mes: 3,
    temperaturaMinima: 1,
    temperaturaMaxima: 30
    },
    {
    dia : 4,
    mes: 3,
    temperaturaMinima: 2,
    temperaturaMaxima: 37
},
    {
        dia : 5,
        mes: 3,
    temperaturaMinima: 1,
    temperaturaMaxima: 22
},
{
    dia : 6,
    mes: 3,
    temperaturaMinima: 13,
    temperaturaMaxima: 29
},
{dia : 7,
    mes: 3,
    temperaturaMinima: 15,
    temperaturaMaxima: 33
}
];
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

function ordenandoObjeto (objeto,parametro,orden){
    for (let i = 0; i < objeto.length; i++) {
        for (let j = 0; j < objeto.length - 1; j++) {
            if(objeto[j][parametro] > objeto[j+1][parametro] && orden === "asc"){
                let aux = objeto[j];
                objeto[j] = objeto[j+1];
                objeto[j+1] = aux;
            }else if(objeto[j][parametro] < objeto[j+1][parametro] && orden === "desc"){
                let aux = objeto[j];
                objeto[j] = objeto[j+1];
                objeto[j+1] = aux;
            }
        }    
    }
    return objeto;
}
console.log(ordenandoObjeto(objetoTemperatura,"temperaturaMinima", "asc"));
console.log(ordenandoObjeto(objetoTemperatura,"temperaturaMaxima", "desc"));
