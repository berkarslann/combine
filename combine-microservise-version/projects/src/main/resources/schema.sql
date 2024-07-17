CREATE TABLE IF NOT EXISTS `project` (
  `project_id` bigint AUTO_INCREMENT PRIMARY KEY,
  `project_name` varchar(255) NOT NULL,
  `project_type` varchar(255) NOT NULL,
  `project_number` varchar(255) NOT NULL,
  `project_creator` varchar(255) NOT NULL,
  `project_leader` varchar(255) DEFAULT NULL,
  `project_duration` varchar(255) DEFAULT NULL,
  `project_description` varchar(255) DEFAULT NULL,
  `project_team_size` int DEFAULT NULL,
  `project_languages` varchar(255) DEFAULT NULL,
  `project_roles` varchar(255) DEFAULT NULL,
  `project_open_roles` varchar(255) DEFAULT NULL,
  `project_members` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` varchar(20) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` varchar(20) DEFAULT NULL
);
CREATE TABLE IF NOT EXISTS `project_member` (
  `member_id` bigint AUTO_INCREMENT PRIMARY KEY,
  `project_id` bigint,
  FOREIGN KEY (`project_id`) REFERENCES `project`(`project_id`)

);
