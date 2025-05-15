CREATE DATABASE pet;

CREATE TABLE pets (
    petID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20),
    especie VARCHAR(25) NOT NULL,
    raça VARCHAR(45),
    idade INT,
    cor VARCHAR(22),
    microchipado TINYINT,
    tutor VARCHAR(100) NOT NULL,
    endereço VARCHAR(255),
    email VARCHAR(100),
    observações TEXT,
    foto VARCHAR(255),
    telefone VARCHAR(40),
    token VARCHAR(1000)
);
