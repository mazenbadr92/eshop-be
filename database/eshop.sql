-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2021 at 01:06 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `is_ordered` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `is_ordered`) VALUES
(4, 1, 0),
(5, 1, 0),
(6, 1, 0),
(7, 1, 0),
(8, 1, 0),
(9, 1, 0),
(10, 1, 0),
(11, 1, 0),
(12, 1, 0),
(13, 1, 0),
(14, 1, 0),
(15, 1, 0),
(16, 1, 0),
(17, 1, 0),
(18, 1, 0),
(19, 1, 0),
(20, 1, 0),
(21, 1, 0),
(22, 1, 0),
(23, 1, 0),
(24, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `cart_details`
--

CREATE TABLE `cart_details` (
  `id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart_details`
--

INSERT INTO `cart_details` (`id`, `cart_id`, `product_id`, `quantity`) VALUES
(14, 5, 3, 1),
(15, 6, 3, 1),
(16, 7, 3, 1),
(17, 8, 3, 1),
(18, 9, 3, 1),
(19, 10, 2, 1),
(20, 11, 3, 1),
(21, 12, 3, 1),
(22, 13, 3, 1),
(23, 14, 3, 1),
(24, 15, 3, 1),
(25, 16, 3, 1),
(26, 17, 3, 1),
(27, 18, 3, 1),
(28, 19, 2, 1),
(29, 20, 1, 1),
(30, 21, 2, 1),
(31, 22, 2, 1),
(32, 23, 2, 1),
(33, 24, 2, 1),
(34, 4, 3, 1),
(35, 4, 3, 1),
(36, 4, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `quantity` int(11) NOT NULL,
  `imageURL` text NOT NULL,
  `rating` decimal(10,0) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `price`, `quantity`, `imageURL`, `rating`, `created_at`, `modified_at`) VALUES
(1, 'Dell G5 15-5500 Gaming laptop', 'Dell G5 15-5500 Gaming laptop - Intel Core i5-10300H, 16GB, 1TB + 256GB SSD, Nvidia Geforce GTX 1650 Ti 4GB GDDR6 Graphics, 15.6 inch FHD ( 1980x1080) IPS 120Hz, Backlit Keyboard, Windows 10 - Black', '18499', 6, 'https://m.media-amazon.com/images/I/81qtdSb6SEL._AC_SX679_.jpg', '0', '2021-12-04 22:36:45', '2021-12-04 22:49:14'),
(2, 'HP Pavilion 15-dk1009ne Gaming Laptop', 'HP Pavilion 15-dk1009ne Gaming Laptop - Intel 10th Core i5-10300H, 8GB RAM, 1TB HDD + 256 GB SSD, Nvidia Geforce GTX 1650 Ti 4GB GDDR6 Graphics, 15.6\" FHD (1920x1080) IPS, Dos -Shadow Black', '16199', 12, 'https://m.media-amazon.com/images/I/41NYDAm62bS._AC_.jpg', '0', '2021-12-04 22:36:45', '2021-12-04 22:48:06'),
(3, 'P Pavilion 15-ec1009nia Gaming Laptop.', 'HP Pavilion 15-ec1009nia Gaming Laptop - Ryzen 7 4800H 8-Cores, 16 GB RAM , 1TB HDD + 256GB SSD, NVIDIA GeForce GTX 1660 Ti 6 GB GDDR6 Graphics, 15.6\' FHD, Backlit Keyboard, Dos - Shadow Black', '22299', 10, 'https://m.media-amazon.com/images/I/71DBBqrA8mL._AC_SX679_.jpg', '0', '2021-12-04 22:46:30', '2021-12-04 22:46:30'),
(4, 'Lenovo IdeaPad Gaming 3 Laptop', 'Lenovo IdeaPad Gaming 3 Laptop - Ryzen 7 4800H 8-Cores, 16GB RAM, 1TB HDD + 256GB SSD, NVIDIA GeForce GTX 1650 4GB GDDR6 Graphics, 15.6\' FHD IPS 120Hz, Dos - Onyx Black (Lenovo Gaming RGB Mouse)', '19999', 15, 'https://m.media-amazon.com/images/I/51OkXaq9ZUL._AC_SX679_.jpg', '0', '2021-12-04 22:46:30', '2021-12-04 22:46:30'),
(5, 'BOSE 839769-0100 Frames Tempo Sport Sunglasses', 'BOSE 839769-0100 Frames Tempo Sport Sunglasses with Wireless Bluetooth Earphones with Microphone - Black', '1500', 4, 'https://m.media-amazon.com/images/I/612gQbofl-L._AC_SX679_.jpg', '0', '2021-12-04 22:52:02', '2021-12-04 22:52:25'),
(6, 'JBL Clip 4 Water-proof Bluetooth speaker - Blue', 'Brand: JBL\r\nModel Number: Clip4\r\nType: Bluetooth Speakers\r\nManufacturer no.: JBLCLIP4BLU\r\nUPC: 050036378086\r\nOutput Power: 5 W RMS\r\nBluetooth Version: 5.1', '1500', 3, 'https://m.media-amazon.com/images/I/61yE9gZPDcL._AC_SX679_.jpg', '0', '2021-12-04 22:52:02', '2021-12-04 22:52:02');

-- --------------------------------------------------------

--
-- Table structure for table `product_review`
--

CREATE TABLE `product_review` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `rating` decimal(10,0) NOT NULL,
  `review` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_review`
--

INSERT INTO `product_review` (`id`, `product_id`, `user_id`, `rating`, `review`, `created_at`, `modified_at`) VALUES
(1, 1, 1, '3', 'super awesome', '2021-12-06 07:18:57', '2021-12-06 07:18:57'),
(2, 1, 1, '5', 'great product', '2021-12-06 07:18:57', '2021-12-06 07:18:57'),
(3, 2, 1, '5', 'really nice product', '2021-12-06 07:18:57', '2021-12-06 07:18:57'),
(4, 2, 1, '1', 'very bad product', '2021-12-06 07:18:57', '2021-12-06 07:18:57'),
(5, 3, 1, '5', 'awesome product', '2021-12-06 07:18:57', '2021-12-06 07:18:57'),
(6, 3, 1, '4', 'very nice product', '2021-12-06 07:18:57', '2021-12-06 07:18:57'),
(7, 4, 1, '5', 'awesome product', '2021-12-06 07:18:57', '2021-12-06 07:18:57'),
(8, 6, 1, '3', 'nice to have', '2021-12-06 07:18:57', '2021-12-06 07:18:57');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `pasword` text NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `pasword`, `first_name`, `last_name`, `created_at`, `modified_at`) VALUES
(1, 'mazenbadr', '123456', 'mazen', 'badr', '2021-12-04 22:23:42', '2021-12-04 22:23:42');

-- --------------------------------------------------------

--
-- Table structure for table `user_address`
--

CREATE TABLE `user_address` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `address` text NOT NULL,
  `city` varchar(100) NOT NULL,
  `country` varchar(20) NOT NULL,
  `postal_code` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_address`
--

INSERT INTO `user_address` (`id`, `user_id`, `address`, `city`, `country`, `postal_code`) VALUES
(1, 1, '338 abd el salam aref st', 'alexandria', 'egypt', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `user_email`
--

CREATE TABLE `user_email` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `email` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_email`
--

INSERT INTO `user_email` (`id`, `user_id`, `email`) VALUES
(1, 1, 'mazenmmbadr@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `user_phone`
--

CREATE TABLE `user_phone` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `phone_type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_phone`
--

INSERT INTO `user_phone` (`id`, `user_id`, `phone`, `phone_type`) VALUES
(1, 1, '01150089028', 'mobile');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CART_USER_ID` (`user_id`);

--
-- Indexes for table `cart_details`
--
ALTER TABLE `cart_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CART_DETAILS_PRODUCT_ID` (`product_id`),
  ADD KEY `CART_DETAILS_CART_ID` (`cart_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_review`
--
ALTER TABLE `product_review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PRODUCT_REVIEW_PRODUCT_ID` (`product_id`),
  ADD KEY `PRODUCT_REVIEW_USER_ID` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_address`
--
ALTER TABLE `user_address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `USER_ADDRESS_ID_INDEX` (`user_id`) USING BTREE;

--
-- Indexes for table `user_email`
--
ALTER TABLE `user_email`
  ADD PRIMARY KEY (`id`),
  ADD KEY `USER_EMAIL_ID_INDEX` (`user_id`);

--
-- Indexes for table `user_phone`
--
ALTER TABLE `user_phone`
  ADD PRIMARY KEY (`id`),
  ADD KEY `USER_PHONE_ID_INDEX` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `cart_details`
--
ALTER TABLE `cart_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product_review`
--
ALTER TABLE `product_review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_address`
--
ALTER TABLE `user_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_email`
--
ALTER TABLE `user_email`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_phone`
--
ALTER TABLE `user_phone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `CART_USER_ID_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `cart_details`
--
ALTER TABLE `cart_details`
  ADD CONSTRAINT `CART_DETAIL_CART_ID` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CART_DETAIL_PRODUCT_ID` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `product_review`
--
ALTER TABLE `product_review`
  ADD CONSTRAINT `PRODUCT_REVIEW_PRODUCT_ID_FK` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PRODUCT_REVIEW_USER_ID_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user_address`
--
ALTER TABLE `user_address`
  ADD CONSTRAINT `USER_ADDRESS_ID_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_email`
--
ALTER TABLE `user_email`
  ADD CONSTRAINT `USER_EMAIL_ID_FK` FOREIGN KEY (`user_id`) REFERENCES `user_email` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_phone`
--
ALTER TABLE `user_phone`
  ADD CONSTRAINT `USER_PHONE_ID_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
