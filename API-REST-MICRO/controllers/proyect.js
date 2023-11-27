
const { request, response } = require('express');
const Proyect = require('../models/Proyect');
const Client = require('../models/Client');
const Phase = require('../models/Phase');
const University = require('../models/University');
const TypeProyect = require('../models/TypeProyect');

/**
 * crea
 */
const createProyecto = async (req = request, res = response) => {
     try{
         const data = req.body
         const { client, type_proyect, university, phase, ...resto } = data
 
         const tipoProyectoBD = await TypeProyect.findOne({
             _id: type_proyect
         })
         if(!tipoProyectoBD){
             return res.status(400).json({
                 msj: 'No existe tipo Proyecto'
             })
         }
         const clienteBD = await Client.findOne({
             _id: client
         })
         if(!clienteBD){
             return res.status(400).json({
                 msj: 'No existe cliente'
             })
         }
         const phaseBD = await Phase.findOne({
            _id: phase
        })
        if(!phaseBD){
            return res.status(400).json({
                msj: 'No existe etapa'
            })
        }
        const universityBD = await University.findOne({
            _id: university
        })
        if(!universityBD){
            return res.status(400).json({
                msj: 'No existe universidad'
            })
        }
         const proyect = new Proyect(data);
         await proyect.save();
         return res.status(201).json(proyect);
     }catch(e){
         return res.status(500).json({
             error: e
         });
     }
 }
 
/**
 * Consultar todos
 */
const getProyectos = async (req, res = response) => {
    console.log("Obteniendo proyectos");
    try{
        const proyectsBD = await Proyect.find()
        .populate({
            path: 'client'
        })
        .populate({
            path: 'type_proyect'
        })
        .populate({
            path: 'university'
        })
        .populate({
            path: 'phase'
        })
        return res.json(proyectsBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

/**
 * Consultar todos inventarios
 */
 const getProyectByID = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const query = { _id: id};
        const proyectBD = await Proyect.findOne(query).populate({
            path: 'client'
        })
        .populate({
            path: 'type_proyect'
        })
        .populate({
            path: 'university'
        })
        .populate({
            path: 'phase'
        })
        // TODO: personalizar error de no encontrado
        res.json(proyectBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}


const updateProyect = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
    
        const proyectBD = await Proyect.findOne({ _id: id});
       
       if(!proyectBD){
        return res.status(400).json({
            msj: 'No existe este proyecto'
        });
       } 
        const proyect = await Proyect.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(proyect);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }
}

const deleteProyectByID = async (req = request, res = response) => {
    try{
        const id = req.params.id;
        const proyect = await Proyect.findByIdAndDelete(id);
        res.status(204).json(proyect);
         }catch(e) {
            return res.status(500).json({msj: e})
        }
}


module.exports = { 
    createProyecto,
    getProyectos,
    getProyectByID,
    deleteProyectByID,
    updateProyect
}