// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {

  // Capturamos el nombre ingresado por el usuario
  let input = document.getElementById("amigo");
  let nombre = input.value.trim(); // Usamos trim() para eliminar espacios al inicio y al final

  // Validamos que el nombre no esté vacío y que no se repita
  // Si el nombre está vacío o ya existe en la lista, mostramos un mensaje de alerta
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }else if (amigos.includes(nombre)) {
  alert("Ese nombre ya fue ingresado.");
  return;
    }

  // se va agregando el nombre al arreglo.
  amigos.push(nombre);

  // Al aplicar esta funcion se va agregando el nombre a la lista de amigos
  actualizarLista();

  // Se aplica para limpiar el campo de entrada
  input.value = "";
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar la lista antes de volver a jugar.

  // se recorre el array y se crea la lista de amigos
  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}


 function sortearAmigo(){
    // Verificamos que haya al menos dos amigos para sortear
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }
    
    // Creamos una copia del array de amigos para evitar modificar el original
    let amigosRestantes = [...amigos];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores
    
    // Recorremos el array de amigos y asignamos un amigo secreto a cada uno
    amigos.forEach((amigo) => {
        // Elegimos un amigo al azar de los restantes
        let indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
        let amigoSecreto = amigosRestantes[indiceAleatorio];
    
        // Mostramos el resultado en la lista
        let li = document.createElement("li");
        li.textContent = `${amigo} -> ${amigoSecreto}`;
        resultado.appendChild(li);
    
        // Eliminamos el amigo elegido para que no pueda ser elegido de nuevo
        amigosRestantes.splice(indiceAleatorio, 1);
    }); 
    // Desactivar el botón para que no se pueda sortear de nuevo
    //document.getElementById("btnSortear").disabled = true;
 }




// limpiamos la lista de amigos.
function limpiar() {    
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("amigo").value = "";
}   
