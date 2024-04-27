const { Router } = require('express');
const { insertarRecurso,
    obtenerRecurso,
    cambiarEstatusRecurso } = require('../controllers/recurso.controller');

const pool = require('../db');
const router = Router();

router.get('/recurso/:id_usuario', obtenerRecurso);

router.post('/recurso/:id_usuario', insertarRecurso);

router.delete('/recurso/:id_usuario', cambiarEstatusRecurso);

router.put('/recurso/:id_usuario', (req,res)=> {res.send('Hello world')});

module.exports = router;