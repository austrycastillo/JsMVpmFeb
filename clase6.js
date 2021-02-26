//crear el arreglo de objetos
// var personas = [
//     { 'nombre': 'Daniela', 'apellido': 'Bongiorno', 'edad': 65 },
//     { 'nombre': 'María Alejandra', 'apellido': 'Casado', 'edad': 17 },
//     { 'nombre': 'Manuel', 'apellido': 'Pascuchi', 'edad': 80 },
//     { 'nombre': 'Pablo Andres', 'apellido': 'Double', 'edad': 5 }
// ];


// function escribirTabla() {
//     var contenido = "<tr><th>Nombre</th><th>Apellido</th><th>Edad</th></tr>";
//     for (var i = 0; i < personas.length; i++) {
//         contenido += "<tr><td>" + personas[i].nombre + "</td><td>" + personas[i].apellido + "</td><td>" + personas[i].edad + "</td></tr>";
//     }
//     var tabla = document.getElementById("tabla");
//     tabla.innerHTML = contenido;
// }
// function agregarDatos() {
//     var nom = document.getElementById("nombre").value;
//     var ape = document.getElementById("apellido").value;
//     var ed = document.getElementById("edad").value;
//     console.log(nom);
//     personas.push({ 'nombre': nom, 'apellido': ape, 'edad': ed });
//     escribirTabla();
// }
// let boton = document.querySelector("button");
// boton.onclick = agregarDatos;
// escribirTabla();

//CREAR UN ELEMENTO EN EL DOM
// let div = document.createElement('div');//crear el tag
// div.innerHTML = '<strong>Estoy creando un elemento de html desde js</strong>';//opcional
// document.body.appendChild(div);

// const lista = document.querySelector("#lista");
// let li = document.createElement('li');
// li.innerText = 'pizza';
// lista.appendChild(li);

// li = document.createElement('li');
// li.innerText = 'papas';
// lista.appendChild(li);

// li = document.createElement('li');
// li.innerText = 'asado';
// lista.appendChild(li);

// li = document.createElement('li');
// li.innerText = 'ensalada';
// lista.appendChild(li);

function mostrar() {
    var div = document.querySelector("div");
    var par = document.createElement("p");
    par.innerText = "WebRTC already serves as a cornerstone of online communication and collaboration services.";
    //document.body.appendChild(par);//agregar en el body
    div.style.display="block";
    div.appendChild(par);//agregar en un elemento específico

}