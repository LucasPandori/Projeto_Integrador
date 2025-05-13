CREATE DATABASE pet;

CREATE TABLE pets (
    petID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20),
    especie VARCHAR(25) NOT NULL,
    raça VARCHAR(45),
    idade INT,
    cor VARCHAR(22),
    microchipado BOOLEAN,
    tutor VARCHAR(100) NOT NULL,
    endereço VARCHAR(255),
    email VARCHAR(100),
    observações TEXT,
    foto LONGBLOB,
    token VARCHAR(1000)
);

CREATE TABLE telefone (
  	telefone_id INT PRIMARY KEY AUTO_INCREMENT,
    pet_ID INT NOT NULL,
    telefone VARCHAR(40),
    CONSTRAINT chave_estrangeira FOREIGN KEY(pet_ID) REFERENCES pets(petID)
);
