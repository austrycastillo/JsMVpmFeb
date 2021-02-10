document.write('Hola Js Externo');
//comentarios de una línea
/*
comentarios
de varias línea
VARIABLES: var, let, const
*/
var x;//undefined
var nombre = "Austry"; //string
var edad = 20; //number: int, float, double
var resultado = true; //false, boolean
var arreglo = [];//arreglo
var obj = {}; //objeto
//alert(nombre);
nombre = "Ana";
//document.write("<br>Tu nombre es: " + nombre);
console.log("Hola Js desde la consola");
var texto = window.prompt("Escribe algo");
document.write("<br>Escribiste: " + texto);
/*operaciones aritméticas
+ - * / % modulo
*/
var num1 = 2;
var num2 = 3;
var total = num1 * num2;
total += 100;// total = total + 100; * / - %
console.log(total);
total++; // total = total + 1; --
console.log(total);
//console.log(num1 + num2);
//operadores relacionales < > <= >= == !=
console.log(num1 < num2);
//operadores lógicos &&(and) ||(or)
/*
&&
TRUE && TRUE = TRUE
TRUE && FALSE = FALSE
FALSE && TRUE = FALSE
FALSE && FALSE = FALSE
||
FALSE || FALSE = FALSE
TRUE || FALSE = TRUE
FALSE || TRUE = TRUE
TRUE || TRUE = TRUE

*/