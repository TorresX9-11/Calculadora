// Variables para la calculadora
let display = document.getElementById('display');
let operando1 = null;
let operando2 = null;
let operador = null;

// Función para agregar números al display
function agregarNumero(numero) {
    if (display.value === '0') {
        display.value = numero;
    } else {
        display.value += numero;
    }
}

// Función para agregar operadores
function operar(op) {
    operando1 = parseFloat(display.value);
    operador = op;
    display.value = '0';
}

// Función para calcular el resultado
function calcular() {
    operando2 = parseFloat(display.value);
    let resultado;

    switch (operador) {
        case '+':
            resultado = operando1 + operando2;
            break;
        case '-':
            resultado = operando1 - operando2;
            break;
        case '*':
            resultado = operando1 * operando2;
            break;
        case '/':
            resultado = operando1 / operando2;
            break;
        default:
            resultado = operando2; // Si no hay operador, el resultado es el segundo operando
    }

    historial.push(`${operando1} ${operador} ${operando2} = ${resultado}`);
    mostrarHistorial();
    guardarHistorial();
    display.value = resultado;
    operando1 = null;
    operando2 = null;
    operador = null;
}

// Función para limpiar el display
function limpiar() {
    display.value = '0';
    operando1 = null;
    operando2 = null;
    operador = null;
    mostrarHistorial();
}

// Historial de operaciones (solo para la sesión)
let historial = [];

// Función para mostrar el historial
function mostrarHistorial() {
    let historialElement = document.getElementById('historial');
    historialElement.innerHTML = ''; // Limpiar historial anterior

    historial.forEach(operacion => {
        let p = document.createElement('p');
        p.textContent = operacion;
        historialElement.appendChild(p);
    });
}


// Función para guardar el historial en localStorage
function guardarHistorial() {
    localStorage.setItem('calculadoraHistorial', JSON.stringify(historial));
}

// Cargar historial desde localStorage al cargar la página
window.addEventListener('load', () => {
    let historialStorage = localStorage.getItem('calculadoraHistorial');
    if (historialStorage) {
        historial = JSON.parse(historialStorage);
        mostrarHistorial();
    }
});
