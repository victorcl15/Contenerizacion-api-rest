const express = require('express')
const app = express()
const notFound = require("./middleware/notFound");
const handleErrors = require("./middleware/handleErrors");
const cors = require("cors")

app.use(express.json());
app.use(cors())

//-----

const proyect = require('./rutas/proyect');


// URI o endpoint
//---

app.use('/api/proyect', proyect);

app.use(notFound)
app.use(handleErrors)


module.exports = app