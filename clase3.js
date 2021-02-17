/*
switch(variable){
    case n1:
        ...instrucciones...
        break;
    case n2:
        ...instrucciones...
        break;
    case n3:
        ...instrucciones...
        break;
    default:
        ...instrucciones..
        break;

}
*/

//var dia = "miércoles";
// switch (dia) {
//     case "lunes":
//         document.write("Hoy es lunes");
//         break;
//     case "martes":
//         document.write("Hoy es martes");
//         break;
//     case "miércoles":
//         document.write("Hoy es miércoles");
//         break;
//     case "jueves":
//         document.write("Hoy es lunes");
//         break;
//     case "viernes":
//         document.write("Hoy es viernes");
//         break;
//     default:
//         document.write("Fin de semana ;)");
//         break;

// }
// var f = new Date();
// var dia = f.getDay();
// console.log(dia);
// switch (dia) {
//     case 1:
//         document.write("Hoy es lunes");
//         break;
//     case 2:
//         document.write("Hoy es martes");
//         break;
//     case 3:
//         document.write("Hoy es miércoles");
//         break;
//     case 4:
//         document.write("Hoy es lunes");
//         break;
//     case 5:
//         document.write("Hoy es viernes");
//         break;
//     default:
//         document.write("Fin de semana ;)");
//         break;

// }

/*Estructuras repetitivas
while(condición){
    ...instrucciones...
    ajuste
}
*/
// var num = 1;
// while (num <= 10) {
//     document.write("hola<br>");
//     num++;//num = num + 1;
// }
//num 11
//imprimir holaholahola
/*
do{
    ..instrucciones..
    ajuste
}while(condición);
*/
// var x = 1;
// do {
//     document.write(x + "<br>");
//     x++;
// } while (x <= 10);

// var posi = "";
// do {
//     var nombre = window.prompt("Escribe un nombre");
//     posi += nombre;
// } while (window.confirm("deseas continuar?"));
// document.write(posi);

/*
for(inicializa;condición;ajuste){
    ..instrucciones..
}
*/
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

/*EJERCICIO 1
mostrar los números del 500 al 700 de 10 en 10, no mostrar el número 560 ni el 620
informar además la suma de estos números
*/
// var n = 500;
// var suma = 0;
// while (n <= 700) {
//     if (n != 560 && n != 620) {
//         console.log(n);
//     }
//     n += 10;
//     suma += n;
// }
// document.write("La suma es " + suma);
/*
solicitar al usuario un número del 1 al 10
mostrar la tabla de multiplicar de ese número
numero x 1 = resultado
numero x 2 = resultado
*/
var num = parseInt(window.prompt("Escribe un número del 1 al 10"));
if (num >= 1 && num <= 10) {
    for (var i = 0; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
} else {
    alert("El número no corresponde, era del 1 al 10");
}