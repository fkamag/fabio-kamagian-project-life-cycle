const conn = require('./connection');

const getProjectByModule = (idModule) => {
    return conn.execute("SELECT * FROM project WHERE id_module = ?", [idModule]);
}

const getGradeByClassProject = (idClass, idProject) => {
    return conn.execute(`SELECT 
                grade, count(*) as total
            FROM delivery d
            JOIN student s ON s.id_student = d.id_student
            JOIN project p ON p.id_project = d.id_project
            WHERE s.id_class = ? AND d.id_project = ?
            GROUP BY grade`, [ idClass, idProject ])
}

const insertProject = ({name, description, requirements, id_module}) => conn.execute(
    `INSERT INTO project 
      (name, description, requirements, id_module) VALUES (?, ?, ?, ?)`,
    [name, description, requirements, id_module],
  );

module.exports = {
    getProjectByModule,
    getGradeByClassProject,
    insertProject
}