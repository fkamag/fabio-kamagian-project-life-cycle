const express = require('express');
const studentDb = require('../db/student.db');
const tokenValidation = require('../middlewares/tokenValidation.middleware');

const router = express.Router();

// Lista todos os estudantes por Id de turma
router.get('/class/:id', async (req, res) => {
	const { id } = req.params;
	const [students] = await studentDb.getStudentByClass(id);
	res.status(200).json(students);;
});

// Lista a nota de um projeto de uma pessoa especifica
router.get('/:idStudent/project/:idProject', async (req, res) => {
	const { idStudent, idProject } = req.params;
	const [studentGrade] = await studentDb.getStudentGradeByProject({ idStudent, idProject });

	res.status(200).json(studentGrade);
});

// depois do middleware tokenValidation, todas as rotas precisam de autorização
router.use(tokenValidation);


// Registra a nota de um projeto de uma pessoa especifica
router.post('/:idStudent/project/:idProject', async (req, res) => {
	const { idStudent, idProject } = req.params;
	const { grade } = req.body;
	const [data] = await studentDb.insertGradeByStudent({ idStudent, idProject, grade });
	res.status(201).json({ message: `Created successfully. id ${data.insertId}` });
});

// Cadastra uma pessoa estudante
router.post('/', async (req, res) => {
	const [data] = await studentDb.inserStudent(req.body);
	res.status(201).json({
		id: data.insertId,
		...req.body
	});
});

module.exports = router;