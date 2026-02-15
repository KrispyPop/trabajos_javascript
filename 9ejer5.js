//Escribe un programa que pida al usuario que ingrese tres números y determine
//cuál es el mayor de los tres.

const prompt = require("prompt-sync")();

let numero1 = parseFloat(prompt("Ingrese por favor el primer número: "));
let numero2 = parseFloat(prompt("Ingrese por favor el segundo número: "));
let numero3 = parseFloat(prompt("Ingrese por favor el tercer número: "));

if (numero1 > numero2 && numero1 > numero3) {
    console.log ("El primer número(" + numero1 + ") es el mayor de los tres números.");
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El segundo número(" + numero2 + ") es el mayor de los tres números.");
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log("El tercer número(" + numero3 + ") es el mayor de los tres números.");
} else {
    console.log("Hay números iguales entre los ingresados, por lo que no se puede determinar un único número mayor.");
}
