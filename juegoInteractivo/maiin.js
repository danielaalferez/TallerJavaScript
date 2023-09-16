
        function jugar(opcionJugador) {
            const opciones = ["piedra", "papel", "tijeras"];
            const opcionPrograma = opciones[Math.floor(Math.random() * 3)];
            
            const resultado = ObtenerGanador(opcionJugador, opcionPrograma);

            const mensaje = `<br>Elegiste ${opcionJugador} y el programa eligio ${opcionPrograma}.<br>resultado: ${resultado}`;
            document.getElementById("resultado").innerHTML = mensaje;
        }

        function ObtenerGanador(opcionJugador, opcionPrograma) {
            if (opcionJugador === opcionPrograma) {
                return "Empate.";
            } else if (
                (opcionJugador === "piedra" && opcionPrograma === "tijeras") ||
                (opcionJugador === "papel" && opcionPrograma === "piedra") ||
                (opcionJugador === "tijeras" && opcionPrograma === "papel")
            ) {
                return "Ganasteee";
            } else {
                return "Perdiste";
            }
        }
   