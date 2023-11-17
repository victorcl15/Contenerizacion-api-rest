
const { request, response } = require('express');
const University = require('../models/University');

/**
 * crear
 */
const createUniversity = async (req = request, res = response) => {
    try {
        const { name, adress, phone } = req.body;

        const universityDB = await University.findOne({ name });

        if(universityDB){// ya existe
            return res.status(400).json({msg: 'Ya existe universidad'});
        }
        const datos = {
            name,
            adress,
            phone
        }

        const university = new University(datos); 

        await university.save();

        return res.status(201).json(university);
    }catch(e) {
        return res.status(500).json({msj: e})
    }

 }
/**
 * Consultar todos 
 */
const getUniversitys = async (req, res = response) => {
    try {
        const universityDB = await University.find()
        return res.json(universityDB)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

/**
 * Consultar por Id
 */
const getUniversityPorId = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const query = {_id: id}
        const universityDB = await University.findOne(query)
        return res.json(universityDB)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

/**
 * Actualiza por su ID
 */
const updateUniversityPorId = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const { name, adress, phone } = req.body
        const data = {
            name,
            adress,
            phone
        }
        const university = 
            await University.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(university)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

/**
 * Borrar por su ID
 */
const deleteUniversityByID = async (req = request, res = response) => {
    try{
        const id = req.params.id;
        const university = await University.findByIdAndDelete(id);
        res.status(204).json(university);
         }catch(e) {
            return res.status(500).json({msj: e})
        }
}


module.exports = { 
    createUniversity,
    getUniversitys,
    getUniversityPorId,
    updateUniversityPorId,
    deleteUniversityByID
}