-- MySQL dump 10.13  Distrib 5.7.23, for osx10.14 (x86_64)
--
-- Host: mysql-planner-4440.nodechef.com    Database: planner
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tasks` (
  `id` varchar(36) NOT NULL,
  `created` timestamp NULL DEFAULT NULL,
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `userid` varchar(36) NOT NULL,
  `title` varchar(256) NOT NULL,
  `time_minutes` int(11) DEFAULT NULL,
  `deadline` timestamp NULL DEFAULT NULL,
  `result_positive` float DEFAULT NULL,
  `result_negative` float DEFAULT NULL,
  `filter_days` varchar(50) NOT NULL DEFAULT 'true,true,true,true,true,true,true',
  `freq_minutes` int(11) DEFAULT NULL,
  `starting` timestamp NULL DEFAULT NULL,
  `last_done` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES ('95a19d29-d9a5-4ad4-a2fc-c854ef6fc80d','2018-10-29 21:17:30','2018-10-29 21:17:30',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Grandmother Story',120,'2018-10-31 00:00:00',5,3,'true,true,true,true,true,true,true',NULL,NULL,'2018-10-31 17:41:24'),('094e6b41-80f4-4405-9991-00a1b73bd14d','2018-10-31 17:46:07','2018-10-31 17:46:07',NULL,'4336dcfe-dd33-11e8-8d62-0cc47a84137c','Reduce SBI EMI',120,'2018-11-11 00:00:00',5,3,'false,false,false,false,false,false,true',NULL,NULL,NULL),('3c3d6337-dd34-4667-9c91-309102025782','2018-10-31 17:47:25','2018-10-31 17:47:25',NULL,'4336dcfe-dd33-11e8-8d62-0cc47a84137c','Create FDs',30,'2018-11-11 00:00:00',4,2,'true,true,true,true,true,true,true',NULL,NULL,NULL),('8cc375fb-ff5b-49bb-b55f-76420670332c','2018-10-31 17:50:09','2018-10-31 17:50:09',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Diwali Shopping - Diyas',45,'2018-11-04 00:00:00',3,5,'true,true,true,true,true,true,true',NULL,NULL,'2018-11-01 11:25:14'),('f8e31160-b59d-4021-aa52-e1a805521361','2018-10-31 17:52:04','2018-10-31 17:52:04',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Kittens for adoption',30,'2018-11-04 00:00:00',1,3,'true,true,true,true,true,true,true',NULL,NULL,'2018-11-02 19:39:25'),('47225599-7be4-42af-bfc2-24fa7ca61bcf','2018-10-31 17:56:03','2018-10-31 17:56:03',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Hire house cleaners',30,'2018-11-04 00:00:00',4,4,'true,true,true,true,true,true,true',NULL,NULL,'2018-11-02 14:59:08'),('51569d87-496f-426c-a9fc-7d6fe82093cd','2018-10-31 17:57:14','2018-10-31 17:57:14',NULL,'4336dcfe-dd33-11e8-8d62-0cc47a84137c','Pay Advance Tax',30,'2018-11-11 00:00:00',1,5,'true,true,true,true,true,true,true',NULL,NULL,NULL),('3d9da654-46f6-4f3c-85d1-3713cf495f0c','2018-10-31 18:05:20','2018-10-31 18:05:20',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Japan shopping - bag',60,'2018-11-01 00:00:00',5,3,'true,true,true,true,true,true,true',NULL,NULL,'2018-11-03 13:43:32'),('c7a5841a-38d8-4fa6-a760-c10ff4473dab','2018-10-31 18:08:32','2018-10-31 18:08:32',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Blood test',120,'2018-11-02 00:00:00',3,5,'true,true,true,true,true,true,true',NULL,NULL,'2018-11-01 11:27:28'),('fa3fb2ac-a5f1-4cd8-94b6-6148f76cea89','2018-11-01 16:00:42','2018-11-01 16:00:42',NULL,'4336dcfe-dd33-11e8-8d62-0cc47a84137c','Planner Bugfix - Read done tasks for day\'s time allocation',60,'2018-11-04 00:00:00',4,4,'true,true,true,true,true,true,true',NULL,NULL,NULL),('fa73175f-dcf6-470f-a79d-67c282de6d97','2018-11-02 03:29:34','2018-11-02 03:29:34',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Gas repair',30,'2018-11-04 00:00:00',2,5,'true,false,false,false,false,false,true',NULL,NULL,'2018-12-15 06:50:30'),('834e6721-8202-43be-acfc-2b31ee1c168c','2018-11-03 17:47:00','2018-11-03 17:47:00',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Call Chhotu',15,'2018-11-05 00:00:00',5,3,'true,true,true,true,true,true,true',NULL,NULL,'2018-11-05 17:39:28'),('27125069-5f43-45e1-9527-1fd850419fa2','2018-12-15 09:38:56','2018-12-15 09:38:56',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Vitthal photo prints',60,'2018-12-19 00:00:00',4,2,'true,true,true,true,true,true,true',NULL,NULL,'2018-12-17 10:40:11'),('c3092b11-6288-407b-a1cd-7b706064ce8f','2018-12-15 09:39:51','2018-12-15 09:39:51',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Cat vaccination',90,'2018-12-19 00:00:00',4,4,'true,true,true,true,true,true,true',NULL,NULL,'2019-01-23 05:05:03'),('e04d43e4-cca1-4bd9-bb28-093e3b65b045','2018-12-15 09:51:19','2018-12-15 09:51:19',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','My Dream Garden',60,'2018-12-18 00:00:00',5,1,'true,true,true,true,true,true,true',NULL,NULL,'2018-12-17 10:40:05'),('29c3329c-3405-4c0c-a79d-72c96fd48f62','2018-12-15 09:54:19','2018-12-15 09:54:19',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Parlour and haircut',150,'2018-12-17 00:00:00',4,4,'true,true,true,true,true,true,true',NULL,NULL,'2018-12-16 19:18:29'),('73a78333-a3e8-4bf4-9090-f354249250dd','2018-12-15 09:55:29','2018-12-15 09:55:29',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Hair colour',60,'2018-12-18 00:00:00',3,2,'true,true,true,true,true,true,true',NULL,NULL,'2019-01-23 05:04:58'),('5973c9e5-04ab-44a9-a836-534b718ff375','2018-12-15 09:56:12','2018-12-15 09:56:12',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Arrange cupboard',60,'2018-12-18 00:00:00',1,4,'true,true,true,true,true,true,true',NULL,NULL,'2019-01-23 05:04:55'),('87bd541b-8392-41e2-9021-1161eb3c6c1e','2018-12-15 09:56:50','2018-12-15 09:56:50',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Pack for Thailand',60,'2018-12-18 00:00:00',4,5,'true,true,true,true,true,true,true',NULL,NULL,'2019-01-23 05:04:49'),('1352060d-a6d8-4d03-9aab-2e32b114de88','2018-12-15 09:59:46','2018-12-15 09:59:46',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Clean kitchen',180,'2019-01-13 00:00:00',4,1,'true,true,true,true,true,true,true',NULL,NULL,'2018-12-16 19:18:16'),('923901cb-4df3-4e0b-ab45-afe11e10fb67','2018-12-15 12:29:14','2018-12-15 12:29:14',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Order kajal netmeds',15,'2018-12-16 00:00:00',4,5,'true,true,true,true,true,true,true',NULL,NULL,'2019-01-23 05:04:41'),('cebf6ef3-5b02-42ab-ac58-c99886abbaab','2018-12-29 07:26:48','2018-12-29 07:26:48',NULL,'4336dcfe-dd33-11e8-8d62-0cc47a84137c','Vaccinate Moe and Eenie',120,'2018-12-30 00:00:00',3,5,'true,true,true,true,true,true,true',NULL,NULL,NULL),('4de8ac29-997d-4319-a46f-b91497404d01','2018-12-29 07:27:16','2018-12-29 07:27:16',NULL,'4336dcfe-dd33-11e8-8d62-0cc47a84137c','Splay Moe',120,'2019-01-11 00:00:00',2,5,'true,true,true,true,true,true,true',NULL,NULL,NULL),('da7bf198-3a5b-4daa-af2f-6d5a3366c572','2018-12-29 07:27:43','2018-12-29 07:27:43',NULL,'4336dcfe-dd33-11e8-8d62-0cc47a84137c','Request Chequebook',15,'2018-12-31 00:00:00',3,5,'true,true,true,true,true,true,true',NULL,NULL,NULL),('2bead6d9-d87b-4f85-9d7f-a93fcc31366a','2018-12-29 07:28:33','2018-12-29 07:28:33',NULL,'4336dcfe-dd33-11e8-8d62-0cc47a84137c','Fix posters',120,'2018-12-30 00:00:00',5,3,'true,true,true,true,true,true,true',NULL,NULL,NULL),('dc2080bc-b37f-47fa-beab-0a7ab6508aeb','2018-12-29 07:29:07','2018-12-29 07:29:07',NULL,'4336dcfe-dd33-11e8-8d62-0cc47a84137c','Fix cycle',60,'2019-01-03 00:00:00',4,4,'true,true,true,true,true,true,true',NULL,NULL,NULL),('01273d56-b3fb-4f2b-91a9-0ee5fa0584b8','2018-12-29 07:29:36','2018-12-29 07:29:36',NULL,'4336dcfe-dd33-11e8-8d62-0cc47a84137c','Buy cushion covers for sofa',60,'2019-01-03 00:00:00',4,2,'true,true,true,true,true,true,true',NULL,NULL,NULL),('17105efd-a173-441f-bca2-968e857cf9b3','2018-12-29 07:30:04','2018-12-29 07:30:04',NULL,'4336dcfe-dd33-11e8-8d62-0cc47a84137c','Buy TV cabinet',30,'2019-01-03 00:00:00',4,2,'true,true,true,true,true,true,true',NULL,NULL,NULL),('53a5f346-7786-41d1-a13e-dd96461da55a','2019-02-02 18:10:36','2019-02-02 18:10:36',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Sangeet Shegaon',30,NULL,2,5,'true,true,true,true,true,true,true',4320,'2019-02-03 00:00:00',NULL),('e35a263b-da93-461d-a0e4-a22f53830bc8','2019-02-02 18:11:29','2019-02-02 18:11:29',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Sangeet Dhamangaon',30,NULL,2,5,'true,true,true,true,true,true,true',7200,'2019-02-06 00:00:00',NULL),('71426908-7ed8-4c0c-902d-1f54d0979fdc','2019-02-02 18:12:27','2019-02-02 18:12:27',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Exercise 1',25,NULL,5,5,'true,true,true,true,true,true,true',1440,'2019-02-03 00:00:00',NULL),('6bdee6ea-16a1-4c42-8742-1655b3fedd5d','2019-02-02 18:12:58','2019-02-02 18:12:58',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Exercise 2',25,NULL,5,5,'true,true,true,true,true,true,true',1440,'2019-02-03 00:00:00',NULL),('9c3e2b63-bac4-435b-af2a-df36cfbb46da','2019-02-02 18:31:03','2019-02-02 18:31:03',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Timetable',60,'2019-02-04 00:00:00',5,4,'true,true,true,true,true,true,true',NULL,NULL,NULL),('223bae6b-7be2-4080-85e0-8c362e7af3bb','2019-02-02 18:31:36','2019-02-02 18:31:36',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Sangeet Doc',20,'2019-02-03 00:00:00',2,5,'true,true,true,true,true,true,true',NULL,NULL,NULL),('e8f77cbd-f4f7-4850-8498-31fa2cc55d87','2019-02-02 18:32:00','2019-02-02 18:32:00',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Kalyan Deck',60,'2019-02-03 00:00:00',5,5,'true,true,true,true,true,true,true',NULL,NULL,NULL),('263cc544-25ce-4448-8ad6-5e977029e24d','2019-02-02 18:32:45','2019-02-02 18:32:45',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Order jewellery for Chachi and me',60,'2019-02-03 00:00:00',5,4,'true,true,true,true,true,true,true',NULL,NULL,NULL),('35ef1cbf-0d29-47f5-a301-2f51b4d2d2fd','2019-02-02 18:33:59','2019-02-02 18:33:59',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Order BB cream and plain black tee',30,'2019-02-04 00:00:00',2,3,'true,true,true,true,true,true,true',NULL,NULL,NULL),('5f4674e1-7ee2-4246-b349-6e1da5d49b63','2019-02-02 18:34:50','2019-02-02 18:34:50',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','SBI EMI ',120,'2019-02-09 00:00:00',1,5,'false,false,false,false,false,true,true',NULL,NULL,'2019-02-08 03:16:25'),('03772b8d-6498-4699-bce9-a43ccccad7e5','2019-02-02 18:35:57','2019-02-02 18:35:57',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Bill reimbursement',30,'2019-02-10 00:00:00',5,3,'true,true,true,true,true,true,true',NULL,NULL,NULL),('5378722a-1877-4b3e-a4cc-68254862d28b','2019-02-02 18:36:47','2019-02-02 18:36:47',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Sell Kartik\'s stuff',60,'2019-02-10 00:00:00',5,3,'true,true,true,true,true,true,true',NULL,NULL,NULL),('6b68b803-4487-45e6-aa09-a3fb7aa56fcd','2019-02-02 18:37:29','2019-02-02 18:37:29',NULL,'24757ab9-dbba-11e8-8d62-0cc47a84137c','Port to airtel',60,'2019-02-10 00:00:00',5,5,'true,false,false,false,false,true,true',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `created` timestamp NULL DEFAULT NULL,
  `updated` timestamp NULL DEFAULT NULL,
  `deleted` timestamp NULL DEFAULT NULL,
  `username` varchar(32) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `hours` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('24757ab9-dbba-11e8-8d62-0cc47a84137c','2018-10-29 20:35:15','2019-02-02 18:41:30',NULL,'radha','fuji','1.5,1.5,1.5,1.5,1.5,5,5'),('4336dcfe-dd33-11e8-8d62-0cc47a84137c','2018-10-31 17:34:47','2018-10-31 17:34:47',NULL,'kartik','bushido','2,2,2,2,2,5,5');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-10 15:31:54
