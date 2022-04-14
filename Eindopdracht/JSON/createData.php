<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "root", "", "C4");

$data = json_decode(file_get_contents("php://input"));

$voornaam = mysqli_real_escape_string($con, $data->voornaam);
$achternaam = mysqli_real_escape_string($con, $data->achternaam);
$straat = mysqli_real_escape_string($con, $data->straat);
$huisnummer = mysqli_real_escape_string($con, $data->huisnummer);
$postcode = mysqli_real_escape_string($con, $data->postcode);
$woonplaats = mysqli_real_escape_string($con, $data->woonplaats);
$telefoonnummer = mysqli_real_escape_string($con, $data->telefoonnummer);

$query = "INSERT into personen (Voornaam, Achternaam, Straat, Huisnummer, Postcode, Woonplaats, Telefoonnummer) VALUES ('$voornaam','$achternaam','$straat','$huisnummer', '$postcode','$woonplaats', '$telefoonnummer' )";

mysqli_query($con, $query);
echo true;

?>
