const express = require('express')
const app = express()
const notFound = require("./middleware/notFound");
const handleErrors = require("./middleware/handleErrors");
const cors = require("cors")

app.use(express.json());
app.use(cors())

//-----
const typeProyect = require('./rutas/typeProyect');
const phase = require('./rutas/phase');
const university = require('./rutas/university');
const client = require('./rutas/client');


// URI o endpoint
//---
app.use('/api/types_proyect', typeProyect);
app.use('/api/phase', phase);
app.use('/api/university', university);
app.use('/api/client', client);

app.use(notFound)
app.use(handleErrors)


module.exports = app