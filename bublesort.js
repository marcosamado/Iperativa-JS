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
console.log(gente);

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
console.log(gastoSemana(matrizGastos,1));

// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
// buscar la semana elegida (indice) , buscar el dia 
function gastoDia(semana,dia){
    return matrizGastos[semana][dia];
};
console.log(gastoDia(0,1));
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
console.log(gastoDiaDeMes(matrizGastos,3));

let promedio = gastoDiaDeMes(matrizGastos,3) / matrizGastos.length;
console.log(promedio);

// c) Por último, es necesario tener el total de gastos realizados en el mes.





