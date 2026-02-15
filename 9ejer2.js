//Define dos constantes, RANGO MINIMO y RANGO MAXIMO, con valores
//numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está
//dentro del rango definido por las constantes.


//Primero se define lo relacionado a prompt para que el usuario pueda ingresar un número por la consola.
// Luego, se definen las constantes RANGO_MINIMO y RANGO_MAXIMO con los valores numéricos deseados.

const prompt = require("prompt-sync")();

//Se pone const en vez de let porque el valor de las constantes
// no va a cambiar a lo largo del programa.

const RANGO_MINIMO = 200;
const RANGO_MAXIMO = 500;

//Luego, se solicita al usuario que ingrese
// un número utilizando prompt y se almacena
// en la variable numeroIngresado. Se usa let porque
// el valor de numeroIngresado puede cambiar
// dependiendo de lo que ingrese el usuario.

let numeroIngresado = parseFloat(prompt("Ingrese un número para verificar si está dentro del rango definido: "));
if (numeroIngresado >= RANGO_MINIMO && numeroIngresado <= RANGO_MAXIMO) {
console.log("El número " + numeroIngresado + " está dentro del rango definido entre " + RANGO_MINIMO + " y " + RANGO_MAXIMO + ".");
} else{
    console.log("El número " + numeroIngresado + " está fuera del rango definido entre " + RANGO_MINIMO + " y " + RANGO_MAXIMO + ".");
}

