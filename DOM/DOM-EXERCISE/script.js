// 1. 
let $descripcion = document.getElementById("descripcion");
console.log($descripcion);

// 2. 
let $descripcionQuery = document.querySelector("#descripcion");
console.log($descripcionQuery);

// 3. 
let $liElements = document.querySelectorAll("li");
console.log($liElements);

// 4. 
console.log(`Hay ${$liElements.length} elementos en la lista.`);

// 5. Genere una lista de todos los elementos li y recorra la lista con ayuda de un ciclo.
$liElements.forEach((li, index) => {
    console.log(`Elemento ${index + 1}: ${li.textContent}`);
});

// Crear un nuevo elemento de párrafo
let nuevoParrafo = document.createElement("p");

// Agregar el texto al párrafo
nuevoParrafo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natusmaxime quo adipisci nemo et architecto esse iure in consequunturautem aperiam est ex eos fugiat ad necessitatibus nam qui, assumendaid culpa ipsum at? Ad aperiam officia, quibusdam excepturipraesentium aliquid veritatis provident natus, ipsam voluptatesdignissimos iure fugit unde. Dicta blanditiis illum, voluptatecorporis rem praesentium vel vero repudiandae assumenda quod,distinctio consequatur adipisci placeat nobis est cupiditate abnesciunt amet impedit omnis? Reiciendis optio sequi quas blanditiisad, eveniet aliquam dolores placeat? Numquam soluta quos, eos ipsaiste autem dignissimos a sit maxime doloribus architectoreprehenderit id totam? Saepe quam eveniet excepturi tempora oditoptio repudiandae nemo unde, incidunt ipsum harum, rem aliquamconsequuntur molestiae impedit aperiam repellat illo sit, minimamaxime expedita iusto accusamus! Recusandae est eum, sunt velexpedita sit nisi aperiam ab suscipit quia culpa sed cupiditate iurelaboriosam nostrum atque consequuntur odio voluptatem repellat porrocorrupti veniam reprehenderit! Temporibus debitis fugiat nihilnesciunt hic iure facilis ipsam ducimus! Exercitationem, magnam hicet pariatur dolores sapiente vero recusandae. Soluta, officia quia!Corporis consequuntur totam nostrum doloribus illo excepturi eaqueid officia nemo at error, explicabo quia molestiae saeperepellendus, aspernatur labore debitis ab eum reiciendis.";

// Agregar el nuevo párrafo al final del cuerpo del documento
document.body.appendChild(nuevoParrafo);

// Crear un nuevo elemento de enlace
let nuevoEnlace = document.createElement("a");
nuevoEnlace.href = "#";
nuevoEnlace.innerHTML = "Enlace principal";

// Agregar el nuevo enlace al final del cuerpo del documento
document.body.appendChild(nuevoEnlace);

// Crear un nuevo elemento de título
let titulo = document.createElement("h2");
titulo.innerHTML = "Meses del año";

// Agregar el título al final del cuerpo del documento
document.body.appendChild(titulo);

// Crear un nuevo elemento de lista no ordenada
let lista = document.createElement("ul");

// Crear un arreglo con los meses del año
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Recorrer el arreglo y agregar cada mes a la lista
meses.forEach(function (mes) {
    let li = document.createElement("li");
    li.innerHTML = mes;
    lista.appendChild(li);
});

// Agregar la lista al final del cuerpo del documento
document.body.appendChild(lista);
