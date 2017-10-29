window.onload = function() {
    reconectar(inicioLogin);
    // if (reconectar('../back/login.php') == 1) {
    //     document.getElementById('nombreUsuario').innerHTML = localStorage.usuario;
    //     console.log(localStorage.usuario);
    // } else {
    //     // location.replace('http://localhost:3000');
    // }
}

let inicioLogin = function(respuesta){
    if (respuesta.acceso == 1) {
        document.getElementById('nombreUsuario').innerHTML = localStorage.usuario;
    } else {
        location.replace('/');
    }
}
// window.onload = function() {
//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', '../back/login.php');
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onload = function(){
//         let respuesta = JSON.parse(xhr.responseText);
//         if (respuesta.acceso == 1) {
//             document.getElementById('nombreUsuario').innerHTML = localStorage.usuario;
//         } else {
//             location.replace('http://localhost:3000');
//         }
//     }
//     xhr.send('{"usuario":"'+localStorage.usuario+'","contraseña":"'+localStorage.contraseña+'"}');
// }
//
// let cerrarSesion = function(){
//     localStorage.clear();
//     location.replace('http://localhost:3000');
// }
