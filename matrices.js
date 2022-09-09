const prompt = require("prompt-sync")({ sigint: true });


    let numeros = [
        [10,3,2,1,4,7],
        [5,5,10,100,4],
        [5,125,10,1020,4],
        [5,5,5097,100,4]
    ];

    function suma(matriz){
        let acumulador = 0;
        for(let i = 0; i < matriz.length; i++){
            for(let j = 0; j < matriz[i].length; j++){
                if (matriz[i][j] >= 10 && matriz[i][j] < 1000){
                    acumulador += matriz[i][j]; 
                }
            }
        }
        return acumulador;
    }
    console.log(suma(numeros));