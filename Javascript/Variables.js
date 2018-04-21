var nombre = 'Adrian';
var edad = 28;
var peso = 305.1;
var casado = false;
var fechaNacimiento = new Date()
var noExisto = null;
var noEstoyDefinido = undefined;

if (noExisto) {
    console.log("Verdadero")
} else {
    console.log("falso")
}
var x, y, x;
x = -2
y = 0
z = 1
if (x) {
    console.log("x")
} else if (y) {
    console.log("y")
} else if (z) {
    console.log("z")
}
/* Objeto JSON */
var usuario = {
    "nombre": 'Daniel',
    apellido: 'Aucatoma',
    edad    : 21,
    imprimir: function(){
        console.log(this.edad + " " + this.apellido)
    }
};
delete usuario.edad
usuario.edad = 21
usuario.fechaNacimiento = new Date()
usuario.mascotas = {}
usuario.mascotas.nombre = ""
console.log(usuario.nombre + " " + usuario.apellido + "\n");
console.log(usuario);

var arreglo = Array("Hola", "mundo", new Date())
console.log(arreglo)

function sumarNumeros(a, b){
    return a + b
}

function potenciaNumero(num, pot){
    return num ** pot
}

var potencia = function(a, b){ return a ** b }

console.log(sumarNumeros(1, 2.21))
console.log(potenciaNumero(2, 2) +' , '+ potencia(3, 4))
console.log(usuario.imprimir)
function a(a, b){
    b = a(1, 2)
    return b
}

console.log(a(sumarNumeros, x))