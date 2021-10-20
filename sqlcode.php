<?php


"CREATE DATABASE IF NOT EXISTS jerseyshop;";
"USE jerseyshop";

"CREATE  TABLE IF NOT EXISTS `user` (
    `id` INT  AUTOINCREMENT ,
    `fullName` VARCHAR(100) NOT NULL ,
    `gender` VARCHAR(6) ,
    `date_of_birth` DATE ,
    `physical_address` VARCHAR(255) ,
    `postal_address` VARCHAR(255) ,
    `contact_number` VARCHAR(75) ,
    `email` VARCHAR(255) ,
    PRIMARY KEY (`membership_number`) )
  ENGINE = InnoDB";


"INSERT INTO `jersey` (`id`, `name`, `price`, `image`, `description`, `categoryID`) VALUES (1000, 'Galatasaray Training Jersey1', 100, 'jersey(1).jpeg', 'This is a useful and good jersey', 1)";
"INSERT INTO `jersey` (`id`, `name`, `price`, `image`, `description`, `categoryID`) VALUES (1001, 'Galatasaray Home Jersey1', 160, 'jersey(2).jpeg', 'This is a useful and good jersey', 2)";
"INSERT INTO `jersey` (`id`, `name`, `price`, `image`, `description`, `categoryID`) VALUES (1002, 'Galatasaray Away Jersey1', 180, 'jersey(3).jpeg', 'This is a useful and good jersey', 3)";
"INSERT INTO `jersey` (`id`, `name`, `price`, `image`, `description`, `categoryID`) VALUES (1003, 'Galatasaray Training Jersey2', 120, 'jersey(4).jpeg', 'This is a useful and good jersey', 1)";
"INSERT INTO `jersey` (`id`, `name`, `price`, `image`, `description`, `categoryID`) VALUES (1004, 'Galatasaray Home Jersey2', 110, 'jersey(5).jpeg', 'This is a useful and good jersey', 2)";


"CREATE TABLE user (name VARCHAR(20), owner VARCHAR(20),
       species VARCHAR(20), sex CHAR(1), birth DATE, death DATE)";

?>