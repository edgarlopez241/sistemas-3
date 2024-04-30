const { Router } = require('express');
const { insertarUsuario,
    validarPassword,
    actualizarUsuario,
    obtenerDatosUsuario } = require('../controllers/users.controller');
const pool = require('../db');
const router = Router();

router.get('/usuario/:correo', obtenerDatosUsuario);

router.post('/usuario', insertarUsuario);

router.delete('/usuario', (req,res) => {
    res.send('Hello world');
});

router.put('/usuario/:correo', actualizarUsuario);

router.get('/usuario/validar/:correo', validarPassword);

module.exports = router;