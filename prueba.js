// 39 >>>>  3x9 >> 27 >> 2x7 >> 14 >> 1x4 >>>> 4 

let numero = 35112;

function separando(num){
    let cifras = []
    while (num > 1){
        cifras.push(parseInt(num % 10));
        num = num/10;
    }
    return cifras;
};

console.log(separando(numero));

let palabra = ['hello', 'world', 'this', 'is', 'great']

function smash (words) {
    return words.join(" ");
};
console.log(smash(palabra))