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
		
		CREATE TABLE `cohab_db`.`user` (
  		`userid` INT NOT NULL AUTO_INCREMENT,
  		`username` VARCHAR(45) NULL,
  		`email` VARCHAR(45) NULL,
  		`password` VARCHAR(255) NULL,
  		PRIMARY KEY (`userid`));
		
5>Current api
	http://<ip address>:9999/cohab/register
	sample data:{
		"email":"test@a.com",
		"password":"aaa",
		"username":"qqq"
	}
	http://localhost:9999/cohab/login
	sample data:{
		"email":"test@a.com",
		"password":"aaa"
	}