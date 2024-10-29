let boton = document.querySelector("#btnPrincipal")
let boton2 = document.querySelector("#btnSecundario")
let $change = document.querySelector("#primero")
let $segundo2 = document.querySelector ("#segundo")

// boton.addEventListener("click", respuestaClick)
// function respuestaClick() {
//     alert("Respuesta al evento")
// }
boton.onclick = ()=>{
    alert("Respuesta al click ")
}
boton2.onclick = ()=>{
    alert("Respuesta al click 3")
}
$change.onclick = () =>{
    $change.innerHTML = 'Ooops!';
}

$segundo2.onclick = function () {
    let p = document.createElement("p");
    p.innerHTML = `${displayDate()}`;
    document.body.appendChild(p);
}

function displayDate() {
    return new Date().toLocaleTimeString();
}