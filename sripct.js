function agregarFila() {
    const nombre = document.getElementById('nombreNuevo').value.trim();
    const cargo = document.getElementById('cargoNuevo').value.trim();
    if (nombre && cargo) {
        const tabla = document.getElementById('recomendaciones');
        const fila = tabla.insertRow(-1);
        fila.insertCell(0).innerText = nombre;
        fila.insertCell(1).innerText = cargo;
        const celdaAccion = fila.insertCell(2);
        celdaAccion.innerHTML = '<button onclick="eliminarFila(this)">Eliminar</button>';
        document.getElementById('nombreNuevo').value = '';
        document.getElementById('cargoNuevo').value = '';
    }
}
function eliminarFila(boton) {
    const fila = boton.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}