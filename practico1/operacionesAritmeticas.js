let var1 = 0;
let var2 = 4;
let var3 = 4;
let var4 = 15;

let suma = var1 + var2;
let resta = var4 - var3;

let resultadoFinal = suma * resta;

let esPar = resultadoFinal % 2 === 0;

console.log("Mis variables iniciales fueron: %i, %i, %i y %i.\
La respuesta a verificar si el resultado final es par es:", var1, var2, var3, var4, esPar + ".");