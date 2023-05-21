const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,`{PATH} is required!`],
        minLength:[1,`{PATH} must be at least {MINLENGTH} characters!`]
    },
    price:{
        type:Number,
        required:[true,`{PATH} is required!`],
        minLength:[0,`{PATH} must be greater than {MINLENGTH}`]
    },
    description:{
        type:String,
        required:[true, `{PATH} is required!`],
        minLength:[10,`{PATH} must be greater than {MINLENGTH}`]
    }
},
{timestamps:true}
);

module.exports.Product = mongoose.model('Product',ProductSchema)