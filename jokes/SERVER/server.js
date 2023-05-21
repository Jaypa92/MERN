require('dotenv').config();
require('./config/mongoose.config');
const express = require('express');
const port = process.env.API_PORT;
const app = express();
app.use(express.json());

require('./routes/jokes.routes')(app)

app.listen(port,() => console.log(`nodListening on port ${port} for REQuests to RESpond to`))