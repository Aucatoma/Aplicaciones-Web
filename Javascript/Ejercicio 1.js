
var array = Array("Hola", "Mundo", 1, 2, "En", "JS", Array(1, 2, 3), {nombre: "Daniel", correo: "daniel@hotmail.com"});

function validarNumeroDeStringsEnArreglo(arreglo){
    var numStrings = 0;
    for( i = 0 ; i < arreglo.length ; i++)
        if(typeof arreglo[i] === 'string')
            numStrings++;
    return numStrings;
}
console.log("El número de strings en el arreglo es " + validarNumeroDeStringsEnArreglo(array));