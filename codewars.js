
let ciudad = "51NGAP0RE"


function correct(string){
	let newString = "";
    for(let i = 0; i < string.length; i++){
        if(string[i] == 0){
            newString = string.replaceAll(string[i],"O");
        }
        if(string[i] == 5){
            newString = string.replaceAll(string[i], "S");
        }
        if(string[i] == 1){
            newString = string.replaceAll(string[i], "I");
        }
    }
    return newString;
};
// console.log(correct(ciudad));


let rata =  0.4167712762443887;

function cockroachSpeed(s) {
    let resultado = s * 27.76
    return Math.floor(resultado);
};

// console.log(cockroachSpeed(rata))
let numeros = [1,56,2,3,5,7,33]

    function findSmallestInt(args) {
    return Math.min(...args)
    };

    // console.log(findSmallestInt(numeros));

let dias = 6;

function rentalCarCost(d) {
    let x = 0;
    switch (d >= x){
        case d >=7:
        return (d*40)- 50
        break;
        case d >=3 && d < 7:
        return (d*40) - 20
        break;
        default :
        return (d*40)
    }
};

// console.log(rentalCarCost(dias));

let numero = 2394;

// console.log(numero.toString())
// console.log(parseInt(numero))


function descendingOrder(n){
    // let arreglo = n.split
    // let arreglo1 = arreglo.sort((a,b) => a-b);
    // console.log(arreglo1)
    // return arreglo1.join();
    
return parseInt(n.toString().split("").sort().reverse().join(""));
};

// console.log(descendingOrder(numero))


let arreglo = [2,6,5,1,2,3];

function minMax(arr){
    return [Math.max(...arr), Math.min(...arr)]
};
// console.log(minMax(arreglo));


function removeSmallest(numbers) {
    numbers = numbers.slice(0);
    console.log(numbers)
    const min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
};
// console.log(removeSmallest(arreglo));

let arrCompuesto = [2,4,"4",6,"5",6];

function sumMix(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += parseInt(x[i]);
    }
    return sum;
};
console.log(sumMix(arrCompuesto));


function getSum( a,b ){
    let resultado = 0;
    if(a===b){
        return a;
    }else if(b>a){
    for(let i=a; i <= b; i++){
    resultado = resultado + i
    }
    return resultado;
    }else if(a>b){
        for (let j = b; j <= a; j++) {
            resultado = resultado + j
        }
    return resultado
    }
};
// console.log(getSum(0,-1))


const GetSum = (a, b) => {
    let min = Math.min(a, b),
    max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}
// console.log(GetSum(0,-1));

let palabrass = "rigol";

function printerError(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] >= "n"){
            count++
        }
    }
    return count +"/"+ s.length;
};
// console.log(printerError(palabrass));


function getMiddle(s){
    if(s.length % 2 == 0){
        return  s[s.length / 2 -1] + s[s.length / 2];
    }else{
        return (s[Math.floor(s.length / 2)]);
    }
};
// console.log(getMiddle(palabrass))


const binaryArrayToNumber = arr => {
    return parseInt(Number(arr.join('')), 2)
};
console.log(binaryArrayToNumber([1,0,1,0]));


let matriz = [
    [2,3,5],
    [2,3,4],
    [2,3,2]
];

function lala(matrizz){
    for (let i = 0; i < matrizz.length; i++) {
        for (let j = 0; j < matrizz[i].length; j++) {
            if(matrizz[i][j] % 2 !== 0){
                matrizz[i][j] = 0;
            }
        }
    }
    return matrizz;
};
console.log(lala(matriz));

let nombres = 1234;


var myInt = 235345;

let myFunc = num => Number(num);

var intArr = Array.from(String(myInt), myFunc);



var num = 235345

var myArr = String(num).split("").map((num)=>{
    Number(num*num)
});
(Number(myArr.join("")))