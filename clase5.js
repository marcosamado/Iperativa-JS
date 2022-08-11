const prompt = require("prompt-sync")({ sigint: true });


//Definir o crear funcion
function saludar(nombrePersona){
    console.log("hola tanto tiempo " + nombrePersona);
}


// llamado o invocacion de la funcion
saludar("Marcos");
saludar("rosita");
saludar("martin");

let nombre = "Rigo";

saludar(nombre);


//arrow function

let sumaArrow = (num1, num2) => num1+num2;

sumaArrow(12,23);

console.log(sumaArrow);
