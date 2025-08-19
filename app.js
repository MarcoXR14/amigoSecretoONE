// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //Creamos una variable para almacenar el nombre ingresado
    let amigoGenerado = document.getElementById("amigo").value;

    //Si el programa detecta que en la variable no hay ningun nombre, nos indicará que ingresemos uno
    if (amigoGenerado.length == 0) {
        alert("Campo vacio, ingresa un nombre por favor");
        enfocarInput();
        return;

    } 
    if (amigos.includes(amigoGenerado)) {
        alert(`${amigoGenerado} ya se encuentra en la lista`);
        limpiarSeccion('amigo');
        enfocarInput();
        return;
    }
        //Si el programa detectó que si se ingresó un nombre correcto, guardará el nombre en nuestro arreglo
        amigos.push(amigoGenerado);
        limpiarSeccion("amigo");
        enfocarInput();
        actualizarLista();
    }

    function actualizarLista() {
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = "";

        //Meidnate el uso de un ciclo for, vamos a poder mostrar la información de nuetra lista.
        //Creamos la etiqueta li para ordenar nuestra información dentro del archivo HTML
        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement("li");
            li.textContent = amigos[i];
            listaAmigos.appendChild(li);
        }
    }

    function sortearAmigo(){
        //Creamos un if para identificar si hay nombres en la lista amigos
        if (amigos.length == 0) {
            alert("Lista vacia, agrega nombres por favor: ");
            enfocarInput();
        } else if (amigos.length < 3) {
            alert("Necesitamos que agregues más amigos para el sorteo: ");
            enfocarInput();
        } else {
            //Una vez que la lista no está vacia, seleccionamos un amigo de forma aleatoria gracias a los índices de los arreglos
            let resultadoAmigo = amigos[Math.floor(Math.random()*amigos.length)];
            document.getElementById("resultado").textContent = `El amigo sorteado es ${resultadoAmigo}`;
            }
        }

        function reiniciarJuego(){
            //Regresamos el juego a su estado original mediante un botón
            limpiarSeccion('resultado');
            limpiarSeccion('listaAmigos');
            amigos = [];
        }

function limpiarSeccion(identificador){
    //Creamos esta funcion para limpiar la información que se encuentren en las secciones correspondientes
    let elemento = document.getElementById(identificador);

    if (elemento.tagName === "INPUT" || elemento.tagName === "TEXTAREA") {
        elemento.value = '';
    } else {
        elemento.innerHTML = '';
    }
}

function enfocarInput(){
    //La función nos permite enfocar el input para agrgar la información.
    document.getElementById("amigo").focus();
}
