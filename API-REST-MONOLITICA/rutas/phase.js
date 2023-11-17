const { Router } = require('express');

const  { 
    createPhase,
    getPhases,
    getPhasePorId,
    updatePhasePorId,
    deletePhaseByID
} = require('../controllers/phase');

const router = Router();

/**
 * Obtiene todos
 */
router.get('/', getPhases);

/**
 * Obtiene  por id
 */
 router.get('/:id', getPhasePorId);

/**
 * Crear 
 */
router.post('/', createPhase);

/**
 * Actualiza por id
 */
router.put('/:id', updatePhasePorId);

router.delete('/:id', deletePhaseByID);

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