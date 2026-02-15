//Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que
//ingrese dos valores booleanos (true o false) y muestra el resultado de diversas
//combinaciones lógicas.

const prompt = require("prompt-sync")();

//Si el usuario ingresa "true" o "false", se convierte a un valor booleano
// utilizando el método toLowerCase() para asegurarse de que la comparación
// sea insensible a mayúsculas. El resultado se almacena en la variable condicion1.
// Se hace lo mismo para condicion2.

// Luego, se pueden realizar diversas combinaciones lógicas utilizando operadores:

let condicion1 = prompt("Ingrese el primer valor booleano (true o false): ").toLowerCase() === "true";
let condicion2 = prompt("Ingrese el segundo valor booleano (true o false): ").toLowerCase() === "true";

//Mostrat en la terminal el resultado de las combinaciones lógicas
// utilizando operadores AND (&&), OR (||) y NOT (!).

console.log("Resultado de condicion1 AND condicion2: " + (condicion1 && condicion2));
//Ambas deber ser true para que el resultado de AND sea true,
// mientras que para OR basta con que una de las condiciones
// sea true para que el resultado sea true.
console.log("Resultado de condicion1 OR condicion2: " + (condicion1 || condicion2));
//El operador NOT invierte el valor de la condición, por lo que si
// condicion1 es true, !condicion1 será false, y viceversa.
console.log("Resultado de NOT condicion1: " + (!condicion1));
//De manera similar, el operador NOT aplicado a condicion2 invertirá su valor.
console.log("Resultado de NOT condicion2: " + (!condicion2));

