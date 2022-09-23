const { auth } = require('../middleware/authentiction/auth');
const { signup, signin } = require('../services/user.service');


const app =require('express').Router();


app.post('/signup', signup);
app.post('/signin', signin);

module.exports = app


