const { addNews , allNews , userNews, update, deleteNews} = require('../services/news.service');

const app = require('express').Router();

app.post('/addNews' , addNews)
app.get('/' , allNews)
.get('/userNews' , userNews)
.put('/update' , update)
.delete('/' , deleteNews)


module.exports = app;