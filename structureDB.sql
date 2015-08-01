-- Base de datos de prueba
-- MySQL Connection: testdb
-- Schema: test

DROP TABLE IF EXISTS `USERS_APP`;

CREATE TABLE `USERS_APP` (
    `user_id` DECIMAL(5,0) NOT NULL,
    `firstname` VARCHAR(20) DEFAULT NULL,
    `lastname` VARCHAR(20) DEFAULT NULL,
    PRIMARY KEY (`user_id`)
)  ENGINE=INNODB DEFAULT CHARSET=LATIN1;
