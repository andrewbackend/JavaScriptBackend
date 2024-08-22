//FUNCIONES ESTÁNDAR 


    //Ejemplo

// function suma(a,b){
//     return a+b;
// }

/* 
Escribe una función llamada sumArray que tome un array de números 
como argumento y devuelva la suma de todos sus elementos.
*/

function summArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

console.log(summArray([2, 2, 3, 4])); //resultado: 11

/*
Crea una función llamada reverseString que invierta una cadena dada

*/

//cosole.log(reverseString('holamundo')); //resultado: odnumaloh

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('javascript'));


/*
Escribe una función llamada celsiusToFarenheit que convierte una temperatura
de celsius a Fahrenheit. 
*/

function celsiusToFarenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusToFarenheit(30)); 86

/*
Crea una función llamada "countVowels" que reciba una cadena y cuente cuántas vocales contiene
*/


function countVowels (str){
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

console.log(countVowels('Hello World')); //resultado: 3


//FUNCIONES DE FLECHA

/*
Define una función de flecha llamada toUpperCase que reciba una cadena y la convierta 
a mayúsculas.
*/

const toUpperCase = str => str.toUpperCase();
console.log(toUpperCase('javascript')); 


/*
Escribe una función de flecha llamada extracNames que reciba una array de objetos con
las propiedades name y age, y devuelva un array de solo los nombres.
*/








