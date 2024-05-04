const { Router } = require('express');
const { insertarSubscripcion,
        actualizarSubscripcion,
        cambiarEstatus,
        obtenerSubscripcion,
        obtenerIdUsuario } = require('../controllers/subscription.controller');

const pool = require('../db');
const router = Router();

router.get('/susbscripcion/:id_usuario', obtenerSubscripcion);

router.post('/susbscripcion/:id_usuario', insertarSubscripcion);

router.delete('/susbscripcion/:id_usuario', cambiarEstatus);

router.put('/susbscripcion/:id_usuario', actualizarSubscripcion);

router.get('/usuario/:correo', obtenerIdUsuario);

module.exports = router;