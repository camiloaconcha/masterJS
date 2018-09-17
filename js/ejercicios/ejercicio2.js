'use strict'
/*Utilizando un bucle ,mostrar la suma y 
la media de los numeros introducido hasta encontrar uno negativo y
mostrar el resultado*/

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt('Introduce números hasta encontrar uno negativo',0));

    if (isNan(numero)) {
        numero = 0;
    } else if(numero >= 0){
        suma += numero;    

        contador++;
    }
    console.log(suma);
    console.log(numero);
} while (numero >= 0);


alert("Suma:"+suma);
alert("Media"+(suma/contador));