let intento = 1;
let dificultad = 0;
let secretNum = 0;
let sortados = [];
let numeroMaximo = 0;
let numeroGenerado = 0;

function mostrarTexto(id, texto) {
    document.getElementById(id).innerHTML = texto;
}

function numeroSecreto(dificultad) {
    if (dificultad == 1) {
        numeroGenerado = Math.floor(Math.random()*(10)+1);
        numeroMaximo = 10;
    }else if (dificultad == 2) {
        numeroGenerado = Math.floor(Math.random()*(50)+1);
        numeroMaximo = 50;
    }else if (dificultad == 3) {
        numeroGenerado = Math.floor(Math.random()*(100)+1);
        numeroMaximo = 100;
    }
    //
    if (sortados.includes(numeroGenerado)) {
        return numeroSecreto(dificultad);
    }
    else{
        sortados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function comprobarIntento() {
    if (intento == 1) {
        dificultad = obtenerDificultad();
        secretNum = numeroSecreto(dificultad);
        console.log(secretNum+'   '+dificultad);
    }
    intento++;
    let numUser = parseInt(document.getElementById('valorUsuario').value);
    console.log(intento);
    if (intento > 1) {
        //para desabilitar el boton de nivel
        deshabilitarBoton('dificultad');
        //hacer todo lo del nivel
    }
    if (numUser == secretNum) {
        mostrarTexto('titulo',`¡Felicidades, acertastes tras ${intento-1} ${intento-1==1 ? 'vez' : 'veces'}!`);
        mostrarTexto('mensaje','Para cambiar la dificultad da click en refres en la parte superior derecha de la imagen');
        //cambiar foto
        colocarImagen('wonned', 'chica de cabello rosa con ramo de rosas diciendo ganaste')
        //limpiar lacaja
        limpiarInput();
        //desavilitar boton intento
        deshabilitarBoton('intento');
        //habilitar boton nuevo juego
        habilitarBoton('nuevo');
        //desabilitar input
        deshabilitarBoton('valorUsuario');
    }else{
        if (secretNum > numUser) {
            mostrarTexto('mensaje','El numero secreto es mayor');
            limpiarInput();
        }else{
            mostrarTexto('mensaje','El numero secreto es menor');
            limpiarInput();
        }
        if (intento-1 >= (dificultad*3)) {
            mostrarTexto('titulo',`Lo siento, tus ${intento-1} intentos se acabaron`);
            //cambiar foto
            colocarImagen('failed','chica de cabello rosa diciendo fallaste');
            //limpiar la caja
            limpiarInput();
            //desavilitar boton intento
            deshabilitarBoton('intento');
            //habilitar boton nuevo juego
            habilitarBoton('nuevo');
            //desabilitar input
            deshabilitarBoton('valorUsuario');
        }
    }
}

function deshabilitarBoton(boton) {
    document.getElementById(boton).setAttribute('disabled',true);
}
function habilitarBoton(boton) {
    document.getElementById(boton).removeAttribute('disabled');
}

function colocarImagen(imagen, desc) {
    document.getElementById('imagen').innerHTML = '<img src="img/'+imagen+'.jpg" alt="'+desc+'">';
}

function limpiarInput() {
    document.getElementById('valorUsuario').value = '';

}

function obtenerDificultad() {
    return document.getElementById('dificultad').value;
}

//nueva partida
function nuevaPartida() {
    intento = 1;
    mostrarTexto('titulo', 'Adivina el numero secreto');
    if (dificultad == 1) {
        mostrarTexto('mensaje', 'Ingresa un numero dentro del rango 1-10');
    }else if (dificultad == 2) {
        mostrarTexto('mensaje', 'Ingresa un numero dentro del rango 1-50');
    }else if (dificultad == 3) {
        mostrarTexto('mensaje', 'Ingresa un numero dentro del rango 1-100');
    }else{
        mostrarTexto('mensaje', 'de alguna manera seleccionaste una dificultad que no existe, refresca el juego por favor');
    }
    colocarImagen('chica', 'chica de perfil con cabello roza');
    limpiarInput();
    habilitarBoton('intento');
    deshabilitarBoton('nuevo');
    if (sortados.length == numeroMaximo) {
        mostrarTexto('mensaje','Ya se sortearon todos los numeros posibles');
    }

}

//condiciones iniciales
function condicionesIniciales() {
    mostrarTexto('titulo', 'Adivina el numero secreto');
    mostrarTexto('mensaje','Ingresa un numero dentro del rango: <br>Facil:1-10<br>Medio:1-50<br>Dificil:1-100');
    colocarImagen('chica', 'chica de perfil con cabello roza');
    limpiarInput();
    //habilitarBoton('select');
    deshabilitarBoton('nuevo');
    habilitarBoton('intento');
    habilitarBoton('dificultad');
    intento = 1;
    sortados = [];
    numeroMaximo = 0;

}


condicionesIniciales();


//habilitarBoton('nuevo');
//deshabilitarBoton('intento');