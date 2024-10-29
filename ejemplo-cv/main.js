function submitForm(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    const form = document.getElementById('basicinformationForm');
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const gender = formData.get('gender');
    const agree = formData.get('agree');
    const reader = new FileReader();

    reader.readAsDataURL(formData.get('photo'));
    reader.onload = function (event) {
        let photoData = event.target.result;
        var tableContent = `
            <html>
                <head>
                    <title>Detalles del CV</title>
                    <link rel="stylesheet" href="stylecv.css"/>
                <body>
                    <h1>Detalles del CV</h1>
                    <table>
                        <tr><th>Nombre</th><td>${name}</td></tr>
                        <tr><th>Email</th><td>${email}</td></tr>
                        <tr><th>Género</th><td>${gender}</td></tr>
                        <tr><th>Foto</th><td><img src="${photoData}" alt="foto" width="100px"></td></tr>
                        <tr><th>Acepto los términos y condiciones</th><td>${agree ? 'sí' : 'no'}</td></tr>
                    </table>
                </body>
            </html>
        `;

        alert("Formulario enviado con éxito");
        var newWindow = window.open();
        newWindow.document.write(tableContent);
        newWindow.document.close(); // Importante para finalizar el documento
    };
}
