window.onload = function () {
    reconectar(inicioLogin);
};

let inicioLogin = function (respuesta) {
    if (respuesta.acceso == 1) {
        document.getElementById('nombreUsuario').innerHTML = localStorage.usuario;
    } else {
        location.replace('/');
    }
};
