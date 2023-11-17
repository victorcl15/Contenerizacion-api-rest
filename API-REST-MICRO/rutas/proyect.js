const { Router } = require('express');

const  { 
    createProyecto,
    getProyectos,
    updateProyect,
    deleteProyectByID,
    getProyectByID
} = require('../controllers/proyect');

const router = Router();

/**
 * Obtiene todos
 */
router.get('/', getProyectos);

/**
 * Obtiene  por id
 */
 router.get('/:id', getProyectByID);

/**
 * Crear 
 */
router.post('/', createProyecto);

/**
 * Actualiza por id
 */
router.put('/:id', updateProyect);

router.delete('/:id', deleteProyectByID);

/**
 * Actualiza una parte del tipos de equipos
 */
/*router.patch('/:id', (req, res) => {
    res.json({});
});*/

/**
 * Borra un tipos de equipos por id
 */
 //router.delete('/:id', deleteTipoEquipoByID);

module.exports = router;