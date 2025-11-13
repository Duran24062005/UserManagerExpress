CREATE DATABASE IF NOT EXISTS my_database;

USE my_database;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES;

INSERT INTO users (name, email, age) VALUES ('Alice', 'alice@name.com', 30);
INSERT INTO users (name, email, age) VALUES ('Bob', 'bob@name.com', 25);
INSERT INTO users (name, email, age) VALUES
('Charlie', 'charlie@name.com', 35),
('Ana', 'ana@example.com', 28),
('Luis', 'luis@example.com', 30),
('Maria', 'maria@example.com', 22),
('Carlos', 'carlos@example.com', 40),
('Sofia', 'sofia@example.com', 19),
('Jorge', 'jorge@example.com', 33),
('Lucia', 'lucia@example.com', 25),
('Pedro', 'pedro@example.com', 27),
('Valentina', 'valentina@example.com', 24),
('Andres', 'andres@example.com', 31),
('Camila', 'camila@example.com', 29),
('Sebastian', 'sebas@example.com', 26),
('Paula', 'paula@example.com', 34),
('Mateo', 'mateo@example.com', 23),
('Diana', 'diana@example.com', 36),
('Fernando', 'fernando@example.com', 38),
('Isabela', 'isabela@example.com', 21),
('Ricardo', 'ricardo@example.com', 32),
('Alejandra', 'alejandra@example.com', 20);

SELECT * FROM users;