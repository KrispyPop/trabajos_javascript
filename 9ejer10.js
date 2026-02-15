//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana
//correspondiente. Si el número no está dentro de ese rango, muestra un mensaje
//de error.

const prompt = require('prompt-sync')();

//Se solicita al usuario que ingrese un número del 1 al 7 utilizando prompt y
// se almacena en la variable numeroDia. Se usa parseInt para convertir el valor ingresado
// a un número entero.

let numeroDia = parseInt(prompt("Ingrese un número del 1 al 7 para conocer el día de la semana correspondiente: "));

//Luego, se utiliza una estructura condicional if-else para
// determinar el día de la semana correspondiente al número ingresado.
// Si el número no está dentro del rango de 1 a 7, se muestra un mensaje de error.

if (numeroDia === 1) {
    console.log("El número " + numeroDia + " corresponde al día lunes.");
} else if (numeroDia === 2) {
    console.log("El número " + numeroDia + " corresponde al día martes.");
} else if (numeroDia === 3) {
    console.log("El número " + numeroDia + " corresponde al día miércoles.");
} else if (numeroDia === 4) {
    console.log("El número " + numeroDia + " corresponde al día jueves.");
} else if (numeroDia === 5) {
    console.log("El número " + numeroDia + " corresponde al día viernes.");
} else if (numeroDia === 6) {
    console.log("El número " + numeroDia + " corresponde al día sábado.");
} else if (numeroDia === 7) {
    console.log("El número " + numeroDia + " corresponde al día domingo.");
} else {
    console.log("Error: El número ingresado no está dentro del rango de 1 a 7. Por favor, ingrese un número válido.");
}

