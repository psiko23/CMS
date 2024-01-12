INSERT INTO departments (name)
VALUES  ('Marketing & Sales'),
        ('IT'),
        ('Accounting & Finance'),
        ('Research & Developement'),
        ('Management');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Department Manager', 115000, 5),
        ('Sales Associate', 25000, 1),
        ('Telemarketer', 27000, 1),
        ('Marketing Specialist', 55000, 1),
        ('Sales Representative', 60000, 1),
        ('Product Manager', 70000, 1),
        ('Network Administrator', 70000, 2),
        ('Computer Programmer', 80000, 2),
        ('Tech Squad', 55000, 2),
        ('Financial Analyst', 60000, 3),
        ('Controller', 60000, 3),
        ('Auditor', 80000, 3),
        ('Product Engineer', 100000, 4),
        ('Design Tech', 100000, 4),
        ('Market Research', 75000, 4),
        ('Manufacturing specialist', 90000, 4),
        ('Production team', 65000, 4);

        
INSERT INTO managers (first_name, last_name, role_id, over_department, active)
VALUES  ('John', 'Doe', 1, 1, 1),
        ('Danny', 'Leon', 1, 2, 1),
        ('Maria', 'Felix', 1, 3, 1),
        ('Wyatt', 'Oakley', 1, 4, 1),
        ('Eva', 'Smith', 2, 1, 1),
        ('Liam', 'Johnson', 3, 2, 1),
        ('Olivia', 'White', 4, 3, 1),
        ('Mia', 'Brown', 5, 4, 1),
        ('Ethan', 'Taylor', 6, 1, 1),
        ('Aria', 'Hall', 7, 2, 1),
        ('Leo', 'Clark', 8, 3, 1),
        ('Zoe', 'Perez', 9, 4, 1);


INSERT INTO employees (first_name, last_name, role_id, manager_id, active)
VALUES  ('Jane', 'Doe', 2, 1, 1),
        ('William', 'Johnson', 6, 2, 1),
        ('Sophie', 'Smith', 13, 1, 1),
        ('Jacob', 'Taylor', 8, 4, 1),
        ('Ava', 'Brown', 14, 3, 1),
        ('Ethan', 'Anderson', 4, 4, 1),
        ('Olivia', 'Hill', 10, 2, 1),
        ('Michael', 'White', 7, 1, 1),
        ('Emily', 'Martin', 16, 3, 1),
        ('Daniel', 'Lewis', 3, 4, 1),
        ('Isabella', 'Clark', 11, 2, 1),
        ('Matthew', 'Garcia', 12, 1, 1),
        ('Emma', 'Turner', 15, 3, 1),
        ('Christopher', 'Allen', 5, 4, 1),
        ('Madison', 'Cooper', 9, 2, 1),
        ('Andrew', 'Ward', 2, 1, 1),
        ('Avery', 'Fisher', 17, 3, 1),
        ('Grace', 'Baker', 3, 4, 1),
        ('Logan', 'Evans', 12, 2, 1),
        ('Sophia', 'Harris', 5, 1, 1),
        ('Liam', 'Jackson', 9, 3, 1),
        ('Chloe', 'Adams', 14, 4, 1),
        ('Jackson', 'Turner', 7, 2, 1),
        ('Harper', 'Hall', 8, 1, 1),
        ('Mason', 'Moore', 11, 3, 1),
        ('Ella', 'Perez', 15, 4, 1),
        ('Alexander', 'Harrison', 10, 2, 1),
        ('Aria', 'Lopez', 3, 1, 1),
        ('Carter', 'Martinez', 13, 3, 1),
        ('Scarlett', 'Gomez', 5, 4, 1),
        ('Lucas', 'Ramirez', 4, 2, 1),
        ('Aubrey', 'Ferguson', 6, 1, 1),
        ('Lily', 'Watson', 16, 3, 1),
        ('Elijah', 'Wright', 8, 4, 1),
        ('Zoe', 'Morgan', 9, 2, 1),
        ('Nathan', 'Scott', 11, 1, 1),
        ('Hannah', 'Stewart', 13, 3, 1),
        ('Henry', 'Hill', 7, 4, 1),
        ('Addison', 'Kelly', 4, 2, 1),
        ('Caleb', 'Barnes', 15, 1, 1),
        ('Amelia', 'Harrison', 14, 3, 1),
        ('Gabriel', 'Brooks', 10, 4, 1),
        ('Ariana', 'King', 12, 2, 1),
        ('Leo', 'Russell', 6, 1, 1),
        ('Aurora', 'Adams', 16, 3, 1),
        ('Dylan', 'Foster', 5, 4, 1),
        ('Luna', 'Barnes', 8, 2, 1),
        ('Max', 'Gomez', 7, 1, 1),
        ('Stella', 'Wright', 17, 3, 1),
        ('Alexander', 'Miller', 9, 2, 1),
        ('Sophia', 'Turner', 12, 1, 1),
        ('Benjamin', 'Carter', 7, 4, 1),
        ('Olivia', 'Clark', 14, 3, 1),
        ('Ethan', 'Anderson', 5, 4, 1),
        ('Isabella', 'Ward', 11, 2, 1),
        ('Jackson', 'Lewis', 8, 1, 1),
        ('Ava', 'Martin', 16, 3, 1),
        ('Lucas', 'Hill', 3, 4, 1),
        ('Emma', 'Fisher', 13, 2, 1),
        ('Mia', 'Garcia', 10, 1, 1),
        ('Carter', 'Harris', 15, 3, 1),
        ('Amelia', 'Adams', 4, 4, 1),
        ('Liam', 'Evans', 6, 2, 1),
        ('Charlotte', 'Baker', 2, 1, 1),
        ('Mason', 'Moore', 17, 3, 1),
        ('Harper', 'Perez', 5, 4, 1),
        ('Aiden', 'Turner', 13, 2, 1),
        ('Grace', 'Allen', 6, 1, 1),
        ('Logan', 'Jackson', 10, 3, 1),
        ('Zoe', 'Perez', 7, 4, 1),
        ('Hudson', 'Wright', 8, 2, 1),
        ('Aria', 'Hall', 16, 1, 1),
        ('Eli', 'Ramirez', 9, 3, 1),
        ('Scarlett', 'White', 12, 4, 1),
        ('Leo', 'Smith', 15, 2, 1),
        ('Luna', 'Barnes', 14, 3, 1),
        ('Hazel', 'Gomez', 3, 1, 1),
        ('Caleb', 'Ferguson', 17, 3, 1),
        ('Avery', 'Johnson', 11, 2, 1),
        ('Madison', 'Hill', 5, 4, 1),
        ('Nathan', 'Russell', 6, 2, 1),
        ('Aurora', 'Ward', 16, 1, 1),
        ('Elijah', 'Garcia', 8, 3, 1),
        ('Zoe', 'Turner', 7, 4, 1),
        ('Eva', 'Cooper', 12, 2, 1),
        ('Liam', 'Martinez', 9, 1, 1),
        ('Aria', 'Hill', 13, 3, 1),
        ('Henry', 'Lewis', 4, 4, 1),
        ('Stella', 'Brown', 10, 2, 1),
        ('Ethan', 'Wright', 15, 1, 1),
        ('Ariana', 'Smith', 17, 3, 1),
        ('Dylan', 'Gomez', 14, 4, 1),
        ('Sophie', 'Anderson', 5, 2, 1),
        ('Max', 'Perez', 6, 1, 1),
        ('Aubrey', 'Turner', 11, 3, 1),
        ('Gavin', 'Fisher', 7, 4, 1),
        ('Nora', 'Hill', 8, 2, 1),
        ('Liam', 'Martin', 16, 1, 1),
        ('Ruby', 'Clark', 9, 3, 1),
        ('Owen', 'Ramirez', 13, 4, 1),
        ('Ella', 'Wright', 12, 2, 1);