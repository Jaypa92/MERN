const { request, response } = require('express')
const {Joke} = require('../models/jokes.model')

module.exports.getallJokes = (request,response)=>{
    Joke.find()
        .then(jokes=> response.json(jokes))
        .catch(err => response.json(err))
}

module.exports.getOneJoke = (req,response)=>{
    Joke.findById(req.params.id)
        .then(joke=>{
            return response.json(joke)
        })
        .catch(err=>response.json(err))
}

module.exports.createJokes = (request,response)=>{
    const {setup,punchline} = request.body;
        Joke.create({
            setup,
            punchline
        })
        .then(joke=>response.json(joke))
        .catch(err=>response.json(err))
}

module.exports.updateJoke = (request,response)=>{
    Joke.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
        .then(updatedJoke=>response.json(updatedJoke))
        .catch(err=>response.json(err))
}

module.exports.deleteJoke = (request,response) =>{
    Joke.deleteOne({_id:request.params.id})
    .then(deleting => response.json(deleting))
    .catch(err=>response.json(err))
}