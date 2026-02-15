//primero la consigna: Declara dos variables numéricas
//numero1 y numero2. Pedir al usuario que ingrese dos números
//y demostrar cuál es mayor o si son iguales.

//Colocar const prompt: para que nodejs muestre el mensaje al
// usuario y pueda ingresar los datos por la consola. 
// Luego, se declaran las variables numero1 y numero2, y
// se asignan los valores ingresados por el usuario
// utilizando prompt. Finalmente, se comparan
// los dos números y se muestra el resultado correspondiente.

const prompt = require("prompt-sync")();  

let numero1 = parseFloat(prompt("Ingrese por favor el primer número: "));
let numero2 = parseFloat(prompt("Ingrese por favor el segundo número: "));

if (numero1 > numero2) {
    console.log ("El primer número(" + numero1 + ") es mayor que el segundo número(" + numero2 +")");
        }
else if (numero2 > numero1) {
    console.log("El segundo número(" + numero2 + ") es mayor que el primer número(" + numero1 +")");
} else {
    console.log ("Ambos números son iguales: ");
    }

