const numeros = [
    843, 127, 359, 672, 491, 285, 764, 908, 134, 526,
    42, 815, 693, 347, 579, 921, 238, 654, 102, 765,
    89, 376, 512, 943, 201, 633, 728, 157, 294, 845,
    56, 389, 812, 467, 998, 324, 710, 153, 876, 231,
    67, 532, 789, 416, 953, 278, 645, 182, 507, 819,
    34, 698, 421, 567, 893, 312, 745, 168, 439, 924,
    73, 256, 831, 384, 617, 952, 209, 548, 971, 125,
    18, 683, 497, 362, 729, 514, 847, 273, 606, 935,
    95, 478, 613, 852, 317, 764, 189, 541, 896, 225,
    60, 374, 789, 426, 963, 258, 631, 147, 582, 907
];

function encuentraElNumero(numero) {
    const buscar = numeros.find((element) => element === numero);
    return buscar !== undefined;
}

function buscarElemento() {
    const numeroaBuscar = document.getElementById('numeroaBuscar');
    const resultado = document.getElementById('resultado');
    const busquedaResultado = document.getElementById('busquedaResultado');
    
    const numero = parseInt(numeroaBuscar.value);
    
    if (!numero && numero !== 0) {
        alert('Por favor, ingresa un número válido');
        return;
    }
    
    const encontrado = encuentraElNumero(numero);
    
    if (encontrado) {
        busquedaResultado.innerHTML = `
            <div class="alert alert-success">
                <h6>✅ ¡Número encontrado!</h6>
                <p><strong>Buscaste:</strong> ${numero}</p>
                <p><strong>Resultado:</strong> Muy bien, el número que buscas <strong>${numero}</strong>, ¡existe en el arreglo!</p>
            </div>
        `;
    } else {
        busquedaResultado.innerHTML = `
            <div class="alert alert-warning">
                <h6>❌ Número no encontrado</h6>
                <p><strong>Buscaste:</strong> ${numero}</p>
                <p><strong>Resultado:</strong> Nones, el número que buscas <strong>${numero}</strong>, no existe en el arreglo. ¡Vuelve a intentar!</p>
            </div>
        `;
    }
    
    resultado.classList.remove('d-none');
    numeroaBuscar.value = '';
}

function mostrarArreglo() {
    const arregloCompleto = document.getElementById('arregloCompleto');
    const arregloMostrado = document.getElementById('arregloMostrado');
    
    // Formatear el arreglo en filas de 10 números para mejor visualización
    let arregloFormateado = '';
    for (let i = 0; i < numeros.length; i += 10) {
        const fila = numeros.slice(i, i + 10);
        arregloFormateado += `<div class="mb-1">[${fila.join(', ')}]</div>`;
    }
    
    arregloMostrado.innerHTML = `
        <p class="mb-2"><strong>Total de números:</strong> ${numeros.length}</p>
        ${arregloFormateado}
    `;
    
    arregloCompleto.classList.remove('d-none');
}

// Permitir envío con Enter
document.getElementById('numeroaBuscar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        buscarElemento();
    }
});