i = 1;
generador62 = 62;
generador124 = 124;

activar = 'impares';
var total_watts = 0;
while (i <= 4) {
    activarGeneradores(i, generador62);
    i++;
}
for ( i = 5 ; i < 20 ; i++){
    activarGeneradores(i, generador124);
}

function activarGeneradores(i, valor){
    switch (activar) {
        case 'pares':
            if (i % 2 == 0) {
                total_watts += valor;
                console.log("Generador #" + i + " está prendido, añadiendo "+ valor +" MW para un total de " + total_watts + " MW");
            }else{
                console.log("Generador #" + i + " está apagado.");
            }
            break;
        case 'impares':
            if (i % 2 != 0) {
                total_watts += valor;
                console.log("Generador #" + i + " está prendido, añadiendo " + valor + " MW para un total de " + total_watts + " MW");
            }else{
                console.log("Generador #" + i + " está apagado.");
            }
            break;
        case 'todos':
            total_watts += valor;
            console.log("Generador #" + i + " está prendido, añadiendo "+ valor +" MW para un total de " + total_watts + " MW");
            break;
        default:
            console.log('Ingrese un valor para activar válido');
    }
}