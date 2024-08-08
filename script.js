

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
    var textoEntrada = document.getElementById("textoEntrada").value.trim();

    if (!textoEntrada) {
        alert("Por favor, ingrese un texto para desencriptar.");
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
        botonCopiar.style.display = "block"; 
        textoSalida.style.display = "block"; 
        
    } else {
        imagen.style.display = "block";
        parrafoUno.style.display = "block";
        parrafoDos.style.display = "block";
        botonCopiar.style.display = "none"; 
        textoSalida.style.display = "none";
        
    }
}

function copiarTexto() {
    var textoSalida = document.getElementById('textoSalida').value;

    navigator.clipboard.writeText(textoSalida)
    
    .then(() => {
        console.log('Texto copiado al portapapeles');
    })
        .catch(err => console.error('Error al copiar el texto: ', err));
}
