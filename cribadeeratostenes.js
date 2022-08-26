


let hasta = 1000;
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
quitarMultiplos(2,numeros);
quitarMultiplos(3,numeros);
quitarMultiplos(5,numeros);
quitarMultiplos(7,numeros);
// quitarMultiplos(11,numeros);
console.log(numeros);

// function cribaEra(longitud){
//     let iter = Math.round(Math.sqrt(longitud));
    
// }
// cribaEra(hasta);