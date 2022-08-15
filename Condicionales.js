const prompt = require("prompt-sync")({ sigint: true });


// IF / else IF / else 

// let clima = prompt("Ingresa el clima: ");
// let dia = prompt("Que dia es hoy ");

// if (clima == "soleado" && dia == "sabado") {
//     console.log("Ta lindo pa salir chone");
// }else if (clima == "nublado" && dia == "domingo"){;
//     console.log("hay que hacer cucharita");
// }else {
//     console.log("hay que trabajar ROSITAAAAA");
// }

// if ternario

let fruta = "naranja";

let resultado = fruta == "manzana"? "niceee": "uhhh le erraste";

console.log(resultado);

//if Switch

let semaforo = "verde";

switch(semaforo){
    case "verde":
        console.log("crucemos");
        break;
    case "amarillo":
        console.log("cuidado");
        break;
    case "rojo":
        console.log("No podes cruzar pibe");
        break;
    default:
        console.log("no funca el semaforo");
}
