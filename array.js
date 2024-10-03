let autos = new Array("BMW", "Mercedes Benz", "Volvo");
const coches = ["BMW", "Mercedes Benz", "Volvo"];

console.log(coches[1])

for (let contador = 0; contador < coches.length; contador++) {
    console.log(contador + ": " + coches[contador])
}

coches[1]="MercedesBenz";
// Adiciona un elemento a la parte final o ultima posicion del array
coches.push( "Nissan");
coches;
// Va a la ultima posicion del arreglo y añade despues
coches[coches.length] = "Audi";
// Para cambiar la ultima posicion
coches[coches.length -1] = "Audi2";
coches;
coches.pop()
coches;
console.log(Array.isArray(coches));
console.log(coches instanceof Array);

