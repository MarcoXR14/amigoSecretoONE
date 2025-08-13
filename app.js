// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoGenerado;

function agregarAmigo(){
    //Creamos una variable para almacenar el nombre ingresado
    amigoGenerado = document.getElementById("amigo").value;

    //Si el programa detecta que en la variable no hay ningun nombre, nos indicará que ingresemos uno
    if (amigoGenerado.length == 0) {
        alert("Ingresa un nombre correcto");
    } else {
        //Si el programa detectó que si se ingresó un nombre correcto, guardará el nombre en nuestro arreglo
        amigos.push(amigoGenerado);
        document.getElementById("amigo").value = '';
    }

    console.log(amigos)
}