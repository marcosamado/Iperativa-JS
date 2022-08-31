const prompt = require("prompt-sync")({ sigint: true });

let curso = {
    cantidadAlumnos : 32,
    profesores : ["juan", "funcion"],
    funcion : function () {
        return "soy una " + this.profesores[1] + " dentro de un objeto";
    }
}
console.log(curso.funcion());

