const prompt = require("prompt-sync")({ sigint: true });

let curso = {
    cantidadAlumnos : 32,
    profesores : ["juan", "funcion"],
    funcion : function (nombre) {
        for (let i = 0; i < this.profesores.length; i++){
            this.profesores[i];
            if(this.profesores[i] == nombre){
                return curso
            }else {
                "no encontrado"
            }
        }
    }
}
let clienteEncontrado = curso.funcion("funcion");
console.log(clienteEncontrado);

