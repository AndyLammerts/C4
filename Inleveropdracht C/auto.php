<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "root", "", "bedrijf");

$result = $conn->query("SELECT Bedrijfsnaam, Adres, Woonplaats, Telefoon FROM bedrijf");
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
 if ($outp != "") {$outp .= ",".PHP_EOL;}
 $outp .= '{"Bedrijfsnaam":"' . $rs["Bedrijfsnaam"] . '",'.PHP_EOL;
 $outp .= '"Adres":"' . $rs["Adres"] . '",'.PHP_EOL;
 $outp .= '"Telefoon":"'. $rs["Telefoon"] . '"}'.PHP_EOL;
}
$outp ='{"records":['.$outp.']}';
$conn->close();
echo($outp);
?>
