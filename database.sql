create database waswasDB;
use waswasDB;

create table usuario
(
	idUsuario int auto_increment primary key not null,
    nombreUsuario varchar(20) not null,
    passUsuario varchar(30) not null
);

create table link
(
	idLink int auto_increment primary key not null,
    tituloLink varchar(200) not null,
    urlLink varchar(10000) not null,
    descLink varchar(10000) null,
    fechaLink datetime not null,

    idUsuario int not null,
    foreign key (idUsuario) references usuario(idUsuario)
);

create table tarea
(
	idTarea int auto_increment primary key not null,
    tituloTarea varchar(200) not null,
    fechaRegTarea datetime not null,
    fechaReaTarea datetime not null,
    descTarea varchar(10000) not null,

    idUsuario int not null,
    foreign key (idUsuario) references usuario(idUsuario)
);

create table nota
(
	idNota int auto_increment primary key not null,
    tituloNota varchar(200) not null,
    fechaRegNota datetime not null,
    descNota varchar(10000) not null,

    idUsuario int not null,
    foreign key (idUsuario) references usuario(idUsuario)
);
--Un poco de transact
insert into usuario values (default, 'gporras', '74443520');
SELECT * FROM USUARIO WHERE nombreUsuario = 'gporras';

select DATE(NOW());
SELECT * FROM LINK WHERE idUsuario = 1;
insert into link values(default, 'gugle', 'http://www.google.com', 'description',NOW(),1);
truncate link;
select * from link order by fechaLink desc;
