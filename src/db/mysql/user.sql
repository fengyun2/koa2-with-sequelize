DROP TABLE `users`;
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT NOT NULL auto_increment ,
    `user_id` CHAR(10) NOT NULL UNIQUE,
    `name` CHAR(10),
    `nick_name` CHAR(10) NOT NULL,
    `email` CHAR(64),
    `department` VARCHAR(64),
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;