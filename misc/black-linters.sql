DROP DATABASE IF EXISTS `blacklinters`;

CREATE DATABASE `blacklinters`;

USE `blacklinters`;


-- CLASS TABLE

CREATE TABLE `class` (
	id_class INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(5) NOT NULL UNIQUE,
	alias VARCHAR(30) NOT NULL 
);

-- INSERT CLASS TABLE

INSERT INTO `class` VALUES
	(1,'18-A', 'Turma 18-A'),
	(2,'21-A', 'BlackJacks'),
	(3,'21-B', 'Inimigos do Lint'),
	(4,'18-B', 'Turma 18-B'),
	(5,'10', 'Trybe-X');

-- CREATE MODULE

CREATE TABLE `module` (
	id_module INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(20) UNIQUE NOT NULL
);

-- INSERT MODULE

INSERT INTO `module` VALUES
	(1,'Fundamentos'),
	(2,'Backend'),
	(3,'Frontend'),
	(4,'C da computacao');

-- CREATE STUDENTS

CREATE TABLE `student` (
	id_student INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(40) NOT NULL UNIQUE,
	password VARCHAR(50) NOT NULL,
	id_class INT NOT NULL,
	FOREIGN KEY (id_class) REFERENCES class (id_class)
);

-- INSERT STUDENTS

INSERT INTO `student` VALUES 
	(1,'Jamila Silveira','jamila.silveira@betrybe.com','4a616d696c61',2),
	(2,'Caim Sales','caim.sales@betrybe.com','4361696d2053',1),
	(3,'Mauren Martins','mauren.martins@betrybe.com','4d617572656e',2),
	(4,'Lisuarte Barros','lisuarte.barros@betrybe.com','4c6973756172',3),
	(5,'Vera Silva','vera.silva@betrybe.com','566572612053',3),
	(6,'Eberardo Oliveira','eberardo.oliveira@betrybe.com','456265726172',2),
	(7,'Albano Monteiro','albano.monteiro@betrybe.com','416c62616e6f',1),
	(8,'Susano Nascimento','susano.nascimento@betrybe.com','537573616e6f',2),
	(9,'Gerson Fogaça','gerson.fogaça@betrybe.com','476572736f6e',3),
	(10,'Victor Carvalho','victor.carvalho@betrybe.com','566963746f72',2),
	(11,'Miuke da Mota','miuke.da.mota@betrybe.com','4d69756b6520',3),
	(12,'Durbalino das Neves','durbalino.das.neves@betrybe.com','44757262616c',1),
	(13,'Mayara Cardoso','mayara.cardoso@betrybe.com','4d6179617261',2),
	(14,'Herédia Ramos','herédia.ramos@betrybe.com','486572e96469',1),
	(15,'Emídio Gonçalves','emídio.gonçalves@betrybe.com','456ded64696f',1);

CREATE TABLE `project` (
	id_project INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	description VARCHAR(50),
	requirements TINYINT NOT NULL,
	id_module INT NOT NULL,
	FOREIGN KEY (id_module) REFERENCES module (id_module)
);

-- INSERT INTO PROJECTS

INSERT INTO `project` 
VALUES 
	(1,'docker-to-do-list','Docker ToDo List', 12, 3),
	(2,'all-for-one','All For One', 27, 3),
	(3,'one-for-all','One For All', 11, 3),
	(4,'star-wars','Star Wars Planets Search', 11, 2);

-- CREATE DELIVERY

CREATE TABLE `delivery` (
	id_delivery INT AUTO_INCREMENT PRIMARY KEY,
	id_project INT NOT NULL,
	id_student INT NOT NULL,
	grade DECIMAL(3,2) NOT NULL,
	delivery_date DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (id_project) REFERENCES project (id_project),
	FOREIGN KEY (id_student) REFERENCES student (id_student)
);

-- INSERT DELIVERY

INSERT INTO `delivery` (id_delivery,id_project,id_student,grade )
VALUES 
	(1, 1, 1, 0.3),
	(2, 2, 2, 0.7),
	(4, 1, 3, 1.0),
	(3, 2, 4, 0.9),
	(5, 4, 5, 0.1),
	(6, 3, 6, 0.8),
	(7, 1, 7, 0.9),
	(8, 3, 8, 0.4);  