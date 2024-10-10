// !1. Crear la clase animal y crear 3 sub clases Animal debe contener: Constructor(nombre,raza,sexo) y método saludar("Hola, Mi método saludar"), las clases hijas llevasn (nombre, raza, sexo, color) y sobrescribir el método saludar 

class Animal {
    constructor(nombre, raza, sexo) {
        this._nombre = nombre;
        this._raza = raza;
        this._sexo = sexo;
    }
    //Getters
    get nombre() {
        return this._nombre;
    }
    get raza() {
        return this._raza;
    }
    get sexo() {
        return this._sexo;
    }
    //Setters
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set raza(raza) {
        this._raza = raza;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    //Metodos
    saludar() {
        return `Hola soy ${this._nombre}`
    }
}

// !clase extendidad de Animal
class Gato extends Animal {
    constructor(nombre, raza, sexo, color) {
        super(nombre, raza, sexo);
        this._color = color;
    }
    // Metodos
    saludar() {
        return ` ${super.saludar()} y mi raza es ${this._raza} tengo un color ${this._color}`
    }
}

// !clase extendidad de Animal
class Perro extends Animal {
    constructor(nombre, raza, sexo, color) {
        super(nombre, raza, sexo);
        this._color = color;
    }
    // Metodos
    saludar() {
        return `${super.saludar()} y mi raza es ${this._raza} tengo un color ${this._color}`
    }
}

// !clase extendidad de Animal
class Conejo extends Animal {
    constructor(nombre, raza, sexo, color) {
        super(nombre, raza, sexo);
        this._color = color;
    }
    saludar() {
        return `${super.saludar()} y mi raza es ${this._raza} tengo un color ${this._color}`
    }
}

//Creando objetos con las clases 
const perro1 = new Perro("peipito", "chiguagua", "femenino", "blanco");
const gato1 = new Gato("sandia", "persa", "femenino", "negro");
const conejo1 = new Conejo("maria", "liebre", "masculino", "amarillo");
//Usando los metodos de los objetos de la clase Animal y las classes extendidad de Animal
console.log(perro1.saludar())
console.log(gato1.saludar())
console.log(conejo1.saludar())


// 2. Crear un objeto literal o Json que contenga un método descripción que es una función anónima que se encarga de imprimir todo el contenido 
const producto = {
    nombre: 'manzana',
    categoria: 'frutas',
    precio: 1.99,
    descripcion: function () {
        let info = '';
        for (let clave in this) {
            if (typeof this[clave] !== 'function') {
                info += `${clave}: ${this[clave]}, `;
            }
        }
        return info.slice(0, -2); //emliminamos la coma del final
    }
};

//Mostrando el objetodo y su metodo descripcion 
console.log(producto.descripcion());
producto
console.log(producto.nombre)