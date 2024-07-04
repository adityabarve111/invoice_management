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
-- Table structure for table `shop_owner_data`
--

CREATE TABLE `shop_owner_data` (
  `ID` int(11) NOT NULL,
  `SHOPNAME` mediumtext NOT NULL,
  `SHOPID` mediumtext NOT NULL,
  `OWNERNAME` mediumtext NOT NULL,
  `GSTNO` mediumtext NOT NULL,
  `ADDRESS` mediumtext NOT NULL,
  `PHONENO` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shop_owner_data`
--

INSERT INTO `shop_owner_data` (`ID`, `SHOPNAME`, `SHOPID`, `OWNERNAME`, `GSTNO`, `ADDRESS`, `PHONENO`) VALUES
(26, 'Amul', 'AMULshg5081anan', 'Anand', 'SHGT3421', 'Surat', '8652169464'),
(27, 'Adhunik AR', 'ADHUspg2913vish', 'Vishwas', 'SPG112345', 'Mumbai', '8850179956');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `shop_owner_data`
--
ALTER TABLE `shop_owner_data`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `shop_owner_data`
--
ALTER TABLE `shop_owner_data`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
