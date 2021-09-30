1>Download and setup tomcat and mysql
  If you have installed tomcat and mysql can skip this part
	>Follow the Step3.2 to 3.7 instructions (https://www3.ntu.edu.sg/home/ehchua/programming/sql/MySQL_HowTo.html)
	>Follow the Step2.1 to 2.4 instructions (https://www3.ntu.edu.sg/home/ehchua/programming/howto/Tomcat_HowTo.html)

2>Copy the folder cohab (cohab_tomcat/cohab) to C:\myWebProject\tomcat\webapps

3>Download mysql-connector-java-8.0.26 and put it in to C:\myWebProject\tomcat\lib

4>Create database and table in mysql
	cmd:
		cd \myWebProject\mysql\bin
		mysql -u myuser -p

		create database if not exists cohab_db;
		
		CREATE TABLE `announcement` (
		  `announcementid` int NOT NULL AUTO_INCREMENT,
		  `userid` int NOT NULL,
		  `groupid` int NOT NULL,
		  `description` varchar(255) DEFAULT NULL,
		  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		  PRIMARY KEY (`announcementid`)
		);

		CREATE TABLE `bill` (
		  `billid` int NOT NULL AUTO_INCREMENT,
		  `userid` int NOT NULL,
		  `type` varchar(45) DEFAULT NULL,
		  `groupid` int DEFAULT NULL,
		  `totalamt` decimal(19,4) DEFAULT '0.0000',
		  `portion` int DEFAULT '1',
		  `description` varchar(255) DEFAULT NULL,
		  PRIMARY KEY (`billid`)
		);

		CREATE TABLE `billstatus` (
		  `id` int NOT NULL AUTO_INCREMENT,
		  `userid` int NOT NULL,
		  `billid` int NOT NULL,
		  `status` tinyint(1) DEFAULT '0',
		  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		  PRIMARY KEY (`id`)
		);

		CREATE TABLE `chore` (
		  `choreid` int NOT NULL AUTO_INCREMENT,
		  `groupid` int NOT NULL,
		  `title` varchar(45) DEFAULT NULL,
		  `choretype` int NOT NULL,
		  `repeatType` varchar(45) DEFAULT NULL,
		  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		  PRIMARY KEY (`choreid`)
		);

		CREATE TABLE `choreseq` (
		  `id` int NOT NULL AUTO_INCREMENT,
		  `choreid` int NOT NULL,
		  `userid` int NOT NULL,
		  `cycleDays` int NOT NULL,
		  `seqNo` int NOT NULL,
		  PRIMARY KEY (`id`)
		);

		CREATE TABLE `choretype` (
		  `id` int NOT NULL AUTO_INCREMENT,
		  `type` varchar(50) NOT NULL,
		  `icon` blob NOT NULL,
		  PRIMARY KEY (`id`)
		);

		CREATE TABLE `event` (
		  `eventid` int NOT NULL AUTO_INCREMENT,
		  `hostid` int NOT NULL,
		  `groupid` int NOT NULL,
		  `title` varchar(45) DEFAULT NULL,
		  `description` varchar(255) DEFAULT NULL,
		  `dateTime` datetime DEFAULT NULL,
		  `location` varchar(100) DEFAULT NULL,
		  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		  PRIMARY KEY (`eventid`)
		);

		CREATE TABLE `eventresponce` (
		  `id` int NOT NULL AUTO_INCREMENT,
		  `userid` int NOT NULL,
		  `eventid` int NOT NULL,
		  `status` varchar(45) DEFAULT NULL,
		  PRIMARY KEY (`id`)
		);

		CREATE TABLE `group` (
		  `id` int NOT NULL AUTO_INCREMENT,
		  `groupname` varchar(255) NOT NULL,
		  `type` varchar(15) DEFAULT NULL,
		  `description` varchar(255) NOT NULL,
		  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		  PRIMARY KEY (`id`)
		);

		CREATE TABLE `task` (
		  `taskid` int NOT NULL AUTO_INCREMENT,
		  `groupid` int NOT NULL,
		  `title` varchar(45) DEFAULT NULL,
		  `description` varchar(255) DEFAULT NULL,
		  `deadline` datetime DEFAULT NULL,
		  `status` varchar(45) DEFAULT NULL,
		  `type` varchar(45) DEFAULT NULL,
		  `hostid` int NOT NULL,
		  `executorid` int DEFAULT NULL,
		  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		  PRIMARY KEY (`taskid`)
		);

		CREATE TABLE `user` (
		  `id` int NOT NULL AUTO_INCREMENT,
		  `profileimage` blob,
		  `username` varchar(45) DEFAULT NULL,
		  `fullname` varchar(15) DEFAULT NULL,
		  `email` varchar(45) DEFAULT NULL,
		  `password` varchar(255) DEFAULT NULL,
		  `balance` decimal(19,4) DEFAULT '0.0000',
		  `gender` char(1) DEFAULT NULL,
		  `status` varchar(25) DEFAULT 'in',
		  PRIMARY KEY (`id`)
		);

		CREATE TABLE `usergroup` (
		  `id` int NOT NULL AUTO_INCREMENT,
		  `userid` int NOT NULL,
		  `groupid` int NOT NULL,
		  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		  PRIMARY KEY (`id`)
		);

		
5>call api examples
	http://<ip address>:9999/cohab/register
	sample data:{
		"email":"test@a.com",
		"password":"aaa",
		"username":"qqq"
	}
	http://<ip address>:9999/cohab/login
	sample data:{
		"email":"test@a.com",
		"password":"aaa"
	}
