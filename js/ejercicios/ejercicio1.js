'use strict'

/*Programa que pide dos numeros y dice cual es mayor , 
cual es menor o si son iguales*/
 
var numero1 = parseInt(prompt("Introduce el primer numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero",0));

console.log (numero1,numero2);
while (numero1<=0 || numero2<=0 || isNaN(numero2) || isNaN(numero1) ) {
     numero1 = parseInt(prompt("Introduce el primer numero",0));
     numero2 = parseInt(prompt("Introduce el segundo numero",0));
}
if (numero1 === numero2) {
    console.log("Los Números son iguales:");
} else if(numero1>numero2){
    console.log("El número 1 es mayor que el numero 2");
}else if(numero2>numero1){
    console.log("El segundo número es el mayor");
}else{
    console.log("Introduce números");
}
