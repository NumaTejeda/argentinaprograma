let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";
let tamañoCita = cita.length;
console.log("El tamaño de la cita es: %i", tamañoCita);

let indice = cita.indexOf(substring);
console.log("El indice del substring es: %i", indice);
let citaRevisada = cita.slice(0, 31);
console.log(citaRevisada);