-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: blacklinters
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP DATABASE IF EXISTS `blacklinters`;

CREATE DATABASE `blacklinters`;

USE `blacklinters`;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class` (
  `id_class` int NOT NULL AUTO_INCREMENT,
  `name` varchar(5) NOT NULL,
  `alias` varchar(30) NOT NULL,
  PRIMARY KEY (`id_class`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (1,'18-A','Turma 18-A'),(2,'21-A','BlackJacks'),(3,'21-B','Inimigos do Lint'),(4,'18-B','Turma 18-B'),(5,'10','Trybe-X');
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery` (
  `id_delivery` int NOT NULL AUTO_INCREMENT,
  `id_project` int NOT NULL,
  `id_student` int NOT NULL,
  `grade` decimal(3,2) NOT NULL,
  `delivery_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_delivery`),
  KEY `id_project` (`id_project`),
  KEY `id_student` (`id_student`),
  CONSTRAINT `delivery_ibfk_1` FOREIGN KEY (`id_project`) REFERENCES `project` (`id_project`),
  CONSTRAINT `delivery_ibfk_2` FOREIGN KEY (`id_student`) REFERENCES `student` (`id_student`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery`
--

LOCK TABLES `delivery` WRITE;
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
INSERT INTO `delivery` VALUES (1,1,1,0.60,'2022-08-30 19:00:16'),(2,2,2,0.70,'2022-08-30 19:00:16'),(3,2,4,0.90,'2022-08-30 19:00:16'),(4,1,3,1.00,'2022-08-30 19:00:16'),(5,4,5,0.10,'2022-08-30 19:00:16'),(6,3,6,0.80,'2022-08-30 19:00:16'),(7,1,7,0.90,'2022-08-30 19:00:16'),(8,3,8,0.40,'2022-08-30 19:00:16'),(9,1,3,0.40,'2022-08-29 20:28:10'),(14,1,1,0.40,'2022-08-29 20:28:10'),(15,1,1,0.20,'2022-08-28 20:28:10'),(16,1,3,0.80,'2022-08-29 20:28:10'),(17,1,3,0.60,'2022-08-28 20:28:10');
/*!40000 ALTER TABLE `delivery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `module`
--

DROP TABLE IF EXISTS `module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `module` (
  `id_module` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id_module`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `module`
--

LOCK TABLES `module` WRITE;
/*!40000 ALTER TABLE `module` DISABLE KEYS */;
INSERT INTO `module` VALUES (2,'Backend'),(4,'C da computacao'),(3,'Frontend'),(1,'Fundamentos');
/*!40000 ALTER TABLE `module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `id_project` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  `requirements` tinyint NOT NULL,
  `id_module` int NOT NULL,
  PRIMARY KEY (`id_project`),
  KEY `id_module` (`id_module`),
  CONSTRAINT `project_ibfk_1` FOREIGN KEY (`id_module`) REFERENCES `module` (`id_module`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'docker-to-do-list','Docker ToDo List',12,3),(2,'all-for-one','All For One',27,3),(3,'one-for-all','One For All',11,3),(4,'star-wars','Star Wars Planets Search',11,2);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id_student` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(50) NOT NULL,
  `id_class` int NOT NULL,
  PRIMARY KEY (`id_student`),
  UNIQUE KEY `email` (`email`),
  KEY `id_class` (`id_class`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`id_class`) REFERENCES `class` (`id_class`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'Jamila Silveira','jamila.silveira@betrybe.com','4a616d696c61',2),(2,'Caim Sales','caim.sales@betrybe.com','4361696d2053',1),(3,'Mauren Martins','mauren.martins@betrybe.com','4d617572656e',2),(4,'Lisuarte Barros','lisuarte.barros@betrybe.com','4c6973756172',3),(5,'Vera Silva','vera.silva@betrybe.com','566572612053',3),(6,'Eberardo Oliveira','eberardo.oliveira@betrybe.com','456265726172',2),(7,'Albano Monteiro','albano.monteiro@betrybe.com','416c62616e6f',1),(8,'Susano Nascimento','susano.nascimento@betrybe.com','537573616e6f',2),(9,'Gerson Fogaça','gerson.fogaça@betrybe.com','476572736f6e',3),(10,'Victor Carvalho','victor.carvalho@betrybe.com','566963746f72',2),(11,'Miuke da Mota','miuke.da.mota@betrybe.com','4d69756b6520',3),(12,'Durbalino das Neves','durbalino.das.neves@betrybe.com','44757262616c',1),(13,'Mayara Cardoso','mayara.cardoso@betrybe.com','4d6179617261',2),(14,'Herédia Ramos','herédia.ramos@betrybe.com','486572e96469',1),(15,'Emídio Gonçalves','emídio.gonçalves@betrybe.com','456ded64696f',1);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-01 21:11:36
