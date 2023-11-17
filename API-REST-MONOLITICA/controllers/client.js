
const { request, response } = require('express');
const Client = require('../models/Client');

/**
 * crear
 */
const createClient = async (req = request, res = response) => {
    try {
        const { name, email } = req.body;

        const clientDB = await Client.findOne({ email });

        if(clientDB){// ya existe
            return res.status(400).json({msg: 'Ya existe el email'});
        }
        const datos = {
            name,
            email
        }

        const client = new Client(datos); 

        await client.save();

        return res.status(201).json(client);
    }catch(e) {
        return res.status(500).json({msj: e})
    }

 }
/**
 * Consultar todos 
 */
const getClients = async (req, res = response) => {
    try {
        const clientDB = await Client.find()
        return res.json(clientDB)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

/**
 * Consultar por Id
 */
const getClientPorId = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const query = {_id: id}
        const clientDB = await Client.findOne(query)
        return res.json(clientDB)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

/**
 * Actualiza por su ID
 */
const updateClientPorId = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const { name, email } = req.body
        const data = {
            name,
            email
        }
        const client = 
            await Client.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(client)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

/**
 * Borrar por su ID
 */
const deleteClientByID = async (req = request, res = response) => {
    try{
        const id = req.params.id;
        const client = await Client.findByIdAndDelete(id);
        res.status(204).json(client);
         }catch(e) {
            return res.status(500).json({msj: e})
        }
}


module.exports = { 
    createClient,
    getClients,
    getClientPorId,
    updateClientPorId,
    deleteClientByID
}