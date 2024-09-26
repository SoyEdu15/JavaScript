// Le podemos dar valores por defecto para evitar errores
function miFuncion(a=0,b=0) {
    if (a,b==0){
        console.log("Revisa los parametros")
    }
    else{
        console.log("Suma: "+ (a+b));
    }
}

function suma(num1, num2) {
    let resultado = num1 +num2;
    return "El resultado de la suma es: " +resultado;
}
miFuncion(1,3)
miFuncion()
console.log(suma(2,3));
// funciones tipo expresion es aquella que se asigna como valor a una variable,puede
// anonima o no anomina
let x= function (a,b){return a + b};
let resultado = x(1,2);

console.log("El resultado es: "+resultado);
const factorial = function fac(n){

    return n < 2 ? 1 :n * fac (n - 1);
};
console.log(factorial(3));

// funciones declaradas

// funciones expresadas

//funciones fecha

const sumarFuncionFecha = (num1,num2) => num1 + num2 ;
resultado = sumarFuncionFecha(3,5);

console.log("el resultado es: "+resultado);


