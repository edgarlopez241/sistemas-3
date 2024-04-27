const pool = require('../db');

const insertarSoporte = async(req,res,next)=>{
    try {
        const { id_usuario } = req.params;
        const { detalles_soporte, fecha_soporte } = req.body;

        const result = await pool.query('INSERT INTO public."Soporte" (id_usuario, detalles_soporte, fecha_soporte) VALUES ($1, $2, $3);',
        [
            id_usuario,
            detalles_soporte,
            fecha_soporte
        ]);
        res.json(result.rowCount);
    } catch (error) {
        next(error);
    }
};

const obtenerSoporte = async (req,res,next)=>{
    try {
        const { id_usuario } = req.params;

        const result = await pool.query('SELECT * FROM public."Soporte" WHERE id_usuario=$1;',
        [id_usuario]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Plan nutricional de usuario no encontrado",
            });
        }
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    insertarSoporte,
    obtenerSoporte
};