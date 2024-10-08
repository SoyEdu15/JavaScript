class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre
        this._apellido = apellido
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre
    }
}
const persona1 = new Persona('Camilo', 'Roacha');
console.log(persona1)
persona1.nombre = 'Carlos';

const persona2 = new Persona('Laura', 'Contreras');
console.log(persona2);

persona1.nombre = "Camilo Enrique";
console.log(persona1.nombre)
class Persona2 {
    static contadorPersonas = 0;
    static get MAX_OBJ(){
        return 5
    }
    static saludar(){
        console.log("Saludando desde el metodo saludar")
    }
    static saludar2(persona){
        console.log(persona)
    }
}

Persona2.saludar()
Persona2.saludar2("Pepito")

// ! herencia de classes 
//  Se usa con la palabra reservada extens
