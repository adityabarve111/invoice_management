-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2024 at 09:32 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `invoice_mgmt`
--

-- --------------------------------------------------------

--
-- Table structure for table `shop_owner_credentials`
--

CREATE TABLE `shop_owner_credentials` (
  `ID` int(11) NOT NULL,
  `SHOPNAME` longtext NOT NULL,
  `SHOPID` longtext NOT NULL,
  `PASSWORD` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shop_owner_credentials`
--

INSERT INTO `shop_owner_credentials` (`ID`, `SHOPNAME`, `SHOPID`, `PASSWORD`) VALUES
(11, 'Amul', 'AMULshg5081anan', '$2y$10$dSsPqTkM2tSNAig4LFmpJOUNeVySNUl7f3t9Iz.B6olJC9YNKHC/e'),
(12, 'Adhunik AR', 'ADHUspg2913vish', '$2y$10$wSDZshcm9ULeO4k0bw/1OOGioh54M6UKX2mvL60RBohWwuukWfyFu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `shop_owner_credentials`
--
ALTER TABLE `shop_owner_credentials`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `shop_owner_credentials`
--
ALTER TABLE `shop_owner_credentials`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
