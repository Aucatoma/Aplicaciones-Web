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
};

console.log(usuario.nombre + " " + usuario.apellido + "\n");
console.log(usuario);