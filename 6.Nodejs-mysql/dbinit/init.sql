create database if not exists patientsdb;

use patientsdb;

drop table is exists patients;

create table patients(
    id          bigint unsigned not null auto_increment,
    firstname   varchar(255) default null,
    lastname    varchar(255) default null,
    email       varchar(255) default null,
    phone       varchar(255) default null,
    address     varchar(255) default null,
    diagnosis   varchar(255) default null,
    image_url   varchar(255) default null,
    created_at  timestamp default current_timestamp,
    primary key (id),
    constraint UQ_Patients_Email unique (email) /*set it as unique*/
);

