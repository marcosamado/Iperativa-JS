const prompt = require("prompt-sync")({ sigint: true });

// Declarar tres variables y asignarles un número entero a las tres.
// Crear una función que reciba tres parámetros, que pregunte:
// Si el primero es mayor que el segundo, debe devolver la multiplicación del segundo por el tercero.
// Si el segundo es par, que devuelva un texto que concatene al segundo número con un texto que diga ‘es par’.
// Si la suma de los tres es múltiplo de 3, debe devolver un texto que diga: la suma de estos tres números es múltiplo de 3.
// Invocar a la función pasándole por parámetros las tres variables declaradas en el punto 

let numero = 1
let numero2 = 3
let numero3 = 5

function devolver(a,b,c){
    let suma = 0;
    suma = numero + numero2 + numero3;
    if(a > b){
        return b * c;
    }else if (b % 2 === 0) {
        console.log(b + "es par");
    }else if(suma % 3 === 0){
        console.log("la suma de los 3 numeros es multiplo de 3");    
    }
}
devolver(numero,numero2,numero3);

// Crear un objeto literal que contenga las siguientes propiedades y asignarles un valor: 
// nombre 
// apellido
// edad
// estaEmpleado (bool)
// Declarar un función que:
// Si la edad es mayor a 18 años y está empleado, devolverá una frase que diga: [nombre] [apellido] está empleado y es mayor de edad.
// Si es mayor de edad pero no está empleado, devolverá una frase que diga: [nombre] [apellido] NO está empleado y es mayor de edad.
// Si no es mayor ni está empleado, devolverá una frase que diga: [nombre] [apellido] NO está empleado y NO es mayor de edad.

let persona = {
    nombre : "Marcos",
    apellido : "Amado",
    edad : 32,
    estaEmpleado : true
}
function mayorEdad(objeto){
    if(persona.edad > 18 && persona.estaEmpleado == true){
        console.log(persona.nombre + " " + persona.apellido + " " + "esta empleado" + " y es mayor de edad");
    }else if (persona.edad >18 && persona.estaEmpleado == false){
        console.log(persona.nombre + " " + persona.apellido + " " + "No esta empleado" + " y es mayor de edad");
    }else if(persona.edad <18 && persona.estaEmpleado == false){
        console.log(persona.nombre + " " + persona.apellido + " " + "No esta empleado" + " y no es mayor de edad");
    }
}
mayorEdad(persona);


let autos = [{
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
},
{
    marca: 'Fiat',
    anio: 2019,
    color: 'negro'
}]

// Eliminar el último elemento del arreglo usando un método de arrays.

let sacandoFiat = autos.pop();

console.log(autos);
console.log(sacandoFiat);

// Recorrer el array y si el año del auto es mayor a 2019, agregar cada objeto a un nuevo arreglo llamado autosNuevos.

let autosNuevos = [];
for(let i = 0; i < autos.length; i++){
    if(autos[i].anio > 2019){
        autosNuevos.push(autos[i]) ;
    }
}
console.log(autosNuevos); 





