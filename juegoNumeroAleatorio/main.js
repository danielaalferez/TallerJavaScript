const numeroAleatorio= Math.floor(Math.random()*100+1);
let intentos = 0;

function numeros() {
    const usuario = parseInt(document.getElementById('usu').value);
    intentos++;

    if (usuario === numeroAleatorio) {
        alert(`Muy bien adivino el número en ${intentos} intentos`);
    } else if (usuario < numeroAleatorio) {
        document.getElementById('mensaje').textContent = 'Más alto';
    } else {
        document.getElementById('mensaje').textContent = 'Más bajo';
    }
}

