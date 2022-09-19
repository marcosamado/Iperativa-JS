// PRACTICAMOS FOR, ARREGLOS, OBJETOS y CONDICIONALES

// 1) DADO EL SIGUIENTE ARREGLO....

let numeros = [5, 9, 12, 25, 6, 7, 18, 1, 24, 4]
let numeros2 = [4, 9, 12, 25, 6, 7, 18, 1, 24, 4]


// DETERMINAR LA SUMA TOTAL DE ELLOS , SOLAMENTE SUMANDO LOS NUMEROS IMPARES 
// Y GUARDARDO EN UNA VARIABLE QUE SE LLAME RESULTADO. PISTA : 
// ( RECORDA QUE PODEMOS GUARDAR LA  EJECUCION DE UNA FUNCION
// Y LO QUE RETORNE SERA ASIGNADO A LA VARIABLE)

function sumaImpar(arreglo){
    let sumador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 !== 0){
            sumador = sumador + arreglo[i];
        }
    }
    return sumador;
}
// let resultados = sumaImpar(numeros);
// console.log(resultados);


// 2) DADO EL SIGUEINTE ARREGLO...

const arrayNumeros = [7, 16, 32, 27, 45, 27, 51, 12, 19, 21]

// CREAR UNO NUEVO EL CUAL CONTENDRA LOS NUMERO DE ESTE ARREGLO 
// PERO SOLO LOS NUMERO QUE SEAN MAYORES QUE 15 Y MENORES o IGUALES QUE 30

function pusheandoArreglo(arreglo){
    let arregloNuevo = [];
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] > 15 && arreglo[i] <= 30){
            arregloNuevo.push(arreglo[i]);
        }
    }
    return arregloNuevo;
};
// console.log(pusheandoArreglo(arrayNumeros));


// 3) DADO EL SIGUIENTE ARREGLO...

let profesionales = [
    {
        nombre: "juancito",
        profesion: "programador"
    },
    {
        nombre: "maria",
        profesion: "comerciante"
    },
    {
        nombre: "pepito",
        profesion: "docente",
        // metodo: function (){
        //     return "Mi nombres es " + profesionales.nombre + " y soy " + profesionales.profesion
        // }
    }
];
// crear una funcion para que le agregue un metodo a cada objeto
// lo que debe hacer el metodo es retornar un string con el nombre y su profesion
// por ejemplo , " mi nombre es juancito y soy programador"
function agregandoMetodo (arreglo){
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i].metodo = function presentacion(){
            return "Mi nombres es " + this.nombre + " y soy " + this.profesion
        }
        arreglo[i].edad = 41 + i;
    }
    return arreglo;
}
agregandoMetodo(profesionales);
console.log(profesionales);
console.log(profesionales[0].metodo());
console.log(profesionales[1].metodo());
console.log(profesionales[2].metodo());


// LUEGO NOS DIMOS CUENTA QUE NO LE AGREGAMOS LA EDAD A NINGUNA PERSONA
// DEMOS CREAR OTRA FUNCION QUE LE AGREGUE ESA PROPIEDAD A TODOS LOS OBJETOS
// DATO DE COLOR ( LA EDAD DE LAS PERSONAS ES UN AÑO MAS CADA UNA Y LA MAS JOVEN TIENE 41)

function agregandoEdad (arreglo){
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i].edad = 41 + i;
        }
    return arreglo;
};
agregandoEdad(profesionales);
console.log(profesionales);
