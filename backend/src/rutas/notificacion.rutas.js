const { Router } = require('express');
const { insertarNotificacion, obtenerNotificacion } = require('../controllers/notificacion.controller');

const pool = require('../db');
const router = Router();

router.get('/notificacion/:id_usuario', obtenerNotificacion);

router.post('/notificacion/:id_usuario', insertarNotificacion);

router.delete('/notificacion/:id_usuario', (req,res) => {
    res.send('Hello world');
});

router.put('/notificacion/:id_usuario', (req,res) => {
    res.send('Hello world');
});

module.exports = router;