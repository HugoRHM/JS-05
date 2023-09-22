/**
 * BY: HUGO HERNÁNDEZ
 * Realiza los siguientes ejercicios en JS y entrega
 *  por medio de un link tu repositorio que contiene 
 * los ejercicios resueltos
 */

//EJERCICIO 1

/**
 * ---  USER PROFILE ---
 * Write a program that prompts a user for their data:
 *  username, age, and a list of their favorite movies. 
 * Store the information and then showcase it in the console. 
 * Take note that the output for the films should add a 
 * small message like: 'The film {film} is one of my favorites'.
 * 
 */

/**
 * Se hace uso del prompt() el cual se usa para mostrar 
 * un cuadro de diálogo con un mensaje que solicita al 
 * usuario que ingrese algún texto o información. 
 */


const nombreUsuario = prompt('Por favor, introduce tu nombre:');
const edadUsuario = prompt('Por favor, introduce tu edad:');
const peliculasFavoritas = prompt('Por favor, introduce tus películas favoritas separadas por comas:');

// Se divide la lista 
const listaPeliculas = peliculasFavoritas.split(',');

console.log(`Nombre de usuario: ${nombreUsuario}`);
console.log(`Edad: ${edadUsuario} años`);
console.log('Películas favoritas:');
for (const pelicula of listaPeliculas) {
  console.log(`- La película ${pelicula.trim()} es una de mis favoritas.`);
}


//EJERCICIO 2

/**
 * --- HIGHEST NUMBER ---
 * Write a program that asks for 10 numbers. Using logical
 *  operators and any other javascript functions/structures
 *  you've seen before, determine and output the highest of 
 * those numbers.
 */

/**
 * La función parseFloat() analiza un argumento (si es necesario,
 *  lo convierte en una cadena) y devuelve un número de coma flotante.
 */
let maxNumber = parseFloat(prompt("Ingrese el primer número:"));
for (let i = 2; i <= 10; i++) {
  let userInput = parseFloat(prompt(`Ingrese el número ${i}:`));
  if (userInput > maxNumber) {
    maxNumber = userInput;
  }
}
alert(`El número máximo es: ${maxNumber}`);


//EJERCICIO 3 

/**
 * --- ALARM ---
 * Write a program that asks a user for the amount of seconds
 *  needed until an alarm (message) is executed alongside a text 
 * to show once those seconds have passed in real time.
 * 
 *Result example: "Time for bed after 10 seconds".
 */


const segundos = parseInt(prompt("Ingrese la cantidad de segundos para la alarma:"));
// Se utiliza la dunción isNAn para convertir el parámetro pasado a un número.
if (isNaN(segundos)) {
// Se usa setTimeout para mostrar el mensaje después de la cantidad de segundos especificada.
  setTimeout(function() {
    alert(`Hora de acostarse después de ${segundos} segundos.`);
  }, segundos * 1000); 
} else {
  alert("Por favor, ingrese un número válido de segundos.");
}


 // EJERCICIO 4 

 /**
  * --- PALINDROME ---
  * Write a program that prompts for a word or sentence 
  * (it can be capitalized, have spaces and punctuation). 
  * Figure out if the sentence/word is a palindrome or not.
  *  Ignoring punctuation, spaces and capitalized letters.
  */

/**
 * Un palíndromo, es una palabra o frase que se lee igual 
 * en un sentido que en otro.
 * Ejemplos: Oso, Ala, Reconocer 
 */

const input = prompt("Ingrese una palabra u oración:").toLowerCase();
const quitarSimbol = input.replace(/[\s.,!?']/g, '');

// Se invierte la palabra ingresada
const voltear = quitarSimbol.split('').reverse().join('');
if (quitarSimbol === voltear) {
  alert("¡Es un palíndromo!");
} else {
  alert("No es un palíndromo.");
}

 //EJERCIOCIO 5 

 /**
  * --- FACTORIAL ---
  * Write a program that prompts for an intenger number n.
  *  Where  1 <= n. Solve this using recursion.
  */





 //EJERCICIO 6 

 /**
  * --- FLAT ARRAY ---
  * Write a program that takes the following nested matrix 
  * and flattens it (makes it a 1D array). Use any type of 
  * algorithm you want like callbacks, recursion, etc...
  * let multiDimension = [1, [2, 3, [4, 5, [6]]]];
  */


 function aplanarMatriz(mat) {
    var resultado = [];
  
    function aplanar(elemento) {
      if (Array.isArray(elemento)) {
        for (var i = 0; i < elemento.length; i++) {
          aplanar(elemento[i]);
        }
      } else {
        resultado.push(elemento);
      }
    }
  
    aplanar(mat);
    return resultado;
  }
  
  var multiDimension = [1, [2, 3, [4, 5, [6]]]];
  var matrizAplanada = aplanarMatriz(multiDimension);
  
  console.log(matrizAplanada);
  
















































