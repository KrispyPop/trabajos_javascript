//Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el
//radio de un círculo y calcula su área y perímetro utilizando la constante PI.

const prompt = require('prompt-sync')();

//Luego, se define la constante PI con el valor de pi (3.14159) utilizando const,
// ya que su valor no cambiará a lo largo del programa.

const PI = 3.14159;

//A continuación, se solicita al usuario que ingrese el
// radio de un círculo utilizando prompt y se almacena en
// la variable radio. Se usa parseFloat para convertir el valor ingresado a un número decimal.

let radio = parseFloat(prompt("Ingrese el radio del círculo por favor: "));

//Luego, se calcula el área y el perímetro del círculo utilizando las fórmulas correspondientes:

let area = PI * Math.pow(radio, 2); // Área = π * r^2

let perimetro = 2 * PI * radio; // Perímetro = 2 * π * r

//Finalmente, se muestra el resultado del área y el perímetro con un
// mensaje utilizando console.log. Se utiliza toFixed(2) para mostrar los resultados con dos decimales.

console.log("El área del círculo es: " + area.toFixed(2) + " unidades cuadradas.");

console.log("El perímetro del círculo es: " + perimetro.toFixed(2) + " unidades.");
