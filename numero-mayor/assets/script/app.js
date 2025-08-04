function encontrarNumeroMayor(array) {
            const arrayOrdenado = [...array].sort((a, b) => a - b);
            return arrayOrdenado.at(-1);
}

function encontrarMayor() {
    const numerosInput = document.getElementById('numerosInput');
    const resultado = document.getElementById('resultado');
    const mayorResultado = document.getElementById('mayorResultado');
    
    const input = numerosInput.value.trim();
    
    if (!input) {
        alert('Por favor, ingresa algunos números');
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
    

    
    const mayor = encontrarNumeroMayor(numeros);
    
    mayorResultado.innerHTML = `
        <p><strong>Ingresaste estos números:</strong> [${numeros.join(', ')}]</p>
        <p><strong>El mayor es:</strong> <span class="text-success fs-4">${mayor}</span></p>
        <p><small>Total de números ingresados: ${numeros.length}</small></p>
    `;
    
    resultado.classList.remove('d-none');
    numerosInput.value = '';
}

// Permitir envío con Enter
document.getElementById('numerosInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        encontrarMayor();
    }
});