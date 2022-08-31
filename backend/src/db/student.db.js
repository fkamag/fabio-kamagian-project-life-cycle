const conn = require('../db/connection');

const getStudentGradeByProject = ({ idStudent, idProject }) =>
    conn.execute(`SELECT s.name as studentName, s.email as email, d.delivery_date as deliveryDate,
                    p.name as projectName, p.description as projectDescription, d.grade as grade
                    FROM delivery d
                    JOIN student s ON s.id_student = d.id_student
                    JOIN project p ON p.id_project = d.id_project
                    WHERE d.id_student = ? AND d.id_project = ?`, [idStudent, idProject])

const insertGradeByStudent = ({ idProject, idStudent, grade }) =>
    conn.execute(`INSERT INTO delivery (id_project, id_student, grade)
                VALUES (?, ?, ?)`, [idProject, idStudent, grade]);

const login = ({ email, password }) =>
    conn.execute(`SELECT * FROM student 
    WHERE email = ? AND password = ?`, [email, password]);

const inserStudent = ({ name, email, password, id_class }) => conn.execute(
    `INSERT INTO student 
          (name, email, password, id_class) VALUES (?, ?, ?, ?)`,
    [name, email, password, id_class],
);

const getStudentByClass = (idClass) => {
    return conn.execute('SELECT * FROM student WHERE id_class = ?', [idClass]);
}

module.exports = {
    getStudentGradeByProject,
    insertGradeByStudent,
    login,
    inserStudent,
    getStudentByClass
}