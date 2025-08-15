// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //Creamos una variable para almacenar el nombre ingresado
    let amigoGenerado = document.getElementById("amigo").value;

    //Si el programa detecta que en la variable no hay ningun nombre, nos indicará que ingresemos uno
    if (amigoGenerado.length == 0) {
        alert("Ingresa un nombre correcto");
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

    // funcion para actualizar la lista de amigos
    function actualizarLista() {
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = "";

        for(let i = 0; i < amigos.length; i++) {
            const li = document.createElement("li");
            li.textContent = amigos[i];
            listaAmigos.appendChild(li);
        }
    }

function limpiarSeccion(identificador){
    document.getElementById(identificador).value = '';
    return;
}

function enfocarInput(){
    document.getElementById("amigo").focus();
}