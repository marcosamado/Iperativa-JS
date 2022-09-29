
let ciudad = "51NGAPORE"


function correct(string){
	let newString = "";
    for(let i = 0; i < string.length; i++){
        if(string[i] == 0){
            newString = string.replaceAll(string[i],"O");
        }
        else if(string[i] == 5){
            newString = string.replaceAll(string[i], "S");
        }
        else if(string[i] == 1){
            newString = string.replaceAll(string[i], "I");
        }
    }
    return newString;
};
console.log(correct(ciudad));

