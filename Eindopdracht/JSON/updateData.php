<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$con = new mysqli("localhost", "root", "", "C4");

$data = json_decode(file_get_contents("php://input"));

$id = mysqli_real_escape_string($con, $data->ID);
$voornaam = mysqli_real_escape_string($con, $data->voornaam);
$achternaam = mysqli_real_escape_string($con, $data->achternaam);
$straat = mysqli_real_escape_string($con, $data->straat);
$huisnummer = mysqli_real_escape_string($con, $data->huisnummer);
$postcode = mysqli_real_escape_string($con, $data->postcode);
$woonplaats = mysqli_real_escape_string($con, $data->woonplaats);
$telefoonnummer = mysqli_real_escape_string($con, $data->telefoonnummer);

$query = "UPDATE personen set Voornaam = '". $voornaam . "', Achternaam = '". $achternaam . "', Straat = '". $straat . "',
Huisnummer = '". $huisnummer . "', Postcode = '". $postcode . "', Woonplaats = '". $woonplaats . "',
Telefoonnummer = '". $telefoonnummer . "' WHERE ID = " . $id;

mysqli_query($con, $query);

?>
