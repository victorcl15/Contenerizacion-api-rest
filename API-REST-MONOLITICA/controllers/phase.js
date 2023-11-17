
const { request, response } = require('express');
const Phase = require('../models/Phase');

/**
 * crear
 */
const createPhase = async (req = request, res = response) => {
    try {
        const { name } = req.body;

        const phaseDB = await Phase.findOne({ name });

        if(phaseDB){// ya existe
            return res.status(400).json({msg: 'Ya existe tipo proyecto'});
        }
        const datos = {
            name
        }

        const phase = new Phase(datos); 

        await phase.save();

        return res.status(201).json(phase);
    }catch(e) {
        return res.status(500).json({msj: e})
    }

 }
/**
 * Consultar todos 
 */
const getPhases = async (req, res = response) => {
    try {
        const phaseDB = await Phase.find()
        return res.json(phaseDB)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

/**
 * Consultar por Id
 */
const getPhasePorId = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const query = {_id: id}
        const phaseDB = await Phase.findOne(query)
        return res.json(phaseDB)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

/**
 * Actualiza por su ID
 */
const updatePhasePorId = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const { name } = req.body
        const data = {
            name
        }
        const phase = 
            await Phase.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(phase)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

/**
 * Borrar por su ID
 */
const deletePhaseByID = async (req = request, res = response) => {
    try{
        const id = req.params.id;
        const phase = await Phase.findByIdAndDelete(id);
        res.status(204).json(phase);
         }catch(e) {
            return res.status(500).json({msj: e})
        }
}


module.exports = { 
    createPhase,
    getPhases,
    getPhasePorId,
    updatePhasePorId,
    deletePhaseByID
}