let conectar = function(){
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'back/login.php');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function(){
        let respuesta = JSON.parse(xhr.responseText);
        if (respuesta.acceso == 1) {
            localStorage.setItem('usuario', usuario);
            localStorage.setItem('contraseña', contraseña);
            location.replace('/vistas/inicio.html');
        } else {
            if (respuesta.acceso == 0) {
                document.getElementById('error').innerHTML = 'Contraseña incorrecta';
            } else {
                document.getElementById('error').innerHTML = 'El usuario no existe';
            }
        }
    }
    xhr.send('{"usuario":"'+usuario+'","contraseña":"'+contraseña+'"}');
}

var reconectar = function(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '../back/login.php');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function(){
        callback(JSON.parse(xhr.responseText));
    }
    xhr.send('{"usuario":"'+localStorage.usuario+'","contraseña":"'+localStorage.contraseña+'"}');
}

var cerrarSesion = function(){
    localStorage.clear();
    location.replace('/');
}

// xhr.onreadystatechange = function() {
//     if(this.readyState == 4 && this.status == 200)
// }
//
// //     // The ID token you need to pass to your backend:
//     var idToken = googleUser.getAuthResponse().id_token;
//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', 'http://localhost:3000/server/login.php');
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.onload = function () {
//         // console.log('Signed in as: ' + xhr.responseText);
//         // var perfil = xhr.responseText;
//         let perfil = JSON.parse(xhr.responseText);
//         var acceso = perfil.acceso;
//     };
//
//     xhr.send('idtoken=' + idToken);
// };
