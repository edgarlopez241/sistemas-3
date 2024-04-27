const { Router } = require('express');
const { insertarTestNutricional, 
    obtenerTestNutricional } = require('../controllers/testnutricional.controller');

const pool = require('../db');
const router = Router();

router.get('/testnutricional/:id_usuario', obtenerTestNutricional);

router.post('/testnutricional/:id_usuario', insertarTestNutricional);

router.delete('/susbscripcion/:id_usuario', (req,res)=>{res.send('Hello world');});

router.put('/susbscripcion/:id_usuario', (req,res)=>{res.send('Hello world');});

module.exports = router;