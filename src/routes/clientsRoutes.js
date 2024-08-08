const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');

// Definindo as rotas para clientes
router.get('/clients', clientsController.getClients);
router.post('/clients', clientsController.createClient);
router.get('/clients/:id', clientsController.getClientById);
router.put('/clients/:id', clientsController.updateClient);
router.delete('/clients/:id', clientsController.deleteClient);

module.exports = router;
 