<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost", "root", "", "C4");

$result = $conn->query("SELECT ID, Voornaam, Achternaam, Straat, Huisnummer, Postcode, Woonplaats, Telefoonnummer FROM personen");
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
 if ($outp != "") {$outp .= ",".PHP_EOL;}
    $outp .= '{"ID":"' . $rs["ID"] . '",'.PHP_EOL;
   $outp .= '"Voornaam":"' . $rs["Voornaam"] . '",'.PHP_EOL;
   $outp .= '"Achternaam":"' . $rs["Achternaam"] . '",'.PHP_EOL;
   $outp .= '"Straat":"' . $rs["Straat"] . '",'.PHP_EOL;
   $outp .= '"Huisnummer":"' . $rs["Huisnummer"] . '",'.PHP_EOL;
   $outp .= '"Postcode":"' . $rs["Postcode"] . '",'.PHP_EOL;
   $outp .= '"Woonplaats":"' . $rs["Woonplaats"] . '",'.PHP_EOL;
   $outp .= '"Telefoonnummer":"'. $rs["Telefoonnummer"] . '"}'.PHP_EOL;
 }
$outp ='{"records":['.$outp.']}';
$conn->close();
echo($outp);
?>
