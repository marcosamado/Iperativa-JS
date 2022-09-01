const prompt = require("prompt-sync")({ sigint: true });

// Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
// de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
// forma de representar a los usuarios (cuentas bancarias). Cada una de estas cuentas
// tiene la siguiente información:
// ● N.o de cuenta (solo números).
// ● Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en
// pesos).
// ● Saldo en pesos (solo la cantidad).
// ● Titular de la cuenta (nombre completo).
//la lista de clientes.
let arrayCuentas = [
    {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
    },
    {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
    },
    {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
    },
    {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
    },
    {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    titularCuenta: "Jacki Shurmer",
    saldoEnPesos: 18789,
    },
];
// Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
// propiedad llamada “clientes” que estará compuesta de la lista de objetos
// obtenidos en el punto anterior.

let banco = {
    clientes : [
        {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
        },
        {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
        },
        {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
        },
        {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
        },
        {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
        }
    ],
    consultarCliente : function (nombre){
        let clienteEncontrado;
        for (let i = 0; i <this.clientes.length; i++){
            if(this.clientes[i].titularCuenta == nombre) {
                clienteEncontrado = this.clientes[i];
                return clienteEncontrado;
        }
    }
    return "error";
}
}
// Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.
// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);

console.log(banco.consultarCliente("Ansel Ardley"));