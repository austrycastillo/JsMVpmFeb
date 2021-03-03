/*
jquery sintaxis
$("selector").acción()
Algunas métodos: text, html, val, show, hide, click, mouseover, slideToggle, animate, remove
Ej con Js puro
document.getEmelentById("selector");
Ej con jquery
$("selector");
*/
var titulo = $("h1").text();
// var titulo = $("#titulo").text();
// var titulo = $(".titu").text();
//alert(titulo);
$("h1").text('Hola Jquery');

//EJEMPLO 2 DESDE EL HTML
// $("#aparece").click(aparece);
// $("#desaparece").click(desaparece); 
// function aparece(){
//     //$('div').show();
//     $('div').fadeIn("slow");
// }
// function desaparece(){
//     //$('div').hide();
//     $('div').fadeOut("slow");
// }

//EJEMPLO 3
// $(document).ready(function(){
//     $("#enlace").click(function(){
//         $("#panel").slideToggle("slow");
//     });
// });
//también así: obviando el ready
// $(function(){
//     $("#enlace").click(function(){
//         $("#panel").slideToggle("slow");
//     });
// });

//EJEMPLO 4
// $(function(){
//     $("button").click(function(){
//         $("div").animate({left:'300px',opacity:0.25});
//     });
// });

//EJEMPLO 5
// for (var i = 0; i < 9; i++) {
//     $("<div>").appendTo(document.body);
// }
// $("<strong>HOLAAAA</strong>").appendTo("p");
// $("strong").css("background-color","yellow");
// $("div").click(function(){
//     $(this).hide(2000,function(){
//         $(this).remove();
//     })
// })


//FUNCIONES LAMBDA O FLECHA

var fun = () => {
    console.log("soy una función flecha");
}
fun();
var fun2 = (nombre) => {
    return "hola " + nombre;
}
console.log(fun2("Sofia"));

var fun3 = edad => "Mi edad es " + edad;
console.log(fun3(19));
