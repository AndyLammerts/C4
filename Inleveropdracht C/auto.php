<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "C4", "C4", "bedrijf");

$result = $conn->query("SELECT Bedrijfsnaam, Adres, Woonplaats, Telefoon FROM bedrijf");
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
 if ($outp != "") {$outp .= ",";}
 $outp .= '{"Bedrijfsnaam":"' . $rs["Bedrijfsnaam"] . '",';
 $outp .= '"Adres":"' . $rs["Adres"] . '",';
 $outp .= '"Telefoon":"'. $rs["Telefoon"] . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();
echo($outp);
?>
