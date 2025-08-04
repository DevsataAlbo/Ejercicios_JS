 function arregloDeNumeros(cantidadElementos) {
    const arreglo = [];
    let numero = 1;
    
    for(let i = 1; i <= cantidadElementos; i++){
        arreglo.push(numero);
        numero *= 2;
    } 
    
    return arreglo;
}

function generarArreglo() {
    const numeroInput = document.getElementById('numeroInput');
    const resultado = document.getElementById('resultado');
    const arregloResultado = document.getElementById('arregloResultado');
    
    const cantidadElementos = parseInt(numeroInput.value);
    
    if (!cantidadElementos || cantidadElementos <= 0) {
        alert('Por favor, ingresa un número válido mayor a 0');
        return;
    }
    
    const arreglo = arregloDeNumeros(cantidadElementos);
    
    arregloResultado.innerHTML = `
        <p><strong>Pides un arreglo de </strong>${cantidadElementos} elementos.</p>
        <p><strong>Arreglo generado:</strong> [${arreglo.join(', ')}]</p>
        <p><small>Cada elemento es el doble del anterior, comenzando por 1</small></p>
    `;
    
    resultado.classList.remove('d-none');
    numeroInput.value = '';
}

// Permitir envío con Enter
document.getElementById('numeroInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generarArreglo();
    }
});