window.onload = function () {
    reconectar(linksLogin);
};

let linksLogin = function (respuesta) {
    if (respuesta.acceso == 1) {
        document.getElementById('nombreUsuario').innerHTML = localStorage.usuario;
        cargarLinks(respuesta.idUsuario);
    } else {
        location.replace('/');
    }
};

let guardarClick = function () {
    reconectar(guardarLink);
};

let cargarLinks = function (idUsuario) {
    document.getElementById('titulo').value = '';
    document.getElementById('url').value = '';
    document.getElementById('descripcion').value = '';
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '../back/links.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        let links = JSON.parse(xhr.responseText);
        document.getElementById('tablas').innerHTML = '';

        // const removeElements = (elms) => Array.from(elms).forEach(el => el.remove());
        // removeElements( document.querySelectorAll(".agregados") );

        let nuevaFecha = true;
        // let numTabla = 0;
        let fila;
        let textoCelda;
        let tabla;
        for (var x in links) {
            if (nuevaFecha) {
                let mysqliFecha = links[x].fechaLink.substring(0, 10).split('-');
                let fecha = document.createElement('h2');
                let text = document.createTextNode(mysqliFecha[2] + '/' + mysqliFecha[1] + '/' + mysqliFecha[0]);
                fecha.appendChild(text);
                document.getElementById('tablas').appendChild(fecha);

                nuevaFecha = false;
                // numTabla++;

                tabla = document.createElement('table');
                tabla.setAttribute('id', 'tabla');
                document.getElementById('tablas').appendChild(tabla);

                let cabecera = tabla.createTHead();
                fila = cabecera.insertRow();

                // let celda1 = document.createElement('th');
                // textoCelda = document.createTextNode('Id');
                // celda1.appendChild(textoCelda);

                let celda2 = document.createElement('th');
                textoCelda = document.createTextNode('Link');
                celda2.appendChild(textoCelda);

                let celda3 = document.createElement('th');
                textoCelda = document.createTextNode('Descripción');
                celda3.appendChild(textoCelda);

                // fila.appendChild(celda1);
                fila.appendChild(celda2);
                fila.appendChild(celda3);
            };

            if (parseInt(x) + 1 < links.length) {
                let date1 = links[x].fechaLink.substring(0, 10).split('-');
                let date2 = links[parseInt(x) + 1].fechaLink.substring(0, 10).split('-');
                let jsDate1 = date1[0] + date1[1] + date1[2];
                let jsDate2 = date2[0] + date2[1] + date2[2];
                if (jsDate1 != jsDate2) {
                    nuevaFecha = true;
                }
            }

            fila = tabla.insertRow();
            fila.className = 'agregados';
            // let celda1 = fila.insertCell(0);
            let celda2 = fila.insertCell(0);
            let celda3 = fila.insertCell(1);
            // celda1.innerHTML = links[x].idLink;
            celda2.innerHTML = '<a href="' + links[x].urlLink + '">' + links[x].tituloLink + '</a>';
            celda3.innerHTML = links[x].descLink;
        }
    };

    xhr.send('{"idUsuario":"' + idUsuario + '"}');
};

let guardarLink = function (respuesta) {
    let titulo = document.getElementById('titulo');
    let url = document.getElementById('url');
    let descripcion = document.getElementById('descripcion');
    if (titulo.value != '' && url.value != '') {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '../back/insertarLink.php');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            cargarLinks(respuesta.idUsuario);
        };

        xhr.send('{"tituloLink":"' + titulo.value + '","urlLink":"' + url.value + '","descLink":"' + descripcion.value + '","idUsuario":"' + respuesta.idUsuario + '"}');
    } else {
        alert('Es necesario ingresar un titulo y un url');
    }
};
