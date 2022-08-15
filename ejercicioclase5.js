const prompt = require("prompt-sync")({ sigint: true });

function pulgadas(){
    let pulg = prompt("Ingrese la medida en pulgadas: ");
    return pulg * 2.54;
}
console.log(pulgadas() + " cm");


function texto(){
    let url = prompt("ingrese el nombre para la pagina web: ");
    return url;
}
let textoUrl = texto();
console.log("su pagina web es http://www." + textoUrl + ".com");


function saludos(){
    let frase = prompt("Ingrese su frase: ");
    return frase;
}
let saludo = saludos();
console.log("!" + saludo + "¡");

function años() {
    let edadHumana = prompt("ingresa la edad humana de tu mascota: ");
    return edadHumana * 7;
}
console.log(años());

function horaTrabajo() {
    let sueldo = prompt("Ingresa tu sueldo: ");
    return sueldo / 40;
}
console.log(horaTrabajo());


let esMultiplo = (a, b) => {
    let resto = a % b;
    return resto == 0;
}
console.log(esMultiplo(10,5));

function calculoPrecio() {
    let precioSteam = prompt("Ingresa precio steam ");
    // let precioStore = prompt("Ingresa precio Store ");
    return precioSteam * 75 / 100 + + precioSteam;
}
console.log(calculoPrecio());

let calculoArrow = (a,b,c) => a * b / c + + a;

console.log(calculoArrow(8285,75,100));

function calculadoraIMC(altura,peso){
    return peso/(altura*altura);
}

console.log(calculadoraIMC(1.91,88));



