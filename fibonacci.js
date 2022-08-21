const prompt = require("prompt-sync")({ sigint: true });

let fin = Number(prompt("Ingrese cuántos valores de la serie Fibonacci desea visualizar: "))
function fibonacci(fin){
    let num1 = 0;
    let num2 = 1;
    if (fin <= 0 || fin != NaN) {
        console.log("Demasiado chiquito tu numerito, probá mayor a 1 ;)");
    }
    else if (fin === 1) {
        console.log(num1);
    } else {
        console.log(num1);
        console.log (num2);
            for (let i=2 ; i<fin ; i++) {
            let num3 = num1 + num2;
            console.log(num3);
            num1 = num2;
            num2 = num3;
            };
    };
};
fibonacci(fin);