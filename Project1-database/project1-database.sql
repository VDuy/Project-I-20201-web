
--  -- drop database if exists `project-database`;
-- --  create database `project1-database`;
-- --  use `project1-database` ;

-- -- 	CREATE TABLE `account` (
-- -- `username` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
-- --  `password` varchar(100)  CHARACTER SET utf8mb4 DEFAULT NULL,
-- --  `phone` varchar(100)  CHARACTER SET utf8mb4 DEFAULT NULL,
-- --  `role` ENUM('ADMIN', 'USER')  CHARACTER SET utf8mb4 DEFAULT NULL,
-- --  `isDelete` int default 0,
-- --  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
-- --  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
-- --  PRIMARY KEY (`username`)
-- -- );

-- -- CREATE TABLE `reports` (
-- --  `id` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
-- --  `name` varchar(100)  CHARACTER SET utf8mb4 DEFAULT NULL,
-- --  `phone` varchar(100)  CHARACTER SET utf8mb4 DEFAULT NULL,
-- --  `createdate` VARCHAR(100)  CHARACTER SET utf8mb4 DEFAULT NULL,
-- --  `birthday` varchar(100)  CHARACTER SET utf8mb4 DEFAULT NULL,
-- --  `isDelete` int default 0,
-- --  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
-- --  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
-- --  PRIMARY KEY (`id`)
-- --  );

-- -- SELECT *
-- -- FROM account;
-- -- UPDATE account
-- --                   SET isDelete = 0
-- --                   WHERE username = 'user4';


-- SELECT *
-- FROM reports;

-- insert into `reports` (`id`, `name`, `phone`, `createdate`, `birthday`)
-- value ('005', 'adđ', '09839476141', '2021-01-05', '1999-08-05');
-- insert into `reports` (`id`, `name`, `phone`, `createdate`, `birthday`)
-- value ('003', 'abc', '098394341531', '2021-04-05', '1994-05-05');
-- insert into `reports` (`id`, `name`, `phone`, `createdate`, `birthday`)
-- value ('004', 'cds', '09839476141', '2021-02-05', '1997-08-05');
-- DELETE 
-- FROM reports 
-- WHERE id = '002' ;
-- UPDATE reports
-- SET isDelete = 0
-- WHERE id = '003';


