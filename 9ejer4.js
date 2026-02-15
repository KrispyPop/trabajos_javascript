//Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si
//el nombre ingresado es igual a tu nombre.

const prompt = require('prompt-sync')();

const ingreseNombre = 'Carlitos'
let nombreUsuario = prompt ('Ingrese su nombre:');

if (nombreUsuario === ingreseNombre) {
   console.log('Hola Carlitos');
} else {
   console.log('You are not the Leader. Your name is ' + nombreUsuario);
}