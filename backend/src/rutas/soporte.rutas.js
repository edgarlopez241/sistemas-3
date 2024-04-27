const { Router } = require('express');
const { insertarSoporte, obtenerSoporte } = require('../controllers/soporte.controller');

const pool = require('../db');
const router = Router();

router.get('/soporte/:id_usuario', obtenerSoporte);

router.post('/soporte/:id_usuario', insertarSoporte);

router.delete('/soporte/:id_usuario', (req,res) => {
    res.send('Hello world');
});

router.put('/soporte/:id_usuario', (req,res) => {
    res.send('Hello world');
});

module.exports = router;