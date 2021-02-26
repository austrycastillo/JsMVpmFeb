//OBJETOS -> OOP -> clave: valor
var cliente = {
    nombre: 'Pedro',
    apellido: 'Castro',
    edad: 20
}
console.log(cliente.nombre);
var alumnos = [
    { nombre: 'Pedro', apellido: 'Castro', edad: 20 },
    { nombre: 'Amanda', apellido: 'Miguel', edad: 40 },
    { nombre: 'Fulano', apellido: 'de Tal', edad: 100 },
    { nombre: 'Carmen', apellido: 'Clua', edad: 5 }
];
console.log(alumnos[2].nombre);

function saludar() {
    alert("Hola funciones!");
}
function saludar2() {
    var saludo = "Hola función 2";
    return saludo;
}
function saludar3(nombre) {
    alert("Hola " + nombre);
}
function sumar(a, b, c) {
    let suma = a + b + c;
    return suma;
}
function saludar4(dato = "Fulano") {
    alert("Hola " + dato);
}
// var sal = saludar2();
// document.write(sal);
// let amiga = 'Marta';
// saludar3(amiga);
// document.write(sumar(10, 20, 30));
// saludar4('Marta');
function solicitarUsuario() {
    let user = window.prompt("Escribe tu usuario");
    return user;
}
function solicitarClave() {
    let pass = parseInt(window.prompt("Escribe tu clave"));
    return pass;
}
function loguear(user, pass) {
    if (user == "admin" && pass == 123) {
        var rta = "Si puedes acceder ;)";
    } else {
        var rta = "No puedes acceder ;(";
    }
    return rta;
}
// let u = solicitarUsuario();
// let c = solicitarClave();
// let mensaje = loguear(u, c);
// document.write(mensaje);
function iniciar() {
    var i = parseInt(window.prompt("escribe el número de inicio"));
    return i;
}
function finalizar() {
    var f = parseInt(window.prompt("escribe el número de fin"));
    return f;
}
function listar(i, f) {
    for (var j = i; j <= f; j++) {
        console.log(j);
    }
}
// var i = iniciar();
// var f = finalizar();
// if (i < f) {
//     listar(i, f);
// } else {
//     document.write("El número inicial debe ser menor");
// }

//EVENTOS: ONCLICK, ONMOUSEOVER, ONFOCUS, ONBLUR, ONCHANGE, ONLOAD

// function encender(){
//     var img = document.getElementById('imagen');
//     img.src='on.gif';
//     console.log(img.src);
// }
// function apagar(){
//     var img = document.getElementById('imagen');
//     img.src='off.gif';
//     console.log(img.src);
// }
// var botonE = document.querySelector("#be");
// botonE.onclick = encender;
// var botonA = document.querySelector("#ba");
// botonA.onclick = apagar;


function cambioaVerde() {
    var verde = document.getElementById("cajita").style.borderColor = "green";
}



function mostrarAzul() {
    var caja = document.getElementById('cajita')
    console.log(caja)
    caja.setAttribute('style', 'background-color: blue;')
}

function cambiarColor(color) {
    let cajita = document.getElementById("cajita");
    cajita.style.backgroundColor = color;
}


