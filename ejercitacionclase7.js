const prompt = require("prompt-sync")({ sigint: true });



// let edad = 11 //(el número es a modo de ejemplo, podés cambiarlo o
// if (edad % 2 != 0){
//     console.log("Sabias que tu edad es impar?")
// }
// if (edad < 0) {
//     console.log("Error, edad inválida. Por favor ingrese un número válido.")
// }else if (edad < 18 ) {
//     console.log("No puede pasar al bar.")
// } else if (edad === 21){
//     console.log("Bienvenido, felicidades por la mayoria de edad.")
// } else {
//     console.log("Puede pasar al bar y tomar alcohol.")
// }


function totalAPagar(vehiculo,litrosConsumidos){
    switch(vehiculo){
        case "coche":
            if(litrosConsumidos <=25){
                let total =(litrosConsumidos * 86) + 50;
                return total;
            } else {let total =(litrosConsumidos * 86) + 25
                return total;
            }
            break;
        case "moto":
            if(litrosConsumidos <=25){
                let total =(litrosConsumidos * 70) + 50;
                return total;
            } else {let total =(litrosConsumidos * 70) + 25
                return total;
            }
            break;
        
    }
}
console.log(totalAPagar("moto",30));

