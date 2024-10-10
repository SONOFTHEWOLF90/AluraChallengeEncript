document.addEventListener('DOMContentLoaded', function() {
    // Asignar eventos a los botones
    document.getElementById('botonEncriptar').addEventListener('click', encriptarTexto);
    document.getElementById('botonDesencriptar').addEventListener('click', desencriptarTexto);
    document.getElementById('botonCopiar').addEventListener('click', copiarTexto);

    // Ajustar el tamaño del textarea al contenido
    var textoSalida = document.getElementById('textoSalida');
    textoSalida.addEventListener('input', autoExpand);
});

function encriptarTexto() {
    var textoEntrada = document.getElementById("textoEntrada").value.trim();  
    if (!textoEntrada.match(/^[a-z \n]+$/)) {
        alert("Ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return; 
    }

    var textoEncriptado = textoEntrada.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('textoSalida').value = textoEncriptado;
    actualizarEstado(textoEncriptado);
    autoExpand();
}

function desencriptarTexto() {
    var textoEntrada = document.getElementById("textoSalida").value.trim(); // Obtener texto desde textoSalida

    // Verifica si el texto de entrada no está vacío
    if (textoEntrada === "") {
        alert("No hay texto para desencriptar.");
        return;
    }

    var textoDesencriptado = textoEntrada.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('textoSalida').value = textoDesencriptado;
    actualizarEstado(textoDesencriptado);
    autoExpand();
}

function actualizarEstado(texto) {
    var imagen = document.getElementById("imagen");
    var parrafoUno = document.getElementById("parrafoUno");
    var parrafoDos = document.getElementById("parrafoDos");
    var botonCopiar = document.getElementById("botonCopiar");
    var textoSalida = document.getElementById("textoSalida");
    var salida = document.querySelector('.salida');

    if (texto) {
        imagen.style.display = "none";
        parrafoUno.style.display = "none";
        parrafoDos.style.display = "none";
        botonCopiar.style.display = "block"; // Mostrar el botón Copiar
        textoSalida.style.display = "block"; // Mostrar el textarea
        salida.style.height = textoSalida.scrollHeight + 'px'; // Ajustar la altura del contenedor
    } else {
        imagen.style.display = "block";
        parrafoUno.style.display = "block";
        parrafoDos.style.display = "block";
        botonCopiar.style.display = "none"; // Ocultar el botón Copiar
        textoSalida.style.display = "none"; // Ocultar el textarea
        salida.style.height = 'auto'; // Restablecer la altura del contenedor
    }
}

function copiarTexto() {
    var textoSalida = document.getElementById('textoSalida');
    textoSalida.select(); // Seleccionar el texto en el textarea
    document.execCommand('copy'); // Copiar el texto al portapapeles
}

function autoExpand() {
    var el = document.getElementById('textoSalida');
    el.style.height = 'auto'; // Resetear altura
    el.style.height = el.scrollHeight + 'px'; // Ajustar altura al contenido

    var salida = document.querySelector('.salida');
    salida.style.height = el.scrollHeight + 'px'; // Ajustar la altura del contenedor
}
