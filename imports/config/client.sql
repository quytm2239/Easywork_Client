CREATE DATABASE  IF NOT EXISTS `client` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `client`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 35.201.228.124    Database: yume
-- ------------------------------------------------------
-- Server version	5.7.19

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
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(45) NOT NULL,
  `type` int(3) unsigned NOT NULL COMMENT 'Account type',
  `status` int(3) unsigned NOT NULL DEFAULT '0',
  `language` varchar(10) NOT NULL DEFAULT 'vi-VN',
  `time_zone` varchar(20) NOT NULL DEFAULT 'UTC+7',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `description` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `group`
--

DROP TABLE IF EXISTS `group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group` (
  `id` int(11) unsigned NOT NULL,
  `account_id` int(11) unsigned NOT NULL COMMENT 'người tạo group',
  `department_code` varchar(45) NOT NULL COMMENT 'refer to Department code, group này thuộc phòng ban nào',
  `name` text NOT NULL,
  `description` text,
  `scale` int(11) NOT NULL COMMENT 'số lượng người quy định trong group',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profile` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int(11) unsigned NOT NULL COMMENT 'Tham chiếu đến id trên bảng account',
  `code` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL COMMENT 'Tên',
  `middle_name` varchar(45) NOT NULL COMMENT 'Tên đệm',
  `last_name` varchar(45) NOT NULL COMMENT 'Họđệmm',
  `gender` int(1) unsigned NOT NULL,
  `dof` datetime NOT NULL COMMENT 'ngày sinh',
  `avatar` text,
  `username` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int(11) NOT NULL COMMENT 'tác giả',
  `department_code` varchar(45) NOT NULL COMMENT 'trỏ đến code trong bảng department, ALL là áp dụng cho toàn bộ công ty.',
  `code` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` text NOT NULL COMMENT 'Miêu tả về dự án',
  `start` datetime NOT NULL,
  `estimation_time` varchar(20) NOT NULL DEFAULT 'NO_END' COMMENT 'hoàn thành trong bao nhiêu lâu (1w, 2w, 3w)\nHoặc vô thời hạn là NO_END',
  `end` datetime NOT NULL,
  `budget` double NOT NULL COMMENT 'ngân sách cho toàn bộ dự án',
  `used_budget` double COMMENT 'ngân sách đã chi dự án',
  `status` int(5) NOT NULL DEFAULT '1' COMMENT 'Trạng thái hiện tại: 1 - OPEN, 2 - SUSPENDING, 3 - CLOSE',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(300) NOT NULL COMMENT 'mã để truy cập vào task: project.code + ‘-‘ + (all project’s tasks + 1) -> DAILY-2',
  `creator_id` int(11) unsigned NOT NULL COMMENT 'trỏ đến tác giả là ai',
  `department_code` varchar(45) NOT NULL COMMENT 'task thuộc department nào (department.code)',
  `group_code` varchar(45) NOT NULL COMMENT 'task thuộc project nào (group.code)',
  `project_code` varchar(45) NOT NULL COMMENT 'task thuộc project nào (project.code)',
  `assignee_id` int(11) unsigned NOT NULL COMMENT 'Ai là người được nhận cái task này.',
  `name` varchar(300) NOT NULL,
  `status` int(5) unsigned NOT NULL DEFAULT '1' COMMENT 'Trạng thái hiện tại: 1 - OPEN, 2 - IN PROGRESS, 3 - DONE',
  `solution` int(5) unsigned NOT NULL DEFAULT '1' COMMENT 'Giải pháp khi finish task: 1 - SUCCESS, 2 - FAIL, 3 - NOT_DO',
  `result` text COMMENT 'kết quả cho solution',
  `description` text,
  `estimation_time` varchar(10) NOT NULL COMMENT '1 h, 1 m, 1 w',
  `action_time` varchar(10) DEFAULT NULL COMMENT '1 h, 1 m, 1 w',
  `remain_time` varchar(10) DEFAULT NULL COMMENT '1 h, 1 m, 1 w',
  `due_date` datetime DEFAULT NULL,
  `relate_to` varchar(45) DEFAULT NULL COMMENT 'liên quan đến task nào (task.code)?',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `task_history`
--

DROP TABLE IF EXISTS `task_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task_history` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `task_id` int(10) unsigned NOT NULL,
  `account_id` int(10) unsigned NOT NULL COMMENT 'ai là tác giả?',
  `old_value` json NOT NULL,
  `new_value` json NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `work_log`
--

DROP TABLE IF EXISTS `work_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `work_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `task_id` int(10) unsigned NOT NULL,
  `account_id` int(10) unsigned NOT NULL,
  `work_time` varchar(10) NOT NULL,
  `content` text NOT NULL COMMENT 'Nội dung thực hiện công việc',
  `log_at` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-12 20:00:06
