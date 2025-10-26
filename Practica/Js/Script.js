function mostrarVariables() {
    let rut = document.getElementById("rutInput").value;  // String
    let edad = parseInt(document.getElementById("edadInput").value);  // Numero
    let esAdulto = edad >= 18;  // Verdadero o falso

    document.getElementById("resultado").innerHTML = 
        "RUT: " + rut + " (tipo: " + typeof rut + ")<br>" +
        "Edad: " + edad + " (tipo: " + typeof edad + ")<br>" +
        "Es adulto: " + esAdulto + " (tipo: " + typeof esAdulto + ")";
}