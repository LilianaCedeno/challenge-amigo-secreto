// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {

  // Capturamos el nombre ingresado por el usuario
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  // Validamos que el nombre no esté vacío y que no se repita
  // Si el nombre está vacío o ya existe en la lista, mostramos un mensaje de alerta
  if (nombre === "") {
    alert("Por favor, inserte un nombre valido.");
    return;
  }else if (amigos.includes(nombre)) {
  alert("Ese nombre ya fue ingresado.");
  return;
    }

  // se va agregando el nombre a la lista.
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

// limpiamos la lista de amigos.
function limpiar() {    
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("amigo").value = "";
}   
