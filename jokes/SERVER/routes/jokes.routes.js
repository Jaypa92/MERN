const Joke = require('../controllers/jokes.controller')

module.exports = function(app){
    app.post('/api/jokes',Joke.createJokes)
    app.get('/api/jokes',Joke.getallJokes)
    app.get('/api/jokes/:id',Joke.getOneJoke)
    app.put('/api/jokes/:id',Joke.updateJoke)
    app.delete('/api/jokes/:id',Joke.deleteJoke)
}
