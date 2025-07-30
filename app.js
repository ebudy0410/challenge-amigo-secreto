//Declaro la variable global de la aplicación, el array que contiene el nombre de los amigos ingresados por el usuario.

var amigos = [];

//Creo la función que se va a activar con el evento onclick() desde el botón "Añadir", desarrollo la lógica para agregar amigos a la lista.
function agregarAmigo() {
    //Capturar el valor del campo de entrada: Utilizando document.querySelector para obtener el texto ingresado por el usuario.
    let nombre = document.querySelector('#amigo');

    //Validar la entrada: Utilizo la función trim() para evitar el uso de espacios y comparo el valor del campo de entrada  con un valor vacío
    //y en caso de ser verdadero, muestro un alert con un mensaje de error y termino la función para no agregar valores inválidos.
    if (nombre.value.trim() === '') {
        alert('Por favor, ingrese un nombre');
        return;
    }
    
    //Actualizo el array de amigos: Si el nombre es válido, lo añado al arreglo que almacena los nombre de amigos usando el método push().
    amigos.push(nombre.value);

    //Limpio el campo de entrada: Después de añadir el nombre, restablezco el campo de texto a una cadena vacía.
    nombre.value = '';

    //Es necesario llamar esta función para poder mostrar en pantalla la lista.
    agregarNombre();
    return;
}

//Creo la función que va a mostrar en pantalla un <li> por cada amigo agregado al array "amigos".
function agregarNombre() {
    //Obtener el elemento de la lista: document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
    let lista = document.querySelector('#listaAmigos');

    //Limpiar la lista existente: Establezco lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar
    //y también limpio la lista "resultado" en caso de que existe para rejugar.
    document.getElementById('resultado').innerHTML = '';
    lista.innerHTML = '';

    /*
        Iterar sobre el arreglo: Creo una función de flecha dentro del método .map() para recorrer el array de amigos y creo elementos <li> por cada amigo para mostrarlos en la página.
        Si bien la cosigna es usar un bucle for, opto por esta otra opción por gusto personal y porque me parece más eficiente, igualmente dejo un bucle for:
        
        for (let i = 0; i < amigos.length; i++) {
            lista.innerHTML += `<li>${amigos[i]}</li>`;
        };
    */

    amigos.map(nombre => {lista.innerHTML += `<li>${nombre}</li>`;});

    return;
}

/*




*/

//Creo la función que se va a activar con el evento onclick() desde el botón "Sortear amigo", desarrollo la lógica para mostrar el amigo sorteado.
function sortearAmigo() {
    //Relaciono una variable con la lista "resultado" del DOM a través del método getElementById() para variar, personalmente me gusta usar más
    //el método QuerySelecto(), por eso recién ahora se ve uno distinto.
    listaResultado = document.getElementById('resultado');

    //Valido que haya amigos disponibles: Antes de sortear, compruebo si el array "amigos" no está vacío. En caso de estar vacío, muestro un mensaje de
    //error y termino la función.
    if (amigos.length === 0) {
        //Acá limpio la lista "resultado" en caso de que exista para rejugar.
        listaResultado.innerHTML = '';

        alert('No has agregado ningún amigo');
        return;
    }

    //Genero un índice aleatorio usando Math.random() y Math.floor() de acuerdo a la cantidad de elementos dentro del array y lo guardo en una variable.
    let amigoSorteado = Math.floor(Math.random() * amigos.length);

    //Mostrar el resultado: Actualizar el contenido de las listas HTML, limpio "listAmigos" y muestro "resultado" utilizando innerHTML para mostrar el amigo sorteado.
    document.getElementById('listaAmigos').innerHTML = '';
    listaResultado.innerHTML = `<li>El amigo sorteado es: ${amigos[amigoSorteado]}</li>`;
    amigos = [];

    return;
}