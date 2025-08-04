function ordenarNumerosArray(array) {
    return [...array].sort((a, b) => a - b);
};

function ordenarNumeros() {
    const numerosDesordenados = document.getElementById('numerosDesordenados');
    const resultado = document.getElementById('resultado');
    const ordenResultado = document.getElementById('ordenResultado');
    
    const input = numerosDesordenados.value.trim();
    
    if (!input) {
        alert('Ingresa números separados por coma (,)');
        return;
    }
    
    // Convertir string a array de números
    const numerosString = input.split(',').map(num => num.trim());
    const numeros = [];
    
    // Validar que todos sean números válidos
    for (let i = 0; i < numerosString.length; i++) {
        const numero = parseFloat(numerosString[i]);
        if (isNaN(numero)) {
            alert(`"${numerosString[i]}" no es un número válido. Por favor, verifica tu entrada.`);
            return;
        }
        numeros.push(numero);
    }
    
    if (numeros.length === 0) {
        alert('Por favor, ingresa al menos un número válido');
        return;
    }
    
    const numerosOrdenados = ordenarNumerosArray(numeros);
    
    ordenResultado.innerHTML = `
        <div class="row">
            <div class="col-12 mb-3">
                <p><strong>Ingresaste estos números:</strong></p>
                <div class="p-2 bg-warning bg-opacity-25 rounded mb-2">
                    <div>[${numeros.join(', ')}]</div>
                </div>
            </div>
            <div class="col-12">
                <p><strong>Al ordenarlos quedan así:</strong></p>
                <div class="p-2 bg-success bg-opacity-25 rounded">
                    <div>[${numerosOrdenados.join(', ')}]</div>
                </div>
            </div>
        </div>
        <div class="mt-3 p-2 bg-info bg-opacity-10 rounded">
            <small>
                📊 <strong>Estadísticas:</strong><br>
                • Total de números: ${numeros.length}<br>
                • Menor: ${Math.min(...numeros)}<br>
                • Mayor: ${Math.max(...numeros)}<br>
                • Ordenamiento: Ascendente (menor a mayor)
            </small>
        </div>
    `;
    
    resultado.classList.remove('d-none');
    numerosDesordenados.value = '';
}

// Permitir envío con Enter
document.getElementById('numerosDesordenados').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        ordenarNumeros();
    }
});