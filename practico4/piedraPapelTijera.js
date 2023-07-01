const readlineSync = require('readline-sync');
const PAPEL = "PAPEL";
const PIEDRA = "PIEDRA";
const TIJERA = "TIJERA";
const opciones = [PIEDRA, PAPEL, TIJERA];
let respuestaPC;
let respuestaUsuario;
let posiblesResutlados = ["Empate!", "Gana el usuario!", "Gana la computadora!"];
let resultado;
let modo = ["Una jugada!", "Dos jugadas!", "Mejor de 3!"];
let scoreUsuario = 0;
let scoreComputadora = 0;
let count;

function obtenerJugadaComputadora(){
    return opciones[Math.floor(Math.random() * 3)];
};
function obtenerJugadaUsuario(){
    return opciones[parseInt(readlineSync.question("Elije 1, 2 o 3 para PIEDRA, PAPEL O TIJERA: ")) - 1];;
};
function obtenerModoDeJuego(){
    return parseInt(readlineSync.question(`Elije modo de juego: 
    1- Una Jugada 
    2- Dos Jugadas 
    3- Mejor de 3
    ===>  `));
};
function determinarGanador(respuestaPC, respuestaUsuario){    
    if(respuestaPC === respuestaUsuario){
        return  posiblesResutlados[0];
    }
    else if(respuestaPC === PAPEL &&  respuestaUsuario === PIEDRA){
        return  posiblesResutlados[2];
    }
    else if(respuestaPC === PIEDRA && respuestaUsuario === PAPEL){
        return  posiblesResutlados[1];
    }
    else if(respuestaPC === TIJERA && respuestaUsuario === PAPEL){
        return  posiblesResutlados[2];
    }
    else if(respuestaPC === PAPEL && respuestaUsuario === TIJERA){
        return  posiblesResutlados[1];
    }
    else if(respuestaPC === PIEDRA && respuestaUsuario === TIJERA){
        return  posiblesResutlados[2];
    }
    else{
        return  posiblesResutlados[1];
    }
}
count = obtenerModoDeJuego();
while(count > 3 || count < 1){
    console.log(`Elige una opcion correcta.`);
    count = obtenerModoDeJuego();
}
console.log(`Modo de juego elegido: 
----------${modo[count - 1]}----------`);
do{
    respuestaPC = obtenerJugadaComputadora();
    respuestaUsuario = obtenerJugadaUsuario();
    resultado = determinarGanador(respuestaPC, respuestaUsuario);

    console.log("--------------------------------");
    console.log(`La computadora eligió: ${respuestaPC}. 
    El usuario eligió: ${respuestaUsuario}.
    El resultado fue: ${resultado}`);
    console.log("--------------------------------");

    if(resultado === posiblesResutlados[1]){
        scoreUsuario++;
    }
    else if(resultado === posiblesResutlados[2]){
        scoreComputadora++;
    }
    if(count === 1){
        console.log(`Computadora: ${scoreComputadora}`); // CONTROL
        console.log(`Usuario: ${scoreUsuario}`); // CONTROL
        
        console.log("--------------------------------");
        if(scoreComputadora > scoreUsuario){
            console.log(`Ha ganado la computadora por: ${scoreComputadora} a ${scoreUsuario}`);
        }
        else if(scoreComputadora < scoreUsuario){
            console.log(`Ha ganado el usuario por: ${scoreUsuario} a ${scoreComputadora}`);
        }
        else{
            console.log(posiblesResutlados[0]);
        }
        console.log("--------------------------------");
        console.log(`Juego terminado!`);
    }
    count--
}while(count > 0);

