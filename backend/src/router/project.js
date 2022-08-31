const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation.middleware');
const projectDb = require('../db/project.db');

const router = express.Router();

// Lista os projetos de um módulo
router.get('/module/:id', async (req, res) => {
	const { id } = req.params;
	const [projects] = await projectDb.getProjectByModule(id);
	res.status(200).json(projects);;
})

// Listar a porcentagem de aprovação de uma turma em um projeto específico.
router.get('/:idProject/class/:idClass', async (req, res) => {
	const { idProject, idClass } = req.params;
	const [data] = await projectDb.getGradeByClassProject(idClass, idProject);
	const totalStudent = data.reduce((previous, current) => previous = previous + current.total, 0);
	const studentApproved = data.filter(student => student.grade > 0.8).length;
	const response = {
		tax: studentApproved / totalStudent
	}
	res.status(200).json(response);;
})

// depois do middleware tokenValidation, todas as rotas precisam de autorização
router.use(tokenValidation);

// Cria um novo projeto
router.post('/', async (req, res) => {
	const [data] = await projectDb.insertProject(req.body);
	res.status(201).json({
		id: data.insertId,
		...req.body
	});
})

module.exports = router;