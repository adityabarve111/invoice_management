-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2024 at 09:30 PM
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
-- Table structure for table `customer_data`
--

CREATE TABLE `customer_data` (
  `ID` int(11) NOT NULL,
  `NAME` mediumtext NOT NULL,
  `CUSTOMERID` mediumtext NOT NULL,
  `ADDRESS` longtext NOT NULL,
  `PHONENO` bigint(12) NOT NULL,
  `GSTNO` mediumtext NOT NULL,
  `SHOPID` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer_data`
--

INSERT INTO `customer_data` (`ID`, `NAME`, `CUSTOMERID`, `ADDRESS`, `PHONENO`, `GSTNO`, `SHOPID`) VALUES
(28, 'Aditya Barve', 'ADASQ2254', 'C5, Room no 13, Gayatri Dham,', 9137818209, 'ASQ1145', 'AMULshg5081anan'),
(29, 'Beena Tiwari', 'BEMHK2218', 'Bhopal', 7894561230, 'MHK2221131', 'AMULshg5081anan'),
(30, 'Meena Kumari', 'MESHG8048', 'Lucknow', 9874560130, 'SHGT3421', 'AMULshg5081anan'),
(31, 'Aditya Barve', 'ADASQ7738', 'C5, Room no 13, Gayatri Dham,', 9137818209, 'ASQ1145', 'ADHUspg2913vish'),
(32, 'V K Birla', 'VKBIR8331', 'Birla Complex', 7574896587, 'BIR12344', 'AMULshg5081anan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer_data`
--
ALTER TABLE `customer_data`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer_data`
--
ALTER TABLE `customer_data`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
