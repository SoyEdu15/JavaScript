let boton = document.querySelector("#btnPrincipal")
let boton2 = document.querySelector("#btnSecundario")
let $botton = document.querySelector("#primero")
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
$botton.onclick = function() {
    $botton.innerHTML = 'Ooops!';
}

$segundo2.onclick = function () {
    let p = document.createElement("p");
    p.innerHTML = `${displayDate()}`;
    document.body.appendChild(p);
}

function displayDate() {
    return new Date().toLocaleTimeString();
}