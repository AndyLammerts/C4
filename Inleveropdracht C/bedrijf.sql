-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 29 mrt 2022 om 11:29
-- Serverversie: 10.4.22-MariaDB
-- PHP-versie: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bedrijf`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `bedrijf`
--

CREATE TABLE `bedrijf` (
  `ID` int(3) NOT NULL,
  `Bedrijfsnaam` varchar(70) NOT NULL,
  `Adres` varchar(95) NOT NULL,
  `Woonplaats` text NOT NULL,
  `Telefoon` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `bedrijf`
--

INSERT INTO `bedrijf` (`ID`, `Bedrijfsnaam`, `Adres`, `Woonplaats`, `Telefoon`) VALUES
(1, 'Altera', 'Mistweg 45', 'Emmen', '0591569872'),
(2, 'Mixed Media ', 'Europaweg 345', 'Coevorden', '0524536987'),
(3, 'Malware\r\nProtection', 'Julianalaan 4', 'Emmen', '0524536987'),
(4, 'X-mysterie', 'Megaweg 7', 'Coevorden', '0524896325');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `bedrijf`
--
ALTER TABLE `bedrijf`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `bedrijf`
--
ALTER TABLE `bedrijf`
  MODIFY `ID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
