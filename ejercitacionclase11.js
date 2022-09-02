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
    },
    deposito : function (titular,dinerodeposito){
        let cuenta = this.consultarCliente(titular);
        cuenta.saldoEnPesos = cuenta.saldoEnPesos + dinerodeposito;
        console.log("Deposito realizado, su nuevo saldo es de " + cuenta.saldoEnPesos);
        return cuenta;;
    },
    extraccion : function (titular,extraer) {
        let cuenta = this.consultarCliente(titular);
        cuenta.saldoEnPesos = cuenta.saldoEnPesos - extraer;
        if (cuenta.saldoEnPesos < 0) {
            console.log("Saldo Insuficiente");
        }else {
            return cuenta;
        }
    }
}
// Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.
// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
console.log(banco.consultarCliente("Ansel Ardley"));

// Crear otro método llamado depósito que recibirá dos parámetros: el titular de
// cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
// correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
// Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
// nuevo saldo es: XXXX”.

console.log(banco.deposito("Jacki Shurmer", 2500));

// Crear un último método llamado extracción que recibirá también dos parámetros:
// el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
// correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
// menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
// De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
// saldo es: XXXX”.

console.log(banco.extraccion("Jacki Shurmer", 21289));

// Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
// ● Nombre
// ● Número de legajo
// ● Lista de notas
// Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
// nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
// todos los métodos y propiedades que puedan hacer falta para que el programa funcione
// correctamente de la manera solicitada.

let alumno = {
    nombre : "Rosita Silva",
    numeroDeLegajo : 33520,
    listaDeNotas : [2,5,8]
}
function promedioGeneral(objeto){
    let suma = 0;
    let promedio = 0;
    for(let i = 0; i < alumno.listaDeNotas.length; i++){
        suma = suma + alumno.listaDeNotas[i];
    }
    promedio = suma / alumno.listaDeNotas.length;
    if(promedio >= 6){
        console.log("Felicidades estas aprobado con " + promedio);
    }else{
        console.log("No alcanzo esta vez, tu nota fue " + promedio);
    }
}
(promedioGeneral(alumno));
