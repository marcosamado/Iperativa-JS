const prompt = require("prompt-sync")({ sigint: true });


let hasta = Number(prompt("ingresa el numero limite para devolverte los primos: "));
let numeros = [];
for(let i = 0; i < hasta; i++){
    numeros[i] = i+1;
}
function quitarMultiplos(n,num) {
    for(let i = 0; i <= num.length; i++){
        if(num[i] % n == 0 && num[i]>n){
            num.splice(i,1);
        }
    }
    
}

function cribaEra(longitud,num){
    let iter = Math.ceil(Math.sqrt(longitud));
    for(let i = 2; i < iter; i++){
        quitarMultiplos(i,num);
    }
    num.shift();
}
console.time("t1");
cribaEra(hasta,numeros);
console.timeEnd("t1");

console.log(numeros);
