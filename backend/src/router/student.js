const express = require('express');
const { getStudentGradeByProject, insertGradeByStudent } = require('../db/student.db');
const tokenValidation = require('../middlewares/tokenValidation.middleware');

const router = express.Router();

router.get('/class/:id', async (req, res) => {
    const { id } = req.params;
    const [ students ] = await getStudentByClass(id);
    res.status(200).json(students);;
})

router.get('/:idStudent/project/:idProject', async (req, res) => {
    const { idStudent, idProject } = req.params;
    const [ studentGrade ] = await getStudentGradeByProject({ idStudent, idProject });

    res.status(200).json(studentGrade);
})

router.use(tokenValidation);
router.post('/:idStudent/project/:idProject', async (req, res) => {
    const { idStudent, idProject } = req.params;
    const { grade } = req.body;
    const [ data ] = await insertGradeByStudent({idStudent, idProject, grade});
    res.status(201).json({ message: `Created successfully. id ${data.insertId}`});
})

router.post('/', async (req, res) => {
    const [data] = await inserStudent(req.body);
    res.status(201).json({
        id: data.insertId,
        ...req.body
    });
})

module.exports = router;