const pool = require('../db');

const insertarRecurso = async (req, res) => {
    const { id_usuario } = req.params;
    const { nombre_recurso, enlace_recurso, estatus_recurso } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO "Recurso" (id_usuario, nombre_recurso, enlace_recurso, estatus_recurso) VALUES ($1, $2, $3, $4)',
            [id_usuario, nombre_recurso, enlace_recurso, estatus_recurso]
        );

        if (result.rowCount === 0) {
            return res.status(500).json({ message: 'Error al insertar el recurso' });
        }

        return res.status(201).json({ message: 'Recurso insertado correctamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
};

const obtenerRecurso = async (req,res,next)=>{
    try {
        const { id_usuario, nombre_recurso } = req.params;

        const result = await pool.query('SELECT * FROM public."Recurso" WHERE id_usuario=$1 AND nombre_recurso=$2 AND estatus_recurso=\'A\';',
        [id_usuario, nombre_recurso]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Recurso de usuario no encontrado",
            });
        }
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

const cambiarEstatusRecurso = async(req,res,next)=>{
    try {
        const { id_usuario } = req.params;
        const { estatus_recurso, nombre_recurso } = req.body;

        const result = await pool.query('UPDATE public."Recurso" SET estatus_recurso=$1 WHERE id_usuario=$2 AND nombre_recurso=$3 RETURNING estatus_recurso;',
        [
            estatus_recurso,
            id_usuario,
            nombre_recurso
        ]);
        if(result.rows.length === 0){
            return res.status(404).json({
                message: "Susbscripcion de usuario no encontrado",
            });
        }
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    insertarRecurso,
    obtenerRecurso,
    cambiarEstatusRecurso
};