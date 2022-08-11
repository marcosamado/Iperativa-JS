const prompt = require("prompt-sync")({ sigint: true });


let cajonesDeRemeras = "pantalones";
let cajonesDePantalones = "remeras";
cajonesDePantalones = "pantalones";
cajonesDeRemeras = "remeras";
console.log(cajonesDeRemeras + " " + cajonesDePantalones);


//Alquilar Cancha de futbol

let horarioApertura = "abre a las 08:00 AM";
let horarioCierre = "cierra a las 09:00 PM";
let telefonoTurnos = "Reservas al 3825-452585";
let cantidadJugadores = prompt("Ingresa la cantidad de jugadores para cotizar el precio:")
let precioPorHora = cantidadJugadores * 150;
console.log (horarioApertura);
console.log (horarioCierre);
console.log (telefonoTurnos);
console.log (precioPorHora);
