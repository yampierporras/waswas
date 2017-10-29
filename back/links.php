<?php
require_once 'conexion.php';

$json = file_get_contents('php://input');
$arreglo = json_decode($json, true);

$consulta = "SELECT * FROM link WHERE idUsuario = '$arreglo[idUsuario]' ORDER BY fechaLink DESC";
$query = $con->prepare($consulta);
$query->execute();
$query->store_result();
$query->bind_result($col1, $col2, $col3, $col4, $col5, $col6);

$respuesta = array();
while ($query->fetch()) {
    $fila = array();
    $fila['idLink'] = $col1;
    $fila['tituloLink'] = $col2;
    $fila['urlLink'] = $col3;
    $fila['descLink'] = $col4;
    $fila['fechaLink'] = $col5;
    $fila['idUsuario'] = $col6;
    array_push($respuesta, $fila);
}

print_r(json_encode($respuesta));

 ?>
