CREATE TABLE IF NOT EXISTS `user` (
    `user_id` bigint AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `surname` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL
);
