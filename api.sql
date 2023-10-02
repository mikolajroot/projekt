-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Paź 02, 2023 at 04:42 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `username` varchar(1000) NOT NULL,
  `pass` varchar(1000) NOT NULL,
  `score` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `pass`, `score`) VALUES
(1, 'miki', 'miki', 75),
(2, 'polska', 'polska', 0),
(3, 'atsret', 'tu', 0),
(4, 'lol', 'lol', 0),
(5, 'sodfk', 'refa', 0),
(6, 'kfodsa', 'mise', 0),
(7, 'poland', 'lol', 0),
(8, 'jolo', 'jop', 0),
(9, 'for', 'loop', 0),
(10, 'wet', 'cat', 0),
(11, 'sahara', 'mola', 0),
(12, 'german', 'pol', 0),
(13, 'kgjfbjkds', 'rer', 0),
(14, 'sjkfdbgjk', 'lol', 0),
(15, 'kamil', 'piekarski', 0),
(16, 'pawel', 'german', 0),
(17, 'gracjan', 'mach', 0),
(18, 'jola', 'ola', 0),
(19, 'mona', 'lisa', 0),
(20, 'lisa', 'mona', 0),
(21, 'asdkk', 'kola', 0),
(22, 'mokap', 'pokap', 0),
(24, 'lkafdjk', 'moka', 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
