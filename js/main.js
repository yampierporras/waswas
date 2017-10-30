let conectar = function () {
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'back/login.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        let respuesta = JSON.parse(xhr.responseText);
        if (respuesta.acceso == 1) {
            localStorage.setItem('usuario', usuario);
            localStorage.setItem('contraseña', contraseña);
            location.replace('/vistas/inicio.html');
            document.getElementsByClassName('error')[0].style = 'display: none';
        } else {
            if (respuesta.acceso == 0) {
                document.getElementById('error').innerHTML = 'Contraseña incorrecta';
                document.getElementsByClassName('error')[0].style = 'display: block';
            } else {
                document.getElementById('error').innerHTML = 'El usuario no existe';
                document.getElementsByClassName('error')[0].style = 'display: block';
            }
        }
    };

    xhr.send('{"usuario":"' + usuario + '","contraseña":"' + contraseña + '"}');
};

var reconectar = function (callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '../back/login.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText));
    };

    xhr.send('{"usuario":"' + localStorage.usuario + '","contraseña":"' + localStorage.contraseña + '"}');
};

var cerrarSesion = function () {
    localStorage.clear();
    location.replace('/');
};
