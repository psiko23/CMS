USE mysql;

DROP DATABASE IF EXISTS registrar;
CREATE DATABASE registrar;

USE registrar;

CREATE TABLE departments (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    department_id INT,

    PRIMARY KEY (id),
    FOREIGN KEY(department_id) REFERENCES departments(id)
);

CREATE TABLE managers (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    over_department INT,
    active BOOLEAN NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (over_department) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    active BOOLEAN NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES managers(id)
);