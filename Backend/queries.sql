CREATE DATABASE anisuffle;
USE anisuffle;

CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS saved_items(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    item_type VARCHAR(10) NOT NULL,
    source VARCHAR(30) NOT NULL, 
    external_id VARCHAR(500) NOT NULL,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(500),
    rating VARCHAR(10),
    status_label VARCHAR(50),
    saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_save (user_id, source, external_id(255)) 
);
SELECT * FROM users;
SELECT * FROM saved_items;
TRUNCATE saved_items;
TRUNCATE users;
ALTER TABLE saved_items
ADD COLUMN genres TEXT,
ADD COLUMN synopsis TEXT,
ADD COLUMN trailer_url VARCHAR(500);
ALTER TABLE users
ADD COLUMN is_verified TINYINT(1) NOT NULL DEFAULT 0,
ADD COLUMN verification_code VARCHAR(6) DEFAULT NULL,
ADD COLUMN verification_expires_at TIMESTAMP NULL DEFAULT NULL;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE saved_items;
TRUNCATE TABLE users;
SET FOREIGN_KEY_CHECKS = 1;
-- DROP DATABASE anisuffle;