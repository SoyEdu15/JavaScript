numero = 8 ;
es_par = (numero % 2 === 0) ? "Es par " : "Es impar";
es_par




// Ejemplo de uso
let lado1 = 4;
let lado2 = 3;
let lado3 = 5;
let untrianguloes;
if (lado1 === lado2 && lado2 === lado3) {
    untrianguloes = 'Equilátero';
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    untrianguloes = 'Isósceles';
} else {
    untrianguloes = 'Escaleno';
}

console.log(untrianguloes);



let numero_1 = 2; 
let esPrimo = true;

if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i < numero_1; i++) {
        if (numero_1 % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log(numero_1 + ' es un número primo');
} else {
    console.log(numero_1 + ' no es un número primo');
}
