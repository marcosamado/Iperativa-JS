const prompt = require("prompt-sync")({ sigint: true });


let suma = (a,b) => (a + b);

// let sumar = suma (parseInt(prompt("para suma ingrese valor A: ")),parseInt(prompt("para suma ingrese valor B: ")));

// let resta = (a,b) => a - b;

// let restar = resta(prompt("para resta ingrese valor A: "),prompt("para resta ingrese valor B: "));

let multiplicar = (a,b) => a * b;

// let multiplicacion = multiplicar(prompt("para multiplicar ingrese valor A: "),prompt(" para multiplicar ingrese valor B: "));

let dividir = (a,b) => a / b;

// let division = dividir(prompt("para dividir ingrese valor A: "),prompt("para divir ingrese valor B: "));

// console.log("-------------- Testeo de Operaciones / Calculadora --------------")

// console.log(sumar);

// console.log(restar);

// console.log(multiplicacion);

// console.log(division);
// let cuadradoDeUnNumero = (numero) => multiplicar(numero,numero);
// console.log("el cuadrado de 2 es "+ cuadradoDeUnNumero(2));

// let promedioDeTresNumeros = (numero,numero2,numero3) => dividir((suma(numero,numero2) + numero3),3);
// console.log("el promedio es  "+ promedioDeTresNumeros(10,8,7.6));

// let calcularPorcentaje = (numero,porcentaje) => dividir(multiplicar(numero,porcentaje),100);
// console.log("el porcentaje es " + calcularPorcentaje(50,10));


// let generadorDePorcentaje = (difporcentaje,numero) => dividir(multiplicar(difporcentaje,100),numero);
// console.log("el porcentaje generado es " + generadorDePorcentaje(45,150));


// SACAR PROMEDIO GENERAL
// function calcularNota(nota1,nota2,nota3) {
//     let resultado = (nota1 + nota2 + nota3)/ 3;
//     if ( resultado > 6) {
//         console.log("APROBAASTE!!!! " + resultado);
//     }else {
//         console.log("Te veo en diciembre amigo " + resultado);
//     };
// }
// calcularNota (parseInt(prompt("ingresa nota parcial :")),parseInt(prompt("ingresa nota integrador :")),parseInt(prompt("ingrese nota concepto :")));


// hacer una funcion que me reciba un numero si es par y menor a 6 que muestre el mensaje "el numero es par y menor a 6" en caso contrario "una de la condiciones no se cumple";

function problemaRosita(num) {
    if(num < 6 && num % 2 == 0){
        console.log("El numero es par y menor a 6");
    }else {
        console.log("una de las condiciones no se cumple");
    }
    
};











