<?php
require_once 'conexion.php';

$loginJson = file_get_contents('php://input');
$loginArreglo = json_decode($loginJson, true);

$consulta = "SELECT * FROM usuario WHERE nombreUsuario = '$loginArreglo[usuario]'";
$query = $con->prepare($consulta);
$query->execute();
$query->store_result();
$query->bind_result($col1, $col2, $col3);

if ($query->fetch()) {
    $idUsuario = $col1;
    $nombreUsuario = $col2;
    $passUsuario = $col3;

    if ($passUsuario === $loginArreglo['contraseña']) {
        echo '{"idUsuario":"'.$idUsuario.'","acceso":"1"}';
    } else {
        echo '{"acceso":"0"}';
    }
} else {
    echo '{"acceso":"-1"}';
}
 ?>
