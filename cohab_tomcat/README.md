1>APIs example

	GROUP:
		POST:http://<ID>/cohab/addGroup
		dataPost:{
		   "userId":12,
		   "groupName":"Hall",
		   "description":"This is for all hall 3 students",
		}
		POST:http://<ID>/cohab/joinGroup
		dataPost:
		{
		   "userId":15,
		   "groupId":8
		}
		GET:http://<ID>/cohab/getGroupsByUser?userId=15
		response:
		{
			"groups": [
				{
					"description": "This is for all NTU EEE students",
					"id": 1,
					"groupname": "EEE"
				},
				{
					"description": "This is for all hall 3 students",
					"id": 8,
					"groupname": "Hall"
				}
			]
		}
	CHORES:
		GET:http://<ID>/cohab/getChores?groupId=1
		response:
		{
			"chores": [
				{
					"currentUser": 15,
					"repeatType": "Daily",
					"icon": "img base64data",
					"nextUser": 16,
					"choreid": 1,
					"title": "Wash the dishes"
					"dueOn": "2021-10-11"
				},
				{
					"currentUser": 18,
					"repeatType": "Weekly",
					"icon": "img base64data",
					"nextUser": 16,
					"choreid": 2,
					"title": "Mop the floor"
					"dueOn": "2021-10-11"
				}
			]
		}
		POST:http://<ID>/cohab/addChore
		dataPost:{
		   "userId":12,
		   "groupid":"8",
		   "title":"Mop the floor",
		   "seqs":[{
				"seqNo":1,
				"userId":1,
		   },{
				"seqNo":2,
				"userId":2,
		   }],
		   "type":"Weekly"
		   "date":"2021-10-11"
		}
		POST:http://<ID>/cohab/updateChore
		dataPost:{
		   "choreid":1,
		   "userId":12,
		   "groupid":"8",
		   "title":"Mop the floor",
		   "seqs":[{
				"seqNo":1,
				"userId":1,
		   },{
				"seqNo":2,
				"userId":3,
		   }],
		   "type":"Weekly"
		   "date":"2021-10-11"
		}
		GET:http://<ID>/cohab/deleteChore?choreid=1
		response:
		{
			"status":"done"
		}
		GET:http://<ID>/cohab/getChoreTypeIcon
		response:
		{
			"icons":[
				{"icon": "img base64data"},
				{"icon": "img base64data"},
				{"icon": "img base64data"},
				{"icon": "img base64data"},
				{"icon": "img base64data"},
				{"icon": "img base64data"}
			]
		}
		GET:http://<ID>/cohab/getGroupMembers?groupId=1
		response:
		{
			"members":[
				{
					"userid": 15,
					"profileimg": "img base64data"
				},
				{
					"userid": 16,
					"profileimg": "img base64data"
				},
				{
					"userid": 17,
					"profileimg": "img base64data"
				}
			]
		}
		
2>Database (tables&cols)
	
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
