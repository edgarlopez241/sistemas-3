const { Router } = require('express');
const { insertarFeedback, obtenerFeedback } = require('../controllers/feedback.controller');

const pool = require('../db');
const router = Router();

router.get('/feedback/:id_usuario', obtenerFeedback);

router.post('/feedback/:id_usuario', insertarFeedback);

router.delete('/feedback/:id_usuario', (req,res) => {
    res.send('Hello world');
});

router.put('/feedback/:id_usuario', (req,res) => {
    res.send('Hello world');
});

module.exports = router;