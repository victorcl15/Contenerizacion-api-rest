const { Router } = require('express');

const  { 
    createClient,
    getClients,
    getClientPorId,
    updateClientPorId,
    deleteClientByID
} = require('../controllers/client');

const router = Router();

/**
 * Obtiene todos
 */
router.get('/', getClients);

/**
 * Obtiene  por id
 */
 router.get('/:id', getClientPorId);

/**
 * Crear 
 */
router.post('/', createClient);

/**
 * Actualiza por id
 */
router.put('/:id', updateClientPorId);

router.delete('/:id', deleteClientByID);

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