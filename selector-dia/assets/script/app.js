function seleccionDia(dia) {
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    return dias[dia-1];
}

function seleccionarDia() {
    const diaNumero = document.getElementById('diaNumero');
    const resultado = document.getElementById('resultado');
    const diaResultado = document.getElementById('diaResultado');
    
    const numero = parseInt(diaNumero.value);
    
    if (!numero || numero < 1 || numero > 7) {
        alert('Por favor, ingresa un número válido del 1 al 7');
        return;
    }
    
    const diaSeleccionado = seleccionDia(numero);
    
    diaResultado.innerHTML = `
        <p><strong>Ingresaste el número:</strong> <span class="text-primary fs-4">${numero}</span></p>
        <div class="mt-3 p-2 bg-info bg-opacity-25 rounded">
            <small>🗓️ El día ${numero} de la semana es ${diaSeleccionado}</small>
        </div>
    `;
    
    resultado.classList.remove('d-none');
    diaNumero.value = '';
};

// Permitir envío con Enter
document.getElementById('diaNumero').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        seleccionarDia();
    }
});