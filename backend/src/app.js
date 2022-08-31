const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error.middleware');
const routerProject = require('./router/project');
const routerStudent = require('./router/student');
const routerLogin = require('./router/login');
const cors = require('cors')


const app = express();
app.use(cors());

app.use(express.json());

app.use('/login', routerLogin);
app.use('/project', routerProject);
app.use('/student', routerStudent);

app.use(errorMiddleware); // tem de ser o último
module.exports = app;