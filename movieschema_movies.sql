CREATE DATABASE  IF NOT EXISTS `movieschema` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `movieschema`;
-- MySQL dump 10.13  Distrib 5.6.32, for linux-glibc2.5 (x86_64)
--
-- Host: 127.0.0.1    Database: movieschema
-- ------------------------------------------------------
-- Server version	5.6.32

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
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `score` float DEFAULT NULL,
  `totalScore` float DEFAULT NULL,
  `tweetCount` float DEFAULT NULL,
  `tweetTitle` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (100,'Underworld: Blood Wars',0,0,0,'underworldbloodwars'),(101,'Doctor Strange',0.521468,1.5644,3,'doctorstrange'),(102,'Fantastic Beasts and Where to Find Them',0.25,0,0,'fantasticbeastsandwheretofindthem'),(103,'Arrival',0.224501,2.91852,13,'arrival'),(104,'Inferno',-0.089457,-0.178914,2,'inferno'),(105,'Moana',0.0885434,3.18756,36,'moana'),(106,'Mechanic: Resurrection',0,0,0,'mechanicresurrection'),(107,'Kubo and the Two Strings',0,0,0,'kuboandthetwostrings'),(108,'Sausage Party',0.25,0,0,'sausageparty'),(109,'Hell or High Water',0,0,0,'hellorhighwater'),(110,'Snowden',0,0,0,'snowden'),(111,'Nerve',-0.653749,-10.46,16,'nerve'),(112,'Sully',0,0,0,'sully'),(113,'Allied',0,0,0,'allied'),(114,'Jack Reacher: Never Go Back',0,0,0,'jackreachernevergoback'),(115,'Trolls',0,0,0,'trolls'),(118,'Almost Christmas',0.657956,0.657956,1,'almostchristmas'),(120,'Hacksaw Ridge',0,0,0,'hacksawridge'),(121,'Absolutely Fabulous: The Movie',0,0,0,'absolutelyfabulousthemovie'),(122,'The Conjuring 2',0,0,0,'theconjuring2');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-12-06  3:04:26
