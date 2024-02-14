const cargador = ["!Pium", "!Pium", "!Pium", "!Pium", "!Pium", "!Pium", "!Pium",];
let c; //numero de disparos
let encasquillada = Math.random(); // 80% se atasca
let caliente=0; //Cada 3 disparos se para y evitar calentamiento

function chauchat(c) {
    console.log(encasquillada);
    while (encasquillada > 0.8) {
        for (let i = 0; i < c; i++) {
            console.log(cargador[i] + "\n");
        }
        console.log("Te quedan " + (cargador.length - c) + " balas");
        return cargador;
    }
    console.log("Illo, me he quedao pillá!");
}

chauchat(6);