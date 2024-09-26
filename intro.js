var variable = "Nombre";
console.log(variable);

let nombre;
console.log(nombre);
nombre = "Camilo";
console.log(nombre);

let nombrecompleto = "Sebas Venegas";
console.log(nombrecompleto);

let nombreCompleto = "Camilo Roacha";
console.log(nombreCompleto);

let _1654;
console.log(_1654);

let $gsdgsdg;
console.log($gsdgsdg);

let a1654;
console.log(a1654);

let x, y;
console.log(x, y);
x = 5;
y = 3;
console.log(x, y);

// Tipo de dato: String
var _nombre = "Camilo";
console.log(_nombre);

// Tipo de dato: Numérico
var _numero = 25;
console.log(_numero);

// Tipo de dato: Booleano
var bandera = true;
console.log(bandera);

// Tipo de dato: Symbol (Valor único para una variable) - ECMA 6
var simbolo = Symbol("Mi símbolo");
console.log(simbolo);

console.log(Symbol("foo") === Symbol("foo"));

// Tipo de dato: Undefined (default)
var _x;
console.log(x);
var _c = undefined;
console.log(_c);

// Tipo de dato: Objeto - object
var objeto = {
    nombre: "Norbey",
    apellido: "Muñoz",
    telefono: 3153160759
};
console.log(objeto);

// Array
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);

// Nulo
y = null;
console.log(y);

// Funciones:
function myfuncion() { }
console.log(myfuncion);

// Clase Persona
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// Crear un objeto de la clase Persona
const persona1 = new Persona('Juan', 'Pérez');
console.log(persona1.nombre);
console.log(persona1.apellido);

// Operaciones matemáticas
let a = 3;
let b = 2;
let z;

// SUMA
z = a + b;
console.log(z);

// RESTA
z = a - b;
console.log(z);

// MULTIPLICACIÓN
z = a * b;
console.log(z);

// DIVISIÓN
z = a / b;
console.log(z);

// MÓDULO
z = a % b;
console.log(z);

// EXPONENTE
z = a ** b;
console.log(z);

// Variables e incremento
x = 3, y = 4;
let sum = x + y;
console.log(sum);

// Preincremento (++ antes de la variable)
/*El pre incremento incrementa el valor de la variable en una unidad antes de que se realice cualquier otra operacio*/
let i = 0;
console.log (++i);

// Posincremento (++ después de la variable)
/*El pre incremento incrementa el valor de la variable en una unidad despues de que se realice cualquier otra operacio*/
let p=0
console.log (p++)
console.log (p)
sum = ++x;
sum = y++;
console.log(sum);

// Decremento 
// el pre decremento decrementa antes de la variable una unidad y despues realiza la operacion
sum = --x;
console.log(sum);
// El pos decremento lo hace al revez primero sdigna despues opera
sum = y--;
console.log(sum);

// Asignación
a = 1;
console.log(a);

// Asignación compuesta
a += 3; // a = a + 3
console.log(a);
a -= 2; // a = a - 2
console.log(a);
a *= 5; // a = a * 5
console.log(a);
a /= 3; // a = a / 3
console.log(a);
a %= 2; // a = a % 3
console.log(a);
a **= 2; // a = a ** 2
console.log(a);

// Operaciones de comparación
a = 3, b = 2, c = "3", d = 3;
console.log(a);

// Igualdad == , se revisa el valor sin importar el tipo
z = (a == b);
console.log(z);

z = (a == c);
console.log(z);

// Igualdad estricta ===, se revisa el valor importando el tipo
z = (a === c);
console.log(z);

// Distinto a
z = (a != c);
console.log(z);

// Distinto a estricto
z = (a !== c);
console.log(z);

// Operadores relacionales
b = 3;
z = (a < b);
console.log(z);
z = (a <= b);
console.log(z);
z = (a > b);
console.log(z);
z = (a >= b);
console.log(z);

// Operador ternario
let resultado = (1 > 2) ? "verdadero" : "falso";
console.log(resultado);

let resultado2 = (1 > 2) ? "verdadero" : 0;
console.log(resultado2);

let numero = 10;
console.log(numero);
resultado = (numero % 2 == 0) ? "par" : "impar";
console.log(resultado);

// Operadores de conjunción (AND) y disyunción (OR)
a = 11;
let minimo = 0;
let maximo = 10;

if (a >= minimo && a <= maximo) {
    console.log("El número está en el rango");
} else {
    console.log("El número está fuera del rango");
}

// Funciones
function miFuncion(a, b) {
    console.log("Suma: " + (a + b));
}

function suma(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}

// Funciones de tipo expresión
x = function (a, b) {
    return a + b;
};
resultado = x(1, 2);
console.log(resultado);

// Función recursiva
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};
console.log(factorial(3));

// Funciones flecha
const sumarFuncionFlecha = (num1, num2) => num1 + num2;
resultado = sumarFuncionFlecha(3, 5);
console.log(resultado);


resultado = (1 > 2)? "verdadero" : "falso";

resultado2 = (1 > 2)? "verdadero" : 0;
numero = 10 ;

es_par = (numero % 2 === 0) ? "par " : "impar";
resultado2 = (numero % 3 === 0) ? "impar " : "par";





let triangulo 