const { Router } = require('express');

const { insertarPlan,
        modificarPlan,
        obtenerPlan } = require('../controllers/plan.controller')
const pool = require('../db');
const router = Router();

router.get('/plan/:id_usuario', obtenerPlan);

router.post('/plan/:id_usuario', insertarPlan);

router.delete('/', (req,res) => {
    res.send('Hello world');
});

router.put('/plan/:id_usuario', modificarPlan);

module.exports = router;