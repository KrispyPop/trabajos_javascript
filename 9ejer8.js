//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo.
//Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga
//sobre los triángulos para determinar la formula)

const prompt = require("prompt-sync")();

//Se solicita al usuario que ingrese las longitudes de los tres lados
//del triángulo utilizando prompt y se almacenan en las variables
//lado1, lado2 y lado3. Se utiliza parseFloat para convertir
//los valores ingresados a números decimales.

let lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del triángulo: "));
let lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del triángulo: "));
let lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado del triángulo: "));

//Luego, se determina el tipo de triángulo utilizando una estructura condicional if-else.

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero, ya que los tres lados son iguales.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es isósceles, ya que tiene dos lados iguales.");
} else {
    console.log("El triángulo es escaleno, ya que los tres lados son diferentes.");
}
