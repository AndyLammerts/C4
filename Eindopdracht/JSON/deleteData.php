<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "root", "", "c4");

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;

$query = "DELETE FROM personen WHERE ID=". $id;

mysqli_query($conn, $query);

?>
