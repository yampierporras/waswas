<?php
$con = new mysqli('127.0.0.1', 'root', '', 'waswasdb');
// $con = new mysqli('localhost', 'id3419310_gporras', 'Y@mpier pg', 'id3419310_waswasdb');
if ($con->connect_error) {
    die('Error de Conexión (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}
 ?>
