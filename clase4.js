/*
var: redeclarable - redefinible - scope global
let: no es redeclable - redefinible - scope local  
const: no es redeclable - no redefinible - scope local
*/
// var x = 2;
// console.log(x);
//                 if(true){
//                     console.log(x);
//                     var x = 4;
//                     console.log(x);
//                 }
// console.log(x);
// var x = 6;
// console.log(x);

// let x = 2;
// console.log(x);
//                 if(true){
//                     let x = 4;
//                     console.log(x);
//                 }
// console.log(x);
// x = 6;
// console.log(x);

// const x = 2;
// console.log(x);
//             if (true) {
//                 const x = 4;
//                 console.log(x);
//             }
// console.log(x);    
// //x = 6; ERROR
// console.log(x); 

//MANEJO DEL DOM
let parrafo = document.querySelector("p");
//let parrafo = document.querySelector("#texto");
//let parrafo = document.getElementById("texto");
//let parrafo = document.querySelector(".parrafo");
//let parrafo = document.getElementsByClassName("parrafo")[0];
//alert(parrafo.innerHTML);
//console.log(parrafo);
//document.write(parrafo.innerHTML);
// parrafo.innerHTML = "Soy nuevo";
// parrafo.style.color = "red";
// parrafo.style.backgroundColor = "lightpink";
// parrafo.style.border = "1px solid blue";
// parrafo.style.padding = "10px";

// var edad = [20, 5, 4, 10, 8, 6, 2, 12, 21, 1];
// var datos = ["Juan", 10, 80.2, true];
// var nombre = new Array('Calor', 'Ricardo', 'Luisa', 'Carmen');
// console.log(edad[2]);
// edad[2] = 40;
// console.log(edad[2]);
// console.log(nombre[1]);
// console.log(edad.length);
// var tam = edad.length;

// for (var i = 0; i < tam; i++) {
//     document.write(edad[i] + "<br>");
// }

//EJEMPLO ATLETAS CON ARREGLO
// var atletas = ["Luciano", "María", "Daniela", "Pablo", "Ailen", "Manuel", "Andrés"];
// var tiempo = [10, 8, 9, 12, 6, 4, 7];
// var menor = tiempo[0];
// var punt = 0;
// for (var i = 0; i < atletas.length; i++) {
//     if (tiempo[i] < menor) {
//         menor = tiempo[i];
//         punt = i;
//     }
// }
// document.write("El ganador es: " + atletas[punt] + " con un tiempo de: " + menor + " minutos");
var num = [20, 5, 4, 10, 8];
var alumnos = ["Luciano", "María", "Daniela"];
//alumnos.push("Andrés");//agregar al final
//alumnos.unshift("Andrés");//agregar al principio
//alumnos.shift();//elimina al principio
//alumnos.pop();//elimina al final
// console.log(alumnos.sort());//ordena 
// const meses = ['enero', 'marzo', 'junio', 'abril'];
// //meses.splice(1, 0, 'feb');
// meses.splice(3, 1, 'nuevo');
// console.log(meses);

/*CREAR TRES ARREGLOS, UNO VACÍO
DOS CON ACTIVIDADES EN COMÚN PARA LAS PERSONAS
MOSTRAR CUALES SON ESAS ACTIVIDADES
*/
var persona1 = ['cantar', 'bailar', 'comer', 'jugar', 'hablar'];
var persona2 = ['caminar', 'correr', 'bailar', 'leer', 'hablar'];
var actividad = [];
for (var i = 0; i < persona1.length; i++) {
    for (var j = 0; j < persona2.length; j++) {
        if (persona1[i] == persona2[j]) {
            actividad.push(persona2[j]);
        }
    }
}
console.log(actividad);

/*
CREAR UN JUEGO : piedra (<=3), papel(>3 y <=6) o tijera
*/