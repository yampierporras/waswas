<?php
require_once 'conexion.php';

$json = file_get_contents('php://input');
$arreglo = json_decode($json, true);

$consulta = "INSERT INTO link VALUES(default, '$arreglo[tituloLink]', '$arreglo[urlLink]', '$arreglo[descLink]', NOW(), $arreglo[idUsuario])";
if ($query = $con->prepare($consulta)) {
    $query->execute();
    print_r('Link guardado');
}
 ?>
