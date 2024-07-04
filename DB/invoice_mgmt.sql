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

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `ID` int(11) NOT NULL,
  `INVOICEID` mediumtext NOT NULL,
  `CUSTOMERID` longtext NOT NULL,
  `SHOPID` longtext NOT NULL,
  `TOTALAMOUNT` mediumtext NOT NULL,
  `PAYMENTSTATUS` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `invoice_products`
--

CREATE TABLE `invoice_products` (
  `ID` int(11) NOT NULL,
  `INVOICEID` mediumtext NOT NULL,
  `PRODUCTID` mediumtext NOT NULL,
  `QUANTITY` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Indexes for table `customer_data`
--
ALTER TABLE `customer_data`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `invoice_products`
--
ALTER TABLE `invoice_products`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `shop_owner_credentials`
--
ALTER TABLE `shop_owner_credentials`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `shop_owner_data`
--
ALTER TABLE `shop_owner_data`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer_data`
--
ALTER TABLE `customer_data`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `invoice_products`
--
ALTER TABLE `invoice_products`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `shop_owner_credentials`
--
ALTER TABLE `shop_owner_credentials`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `shop_owner_data`
--
ALTER TABLE `shop_owner_data`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
