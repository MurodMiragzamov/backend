CREATE DATABASE klinika;

CREATE TABLE directions(
    direction_id SERIAL PRIMARY KEY,
    direction_name  VARCHAR(32) NOT NULL  UNIQUE,
    direction_doctor VARCHAR(32) NOT NULL
);

CREATE TABLE admins(
    admin_id SERIAL PRIMARY KEY,
    admin_name VARCHAR(32) NOT NULL,
    admin_password VARCHAR(32) NOT NULL
);

CREATE TABLE patients(
    patient_id BIGSERIAL PRIMARY KEY ,
    patient_username VARCHAR(32) NOT NULL UNIQUE,
    patient_age SMALLINT NOT NULL,
    patient_password VARCHAR(32) NOT NULL,
    patient_token TEXT  
);



CREATE TABLE waiting_patients(
    waiting_patient_id BIGSERIAL PRIMARY KEY,
    waiting_patient_username VARCHAR(32) UNIQUE REFERENCES patients(patient_username),
    waiting_patient_firstname VARCHAR(32) NOT NULL,
    waiting_patient_lastname VARCHAR(32) NOT NULL,
    waiting_patient_phone VARCHAR(15) NOT NULL UNIQUE,
    waiting_patient_direction_name VARCHAR(32) NOT NULL REFERENCES directions(direction_name),
    waiting_patient_addtime  TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    waiting_patient_req BOOLEAN DEFAULT false 
);

CREATE TABLE history(
    history_id BIGSERIAL PRIMARY KEY,
    history_username VARCHAR(32) ,
    history_firstname VARCHAR(32),
    history_lastname VARCHAR(32),
    history_phone VARCHAR(15),
    history_direction VARCHAR(32),
    history_addtime TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);


