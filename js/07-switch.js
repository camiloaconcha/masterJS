'use strict'
//Switch

var age = 18;
var imprime = "";


switch (age) {
    case 18:
        imprime = "Acabas de cumplir la mayoría de edad";
        break;
    case 25:
        imprime = "Ya eres un adulto";
        break;
    case 40:
        imprime = "Ya eres un viejo";
    break;
    default:
        break;
}
console.log(imprime);