-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 26 mrt 2022 om 21:37
-- Serverversie: 10.4.17-MariaDB
-- PHP-versie: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `c4`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `personen`
--

CREATE TABLE `personen` (
  `ID` int(11) NOT NULL,
  `Voornaam` varchar(30) NOT NULL,
  `Achternaam` varchar(30) NOT NULL,
  `Straat` varchar(50) NOT NULL,
  `Huisnummer` varchar(5) NOT NULL,
  `Postcode` varchar(6) NOT NULL,
  `Woonplaats` varchar(30) NOT NULL,
  `Telefoonnummer` int(10) NOT NULL,
  `TijdToegevoegd` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `personen`
--

INSERT INTO `personen` (`ID`, `Voornaam`, `Achternaam`, `Straat`, `Huisnummer`, `Postcode`, `Woonplaats`, `Telefoonnummer`, `TijdToegevoegd`) VALUES
(1, 'Andy', 'Lammerts', 'Heideveld', '20', '9407GG', 'Assen', 616914009, '2022-03-26 20:31:34'),
(2, 'Delano', 'Schrodinger', 'Timboektoelaan', '30', '5044GO', 'Zeist', 623483239, '2022-03-26 20:35:37'),
(3, 'Piet-Jan', 'Klaas-Meneer', 'Jan Boskampveld', '1', '4444AA', 'Leeuwarden', 623483249, '2022-03-26 20:35:32'),
(4, 'Koos', 'Inspiratieloos', 'Grijzeweg', '44', '2371ZZ', 'Den Haag', 648262234, '2022-03-26 20:35:28');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `personen`
--
ALTER TABLE `personen`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `personen`
--
ALTER TABLE `personen`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
