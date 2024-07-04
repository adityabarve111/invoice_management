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
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `ID` int(11) NOT NULL,
  `NAME` mediumtext NOT NULL,
  `TYPE` mediumtext NOT NULL,
  `DATEOFMANUFACTURE` date NOT NULL,
  `DATEOFEXPIRY` date NOT NULL,
  `PRODUCTID` mediumtext NOT NULL,
  `QUANTITY` mediumtext NOT NULL,
  `PRICE` mediumtext NOT NULL,
  `DESCRIPTION` longtext NOT NULL,
  `SHOPID` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`ID`, `NAME`, `TYPE`, `DATEOFMANUFACTURE`, `DATEOFEXPIRY`, `PRODUCTID`, `QUANTITY`, `PRICE`, `DESCRIPTION`, `SHOPID`) VALUES
(7, '8mm MicroController', 'Micro Controller', '2024-07-01', '2024-07-31', '8mmmmicr8232', '10', '5000', 'It is a micro controller', 'AMULshg5081anan'),
(8, 'HP Laptop', 'Laptop', '2021-01-01', '2024-07-31', 'hplalapt8560', '7', '50000', 'This is I3 Laptop', 'AMULshg5081anan'),
(9, 'Realme GT Master Edition', 'Mobile', '2020-01-10', '2040-01-30', 'realmobi9329', '10', '30000', 'This is mobile', 'ADHUspg2913vish'),
(10, 'Moto Flip GS 2', 'Mobile', '2024-07-01', '2024-07-31', 'motomobi8059', '2', '70000', 'New flip phone', 'ADHUspg2913vish'),
(11, 'Moto Flip GS 2', 'Mobile', '2024-01-04', '2028-11-23', 'motomobi3605', '100', '150000', 'This is MOTO Mobile', 'AMULshg5081anan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
