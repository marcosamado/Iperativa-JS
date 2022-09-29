
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
console.log(correct(ciudad));


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

    console.log(findSmallestInt(numeros))