'use strict'
//Condicional if
var age = 22;
/*
//Operadores Relacionales
Mayor >
Menor <
Mayor o igual >=
Menor o igual <=
Igual ==
Igual e igual tipo de datos ===
Distinto de !=
*/
if (age > 18) {
    console.log('Es mayor de edad');
    if(age <= 33){
        console.log('Es millenial');
    }else if(age >= 70){
        console.log('Eres anciano');
    }
}else{
    console.log('Es menor de Edad');
}

/*
//Operadores Lógicos
AND: &&
OR : ||
Negative !
*/
//Negative
var year = 2018;
if (year != 2016) {
    console.log("El año no es el 2016 es:"+year);
}
//AND/
if (year >= 2000 && year <= 2020 !=2018) {
   console.log("Estamos en la era actual");
}else{
   console.log("Estamos en la era post moderna");
}

//OR
if (year == 2018 || (year > 2018) && year == 2018) {
    console.log('El año termina en 8');
} else {
    console.log('Año no registrado');
}    <script src="js/06-condicionales.js"></script>

