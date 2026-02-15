//Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad.
//Muestra un mensaje personalizado según el caso.

const prompt = require('prompt-sync')();
//Se comienza solicitando al usuario que ingrese su edad utilizando prompt y
// se almacena en la variable edadUsuario.
// Se usa parseInt para convertir el valor ingresado a un número entero.

let edadUsuario = parseInt(prompt("Ingrese su edad por favor: "));

//Luego, se verifica si la edad ingresada es mayor o menor de edad utilizando una estructura condicional if-else.
if (edadUsuario >= 18) {
    console.log("¡Eres mayor de edad! Puedes acceder.");
} else {
    console.log("¡Eres menor de edad! Aún no puedes acceder, lo sentimos.");
}   
