const cargador = ["!Pium", "!Pium", "!Pium", "!Pium", "!Pium", "!Pium", "!Pium",];
let c;
let encasquillada = Math.random();
let caliente;
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

chauchat(5);

