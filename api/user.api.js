const { auth } = require('../middleware/authentiction/auth');
const { uservalidation } = require('../middleware/validation/user.validation');
const { signup, signin } = require('../services/user.service');


const app =require('express').Router();


app.post('/signup', uservalidation,signup);
app.post('/signin', signin);

module.exports = app


