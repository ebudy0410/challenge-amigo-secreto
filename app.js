let amigos = [];

/*
Capturar el valor del campo de entrada: Utilizando document.querySelector para obtener el texto ingresado por el usuario.

Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
*/

function agregarAmigo() {
    let nombre = document.querySelector('#amigo');

    if (nombre.value.trim() === '') {
        alert('Por favor, ingrese un nombre');
        return;
    }
    
    amigos.push(nombre.value);
    nombre.value = '';
    agregarNombre();
    return;
}

/*
Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
*/

function agregarNombre() {
    let lista = document.querySelector('#listaAmigos');

    document.getElementById('resultado').innerHTML = '';
    lista.innerHTML = '';
    amigos.map(nombre => {
        lista.innerHTML += `<li>${nombre}</li>`;
    });

    return;
}

/*
Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
*/

function sortearAmigo() {
    listaResultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        listaResultado.innerHTML = '';
        alert('No has agregado ningún amigo');
        return;
    }

    let amigoSorteado = Math.floor(Math.random() * amigos.length);

    document.getElementById('listaAmigos').innerHTML = '';
    listaResultado.innerHTML = `<li>El amigo sorteado es: ${amigos[amigoSorteado]}</li>`;
    amigos = [];

    return;
}