const pool = require('../db');

const insertarRecurso = async(req,res,next)=>{
    try {
        const { id_usuario } = req.params;
        const { nombre_recurso, enlace_recurso } = req.body;

        const result = await pool.query('INSERT INTO public."Recurso"(id_usuario, nombre_recurso, enlace_recurso, estatus_recurso) VALUES ($1, $2, $3, $4);',
        [
            id_usuario,
            nombre_recurso,
            enlace_recurso,
            'A'
        ]);
        res.json(result.rowCount);
    } catch (error) {
        next(error);
    }
};

const obtenerRecurso = async (req,res,next)=>{
    try {
        const { id_usuario } = req.params;

        const result = await pool.query('SELECT * FROM public."Recurso" WHERE id_usuario=$1' + " AND estatus_recurso='A';",
        [id_usuario]);

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