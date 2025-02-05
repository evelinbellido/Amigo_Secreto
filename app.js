// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        input.value = '';
        actualizarLista();
        input.value = '';
        console.log(amigos);
    } else {
        alert('Porfavor ingresa un noombre valido');
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((nombre, index) => {
        const li = document.createElement("li"); 
        li.textContent = `${index + 1}. ${nombre}`;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
 
    if (amigos.length === 0) {
        alert("No hay participantes en la lista.");
        return; 
    }
  
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[indiceAleatorio]; 
    
    document.getElementById("resultado").textContent = `🎉 El amigo secreto es: ${elegido}`;
}