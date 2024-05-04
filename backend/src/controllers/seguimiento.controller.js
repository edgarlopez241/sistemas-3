const pool = require('../db');

const insertarSeguimiento = async(req,res,next)=>{
    try {
        const { id_usuario } = req.params;
        const { descripcion_analisis, fecha_seguimiento } = req.body;

        const result = await pool.query('INSERT INTO public."Seguimiento" (id_usuario, descripcion_analisis, fecha_seguimiento) VALUES ($1, $2, $3);',
        [
            id_usuario,
            descripcion_analisis,
            fecha_seguimiento
        ]);
        res.json(result.rowCount);
    } catch (error) {
        next(error);
    }
};

const obtenerSeguimiento = async (req,res,next)=>{
    try {
        const { id_usuario } = req.params;

        const result = await pool.query('SELECT * FROM public."Seguimiento" WHERE id_usuario=$1 ORDER BY fecha_seguimiento DESC;',
        [id_usuario]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Seguimiento de usuario no encontrado",
            });
        }
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    insertarSeguimiento,
    obtenerSeguimiento
};