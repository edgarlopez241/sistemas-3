const { Router } = require('express');
const { insertarSeguimiento, obtenerSeguimiento } = require('../controllers/seguimiento.controller')

const pool = require('../db');
const router = Router();

router.get('/seguimiento/:id_usuario', obtenerSeguimiento);

router.post('/seguimiento/:id_usuario', insertarSeguimiento);

router.delete('/susbscripcion/:id_usuario', (req,res)=>{res.send('Hello world');});

router.put('/susbscripcion/:id_usuario', (req,res)=>{res.send('Hello world');});

module.exports = router;