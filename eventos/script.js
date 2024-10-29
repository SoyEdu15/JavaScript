// Selección de los elementos
const clickButton = document.getElementById("clickButton");
const doubleClickButton = document.getElementById("doubleClickButton");
const hoverBox = document.getElementById("hoverBox");
const textInput = document.getElementById("textInput");
const textInput2 = document.getElementById("textInput2");
const info = document.getElementById("info");
const charCount = document.getElementById("charCount");
const charCount2 = document.getElementById("charCount2");

// Función para actualizar el texto a mayúsculas y el contador de caracteres para textInput
function updateTextInput() {
    textInput.value = textInput.value.toUpperCase();
    charCount.innerText = `Caracteres: ${textInput.value.length}`;
}

// Función para actualizar el texto a minúsculas y el contador de caracteres para textInput2
function updateTextInput2() {
    textInput2.value = textInput2.value.toLowerCase();
    charCount2.innerText = `Caracteres: ${textInput2.value.length}`;
}

// Evento de clic (click)
clickButton.addEventListener("click", () => {
    info.innerText = "Evento 'click': ocurre cuando haces clic en el botón.";
});

// Evento de doble clic (dblclick)
doubleClickButton.addEventListener("dblclick", () => {
    info.innerText = "Evento 'dblclick': ocurre cuando haces doble clic en el botón.";
});

// Evento de mouseover (mouseover)
hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "lightcoral";
    info.innerText = "Evento 'mouseover': ocurre cuando el mouse pasa sobre el cuadro.";
});

// Evento de mouseout (mouseout)
hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "lightblue";
    info.innerText = "Evento 'mouseout': ocurre cuando el mouse sale del cuadro.";
});

// Evento de mousedown (mousedown)
hoverBox.addEventListener("mousedown", () => {
    hoverBox.style.borderColor = "red";
    info.innerText = "Evento 'mousedown': ocurre cuando presionas el botón del mouse sobre el cuadro.";
});

// Evento de mouseup (mouseup)
hoverBox.addEventListener("mouseup", () => {
    hoverBox.style.borderColor = "#333";
    info.innerText = "Evento 'mouseup': ocurre cuando sueltas el botón del mouse sobre el cuadro.";
});

// Evento de keydown (keydown) en el primer campo de texto
textInput.addEventListener("keydown", (event) => {
    info.innerText = `Evento 'keydown': tecla presionada: ${event.key}`;
});

// Evento de keyup (keyup) para el primer campo de texto (mayúsculas)
textInput.addEventListener("keyup", (event) => {
    updateTextInput();
    info.innerText = `Evento 'keyup': tecla liberada: ${event.key}`;
});

// Evento de keyup (keyup) para el segundo campo de texto (minúsculas)
textInput2.addEventListener("keyup", (event) => {
    updateTextInput2();
    info.innerText = `Evento 'keyup': tecla liberada en el segundo campo: ${event.key}`;
});
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {  // Verifica si la tecla presionada es la barra espaciadora
        hoverBox.style.backgroundColor = "purple";
        hoverBox.style.color = "white";
    }
});

// Volver al color original cuando se suelta la barra espaciadora
document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {  // Verifica si la tecla soltada es la barra espaciadora
        hoverBox.style.backgroundColor = "lightblue";
        hoverBox.style.color = "white";
    }
});
document.addEventListener("keydown", (event) => {console.log(`Se presionó la tecla: ${event.key}`);})