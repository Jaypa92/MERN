const {request,response} = require('express')
const {Author} = require('../models/authors.model')

module.exports.createAuthor = (req,res)=>{
        Author.create(req.body)
        .then(response=>res.json(response))
        .catch(err=>res.status(400).json(err))
}

module.exports.getAllAuthors = (request,response)=>{
    Author.find()
        .then(author=>response.json(author))
        .catch(err=>response.status(400).json(err))
}

module.exports.getOne= (req,res)=>{
    Author.findById(req.params.id)
        .then(author=>{
            return res.json(author)
        })
        .catch(err=>res.status(400).json(err))
}

module.exports.updateAuthor = (req,res)=>{
    Author.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(updatedAuthor=>res.json(updatedAuthor))
    .catch(err=>res.status(400).json(err))
}

module.exports.deleteAuthor = (req,res)=>{
    Author.deleteOne({_id:req.params.id})
        .then(deleting=>res.json(deleting))
        .catch(err=>res.status(400).json(err))
}