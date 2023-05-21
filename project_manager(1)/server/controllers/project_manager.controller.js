const {request,response} = require('express')
const {Product} = require('../models/project_manager.model')

module.exports.createProduct = (req,res)=>{
        Product.create(req.body)
        .then(response=>res.json(response))
        .catch(err=>response.json(err))
}

module.exports.getAllProducts = (request,response)=>{
    Product.find()
        .then(product=>response.json(product))
        .catch(err=>response.json(err))
}

module.exports.getOne= (req,res)=>{
    Product.findById(req.params.id)
        .then(product=>{
            return res.json(product)
        })
        .catch(err=>res.json(err))
}

module.exports.updateProduct = (req,res)=>{
    Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then(updatedProduct=>res.json(updatedProduct))
    .catch(err=>res.json(err))
}

module.exports.deleteProduct = (req,res)=>{
    Product.deleteOne({_id:req.params.id})
        .then(deleting=>res.json(deleting))
        .catch(err=>res.json(err))
}