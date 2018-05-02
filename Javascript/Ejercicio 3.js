var numero_meses = 12;
var poblacion_osos = 1;

for (i = 1 ; i <= numero_meses ; i++){
    poblacion_osos *= 4;
    if(poblacion_osos > 10000){
        poblacion_osos /= 2;
        console.log("Removiendo " + poblacion_osos + " osos de anteojos de la población.");
        console.log("Van a existir " + poblacion_osos + " osos de anteojos después del mes " + i +".")
    }else {
        console.log("Van a existir " + poblacion_osos + " de anteojos después del mes " + i + ".")
    }
}