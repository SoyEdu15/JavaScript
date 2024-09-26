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