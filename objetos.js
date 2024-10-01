let persona ={
    nombre: "Camilo",
    apellido:"rocha",
    telefono:32656514,
    email:"cerorocha@distrital.edu.co",
    edad:25

}
let persona3 = new  Object ();
persona3.nombre = "jorge";
persona3.apellido ="rocha";


let persona2 ={
    nombre: "Camilo",
    apellido:"rocha",
    telefono:32656514,
    email:"cerorocha@distrital.edu.co",
    edad:25,
    nombreCompleto: function  (){
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona2.nombreCompleto())
for (nombrePropiedad in persona){
    console.log(nombrePropiedad)
    console.log(persona[nombrePropiedad])
}
persona.telefono = 231312312312
console.log(persona)
delete persona.telefono
console.log(persona)
let personaArray = Object.values(persona)
console.log(personaArray)


let personaString = JSON.stringify(persona)
console.log(personaString)
function Persona (nombre = 'Juan', apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido
    this.email = email;
    this.nombrecompleto = function () {
        return this.nombre + ' '+ this.apellido
    }
}
let padre = new Persona ("Camilo", "Rocha", "camiloerec@gmail.com");
let personax = new Persona ()
console.log(personax)
console.log(padre);
let madre = new Persona("Laura", "Contreras", "firmuoco@nili.kn");
Persona.prototype.tel = 4432211;
console.log(madre.tel)
padre.tel = 12345
console.log(madre)
console.log(padre)
