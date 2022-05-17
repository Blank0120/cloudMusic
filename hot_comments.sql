-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: comments
-- ------------------------------------------------------
-- Server version	8.0.18

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

--
-- Table structure for table `hot_comments`
--

DROP TABLE IF EXISTS `hot_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hot_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `song_id` bigint(20) NOT NULL,
  `name` varchar(12) NOT NULL,
  `time` bigint(20) NOT NULL,
  `agree` int(11) NOT NULL DEFAULT '0',
  `comments` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hot_comments`
--

LOCK TABLES `hot_comments` WRITE;
/*!40000 ALTER TABLE `hot_comments` DISABLE KEYS */;
INSERT INTO `hot_comments` VALUES (1,1876179147,'妮格喜欢喝Pepsi',20210909143741,100,'你们两个是真顶 直接一个专辑 真是太享受了?'),(2,1876179147,'Fedatt',20210909143849,100,'有些时候很羡慕老一辈的爱情 上了年纪他们不会把爱挂在嘴边他们把爱付诸于实际行动 岁月的沉淀时间的洗礼 让彼此的陪伴显得弥足珍贵 愿每个人都能遇到自己的十四亿分之一然后相伴一生 时间不会让你们对彼此厌倦而是会让你们会更加珍惜彼此[爱心]'),(3,1876179147,'我想种两棵柿子树',20210909143933,100,'我不知道未来会怎么样 我也不知道你是否能陪我一起到老 但是谢谢你 能陪我度过这最美好的时光 这最疯狂的青春 故事还在继续 如果说全天下的柔情有十分 你喊我名字的那声八分 那晚凉风秋月一分 其他的一分 我爱你。'),(38,1876436782,'栗子午饭与龟波气功',1631261413825,0,'我不知道未来会怎么样, 但是我知道, 当我写下这条评论的时候, 我写下了这条评论'),(40,1880003236,'20180310304',1632477322269,0,'你好啊!!!!');
/*!40000 ALTER TABLE `hot_comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-17 13:50:05
