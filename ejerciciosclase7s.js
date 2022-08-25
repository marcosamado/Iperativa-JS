
// Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.
// 5 -   1x1 = 1 ,  1x2 = 2 , 2x3 = 6 , 6x4 = 24 , 24x5 = 120  

// function factorial(numero){
//     let resultado = 1;
//     for(let i= 1; i <=numero; i++){
//         resultado = resultado * i;
//     }
//     return resultado;
// }
// console.log(factorial(0));

// si es un coche y litros consumidos es 100 = debe pagar 186 + 25 

// function totalAPagar(vehiculo,litrosConsumidos){
//     switch (vehiculo) {
//         case "coche":
//                 sePaga = 86 * litrosConsumidos;
//             break;
//         case "moto":
//                 sePaga = 70 * litrosConsumidos;
//             break;
//         case "autobus":
//                 sePaga = 55 * litrosConsumidos;
//             break;
//         }
//         if(litrosConsumidos < 25){
//             sePaga = sePaga + 50;
//         }else {
//             sePaga = sePaga + 25;
//         }
//     return sePaga;
// }
// console.log(totalAPagar("moto",100));


// Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
// eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
// el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
// vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
// que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
// Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
// donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
// recibiremos los datos de la siguiente manera.
// Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
// diferente por cada selección:

// Pollo = $150 (“pollo”)
// Carne = $200 (“carne”)
// Vegetariano (verduras asadas) = $100 (“veggie”)

// Blanco c/orégano y parmesano = $50 (“blanco”)
// Negro c/avena = $60 (“negro”)
// Sin gluten = $75 (“s/gluten”)

// Queso = $20
// Tomate = $15
// Lechuga = $10
// Cebolla = $15
// Mayonesa = $5
// Mostaza = $5
// Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
// para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
// función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
// tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
// Finalmente, deberá retornar el valor numérico del total a pagar del cliente.


function totalSandwich(sandwich,tipoPan,que,tom,lec,ceb,mayo,mos){
    switch (sandwich) {
        case "Pollo":
                precio = 150;
            break;
        case "Carne":
                precio = 200;
            break;
        case "Veggie":
                precio = 100;
            break;
    }
    switch (tipoPan){
        case "Blanco":
                precioPan = 50;
            break;
        case "Negro":
                precioPan = 60;
            break;
        case "s/gluten":
                precioPan = 75;
            break;
    }
    que == true ? precio = precio + 20 : precio
    tom == true ? precio = precio + 15 : precio
    lec == true ? precio = precio + 10 : precio
    ceb == true ? precio = precio + 15 : precio
    mayo == true ? precio = precio + 5 : precio
    mos == true ? precio = precio + 5 :  precio
    return precio + precioPan;
}
console.log(totalSandwich("Pollo","Blanco",true,true,true,true,true,true));

// Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// La velocidad debe ser menor a 1000 km/h.
// La altura debe ser mayor o igual a 2000 m y menor a 3000 m.


function abrirParacaidas(velocidad,altura){
    if(velocidad < 1000 && altura >= 2000 && altura < 3000) {
        console.log("abrir paracaidas");
    }else {
        console.log("no lo abras todavia");
    }
};
abrirParacaidas(800,2500);


// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.

function stringUno(palabra){
switch (palabra){
    case "perro":
        console.log("dog")
        break;
    case "pelota":
        console.log("ball")
        break;
    case "arbol":
        console.log("Tree");
        break;
    case "genio":
        console.log("genius");
        break;
    case "casa":
        console.log("House");
        break;
    default:
        console.log("Palabra ingresada incorrecta");
        break;
    }
    // return palabra;
}
stringUno("lala");

// Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
// según la siguiente escala:
// Muy mala.
// Mala.
// Mediocre.
// Buena.
// Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
// por su valoración.
// Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

function valoracion(critica){
    switch (critica){
        case "muy mala":
            console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.")
            break;
        case "mala":
            console.log("Calificaste la película como Mala. Trataremos de mejrarla.")
            break;
        case "mediocre":
            console.log("Calificaste la película como Mediocre. Mediocre vos gilum");
            break;
        case "buena":
            console.log("Calificaste la película como Buena. Seguiremos mejorando");
            break;
        case "muy buena":
            console.log("Calificaste la película como Muy buena. Nos alegra que te haya gustado");
            break;
        default:
            console.log("Valor Invalido");
            break;
        }
        // return critica;
    }

valoracion("muy mala");














