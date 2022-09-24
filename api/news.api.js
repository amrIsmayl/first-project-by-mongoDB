const { auth } = require('../middleware/authentiction/auth');
const { addNews, allNews, userNews, update, deleteNews } = require('../services/news.service');

const app = require('express').Router();

app.post('/', auth, addNews)
app.get('/', auth, allNews)
    .get('/userNews', auth, userNews)
    .put('/', auth, update)
    .delete('/', auth, deleteNews)


module.exports = app;