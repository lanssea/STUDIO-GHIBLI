function mostrarTexto() {
    var texto = document.getElementById("texto");
    if (texto.style.display === "none") {
        texto.style.display = "block";  // Exibe o texto
    } else {
        texto.style.display = "none";  // Esconde o texto
    }
}