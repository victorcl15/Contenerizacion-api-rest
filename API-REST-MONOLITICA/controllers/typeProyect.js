
const { request, response } = require('express');
const TypeProyect = require('../models/TypeProyect');

/**
 * crear
 */
const createTypeProyect = async (req = request, res = response) => {
    try {
        const { name } = req.body;

        const tipoProyectoBD = await TypeProyect.findOne({ name });

        if(tipoProyectoBD){// ya existe
            return res.status(400).json({msg: 'Ya existe tipo proyecto'});
        }
        const datos = {
            name
        }

        const tipoProyecto = new TypeProyect(datos); 

        await tipoProyecto.save();

        return res.status(201).json(tipoProyecto);
    }catch(e) {
        return res.status(500).json({msj: e})
    }

 }
/**
 * Consultar todos 
 */
const getTypesProyect = async (req, res = response) => {
    try {
        const tiposProyectosBD = await TypeProyect.find()
        return res.json(tiposProyectosBD)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

/**
 * Consultar por Id
 */
const getTypeProyectPorId = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const query = {_id: id}
        const tipoProyectoBD = await TypeProyect.findOne(query)
        return res.json(tipoProyectoBD)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

/**
 * Actualiza por su ID
 */
const updateTypeProyectPorId = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const { name } = req.body
        const data = {
            name
        }
        const tipoProyecto = 
            await TypeProyect.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(tipoProyecto)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

/**
 * Borrar por su ID
 */
const deleteTypeProyectByID = async (req = request, res = response) => {
     try{
    const id = req.params.id;
    const tipoProyecto = await TypeProyect.findByIdAndDelete(id);
    res.status(204).json(tipoProyecto);
     }catch(e) {
        return res.status(500).json({msj: e})
    }
}


module.exports = { 
    createTypeProyect,
    getTypesProyect,
    getTypeProyectPorId,
    updateTypeProyectPorId,
    deleteTypeProyectByID
}