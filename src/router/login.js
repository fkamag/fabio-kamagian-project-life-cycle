const express = require('express');
const { login } = require('../db/student.db');

const router = express.Router();

router.post('/', async (req, res) => {
    // const { email, password } = req.body;
    const [ student ] = await login(req.body);
    if (student.length > 0) {
        const token = Math.random().toString(36).substr(2, 15); // stackoverflow
        return res.status(200).json({ token });
    }
    
    res.status(401).json({ message: "Aqui não!"});
} )

module.exports = router;