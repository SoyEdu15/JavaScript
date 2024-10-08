class Persona {
    static contadorPersonas = 0;
    email = "default email";
    static get MAX_OBJ() {
        return 5;
    }
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ) {
            this._idPersona = ++ Persona.contadorPersonas;
        } else {
            console.log(`Se ha alcanzado el máximo de personas permitidas: ${Persona.MAX_OBJ}`);
        }
    }

    // Getters
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    // Setters
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    nombreCompleto() {
        return `ID ${this._idPersona}: ${this._nombre} ${this._apellido}`;
    }
    toString() {
        return this.nombreCompleto();
    }
}

const persona1 = new Persona("Clifford", "Diaz");
const persona2 = new Persona("Clifford", "Diaz");
console.log(persona1.toString());

class Empleado extends Persona {
    constructor(nombre, apellido, cargo) {
        super(nombre, apellido)
        this._cargo = cargo
    }
    get cargo(){
        return this._cargo;
    }
    set cargo(cargo){
        this._cargo = cargo;
    }
    nombreCompleto(){
        return `${super.nombreCompleto()} Su cargo es: ${this.cargo}`
    }

}
const empleado1 = new Empleado("Pepito", "Ramirez", "IT");
const empleado2 = new Empleado("Sara", "Ramirez", "Enfermera");
const empleado3 = new Empleado("Darcy", "Sosa", "Dev and IT");
const empleado4 = new Empleado("Valentina", "Del rio", "IT eng");
const empleado5 = new Empleado("Eduard", "Murillo", "Dev and IT");
const empleado6 = new Empleado("Samuel", "Murillo", "Dev and IT");

console.log(empleado1.toString())
console.log(empleado2.toString())
console.log(empleado3.toString())
console.log(empleado4.toString())
console.log(empleado5.toString())