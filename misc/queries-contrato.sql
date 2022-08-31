
# Lista de todas as pessoas estudantes de uma turma específica;
SELECT * FROM student WHERE id_class = 2;

# Lista de todos os projetos de um módulo;
SELECT * FROM project WHERE id_module = 2;

# Listar a nota de uma pessoa estudante em um projeto específico; 
SELECT s.name as studentName, s.email as email, d.delivery_date as deliveryDate,
    p.name as projectName, p.description as projectDescription, d.grade as grade
    FROM delivery d
    JOIN student s ON s.id_student = d.id_student
    JOIN project p ON p.id_project = d.id_project
    WHERE d.id_student = 3 AND d.id_project = 1;

# Listar a porcentagem de aprovação de uma turma em um projeto específico.
SELECT 
                grade, count(*) as total
            FROM delivery d
            JOIN student s ON s.id_student = d.id_student
            JOIN project p ON p.id_project = d.id_project
            WHERE s.id_class = 2 AND d.id_project = 1
            GROUP BY grade;

# Cadastrar um projeto
INSERT INTO project 
      (name, description, requirements, id_module) VALUES 
      ("talker-manager", "Talker Manager", 12, 3);

# Cadastrar uma pessoa estudantes
INSERT INTO student 
      (name, email, password, id_class) VALUES 
      ("Rafa", "rafael.martins@betrybe.com", "12345abc", 2);

# Lançar nota de uma pessoa
INSERT INTO delivery (id_project, id_student, grade)
    VALUES (1, X, 0.4);