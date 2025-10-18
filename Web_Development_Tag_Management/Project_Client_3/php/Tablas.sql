/* CATEGORIAS */

CREATE TABLE IF NOT EXISTS categorias(
id int auto_increment not null,
nom varchar(30),
imagen1 varchar(60) not null,
primary key(id) 
);

INSERT INTO categorias(nom) VALUES
('Sillas de Corte', 'img/lilia.jpg'),
('Sillas Infantiles', 'img/sillasI.jpg'),
('Sillas Auxiliares', 'img/sillasA.jpg'),
('Sillas para Peluqueros', 'img/peluqueros.jpg'),
('Sillas Reclinables', 'img/sillasR.jpg'),
('Lavacabezas', 'img/lava.jpg'),
('Estaciones', 'img/estaciones.jpg'),
('Climazones', 'img/climazones.jpg'),
('Robots', 'img/robots.jpg'),
('Manicure', 'img/manicure.jpg'),
('Pedicure', 'img/pedicure.jpg'),
('Facial', 'img/facial.jpg'),
('Spa', 'img/spa.jpg'),
('Recepciones', 'img/recepcion.jpg'),
('Salas de Espera', 'img/salas.jpg'),
('Accesorios y Refacciones', 'img/accesorios.jpg');



/* PRODUCTOS */

CREATE TABLE IF NOT EXISTS productos(
codigo varchar(8) not null unique,
nombre varchar(50) not null,
descripcion varchar(400),
precio decimal(10,2),
idcateg int not null, 
imagen1 varchar(60) not null,
imagen2 varchar(60),
imagen3 varchar(60),
imagen4 varchar(60),
imagen5 varchar(60),
PRIMARY KEY(codigo),
FOREIGN KEY(idcateg) REFERENCES categorias(id)
);


LOAD DATA INFILE 'C:/Users/Ulises/Documents/Insertar.csv' INTO TABLE 'productos'
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'