const { Router } = require('express');

const  { 
    createTypeProyect,
    getTypesProyect,
    getTypeProyectPorId,
    updateTypeProyectPorId,
    deleteTypeProyectByID
} = require('../controllers/typeProyect');

const router = Router();

/**
 * Obtiene todos
 */
router.get('/', getTypesProyect);

/**
 * Obtiene  por id
 */
 router.get('/:id', getTypeProyectPorId);

/**
 * Crear 
 */
router.post('/', createTypeProyect);

/**
 * Actualiza por id
 */
router.put('/:id', updateTypeProyectPorId);

router.delete('/:id', deleteTypeProyectByID);

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