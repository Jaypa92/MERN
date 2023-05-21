const Author = require('../controllers/authors.controllers')

module.exports = function(app){
    app.post('/api/authors',Author.createAuthor)
    app.get('/api/authors',Author.getAllAuthors)
    app.get('/api/authors/:id',Author.getOne)
    app.put('/api/authors/:id',Author.updateAuthor)
    app.delete('/api/authors/:id',Author.deleteAuthor)
}