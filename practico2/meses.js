// Escriba un programa que solicite al usuario ingresar un número entero del 1 al
    // 12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
    // marzo, etc. Deberá guardar esta información en alguna de las estructuras ya
    // vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en
    // el texto a imprimir. Su programa deberá ser guardado en un archivo meses.js y
    // consistirá de imprimir por consola la cantidad de días que tiene el mes
    // ingresado bajo el siguiente formato:
    // "La cantidad de dias del mes de [mes] es [cantidadDeDias]"
    // Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad
    // de dias del mes de enero es 31”.
    // NOTAS:
    // ● Nota que el valor de [mes] no es el numero ingresado si no su
    // correspondiente almacenado en la estructura de datos elegida.
    // ● Para el alcance de este ejercicio, podemos pensar que febrero siempre
    // tiene 28 días.

const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingrese un numero entero del 1 al 12: ');

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let mes = meses[numero - 1];
let dias = 0;

switch(mes){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        dias = 31;
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        dias = 30;
        break;
    case "Febrero":
        dias = 28;
        break;
}
console.log(`La cantidad de dias del mes de ${mes} es ${dias}`);



// "La cantidad de dias del mes de [mes] es [cantidadDeDias]"
// De 31:  Enero Marzo Mayo Julio Agosto Octubre Diciembre
// De 30: Abril Junio Septiembre Noviembre
// De 28: Febrero 




;