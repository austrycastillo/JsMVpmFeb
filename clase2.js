/*
if(condición){
    ..instrucciones..
}else{
    ...instrucciones..
}
*/
//EJEMPLO 1
// var edad = parseInt(window.prompt("Escribe tu edad"));
// if (edad >= 18 && edad <= 30) {
//     alert("Bienvenid@");
//     if(edad == 22){
//         document.write("Tienen una bebida gratis ;)");
//     }
// } else {
//     alert("Ups no puedes pasar");
// }

//EJEMPLO 2
/*var a = 20;
var b = 100;
var c = 500;
if (a > b && a > c) {
    document.write("El mayor es " + a);
} else if (b > a && b > c) {
    document.write("El mayor es " + b);
} else {
    document.write("El mayor es " + c);
}*/

/*
UN OBRERO QUIERE SABER SU SUELDO SEMANAL
HASTA 40 HORAS -> 16u$d (40*16)
EXTRAS -> 20u$d (40*16 + extras*20)
*/
/*var nombre = window.prompt("********Bienvenido, escribe tu nombre");
var horas = parseInt(window.prompt("horas trabajadas en la semana"));
var salario=0,extras,salarioB;
var salarioE = 0;
if (horas <= 40) {
    salarioB = horas * 16;
} else {
    extras = horas - 40;
    salarioB = 40 * 16;
    salarioE = extras * 20;
    salario = salarioB + salarioE;
}
document.write(nombre + " Tu salario base es " + salarioB + " y por horas extras " + salarioE +" total por la semana " + salario);*/

/*
CAJERO AUTOMÁTICO: LOGUEAR CLAVE
    1 CONSULTA 
    2 DEPÓSITO
    3 RETIRO
*/