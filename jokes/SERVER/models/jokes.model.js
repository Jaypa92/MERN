const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true, `{PATH} is required!`],
        minLength:[10,`{PATH} must be at least {MINLENGTH} characters!`]
    },
    punchline: {
        type: String,
        required:[true,`{PATH} is required!`],
        minLength:[3,`{PATH} must be at least {MINLENGTH} characters long!`]
    }
},
{timestamps:true}
);

module.exports.Joke = mongoose.model('Joke', JokesSchema);


