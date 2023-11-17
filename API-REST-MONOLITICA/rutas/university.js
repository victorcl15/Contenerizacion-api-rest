const { Router } = require('express');

const  { 
    createUniversity,
    getUniversitys,
    getUniversityPorId,
    updateUniversityPorId,
    deleteUniversityByID
} = require('../controllers/university');

const router = Router();

/**
 * Obtiene todos
 */
router.get('/', getUniversitys);

/**
 * Obtiene  por id
 */
 router.get('/:id', getUniversityPorId);

/**
 * Crear 
 */
router.post('/', createUniversity);

/**
 * Actualiza por id
 */
router.put('/:id', updateUniversityPorId);

router.delete('/:id', deleteUniversityByID);

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