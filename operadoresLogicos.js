const prompt = require("prompt-sync")({ sigint: true });


//Operadores LOGICOS  and (&&) , or || , not (!)

let num = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;

//Opeador and todos tienen que ser iguales para ser TRUE
console.log(num == num2 && num3 == num3); 

//operador or al menos uno debe ser igual para ser TRUE

console.log (num == num2 || num3 == num3);

//operador NOT niega la condicion, si era true sera false, y si era false sera true

console.log(!num == num && num3 == num3);

console.log(false||true);

console.log("Gato" || "Perro" );
