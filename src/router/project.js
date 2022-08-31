const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation.middleware');

const router = express.Router();

router.get('/module/:id', async (req, res) => {
    const { id } = req.params;
    const [ projects ] = await getProjectByModule(id);
    res.status(200).json(projects);;
})

router.get('/:idProject/class/:idClass', async (req, res) => {
    const { idProject, idClass } = req.params;
    const [ data ] = await getGradeByClassProject(idClass, idProject);
    const totalStudent = data.reduce((previous, current) => previous = previous + current.total, 0);
    const studentApproved = data.filter(student => student.grade > 0.8).length;
    const response = {
        data,
        tax: studentApproved/totalStudent
    }
    res.status(200).json(response);;
})

router.use(tokenValidation);
router.post('/', async (req, res) => {
    const [data] = await insertProject(req.body);
    res.status(201).json({
        id: data.insertId,
        ...req.body
    });
})

module.exports = router;