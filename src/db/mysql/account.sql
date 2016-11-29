DROP TABLE `accounts`
CREATE TABLE IF NOT EXISTS `accounts` (
    `id` INT NOT NULL auto_increment ,
    `email` CHAR(64) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME,
    `user_id` INT,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;