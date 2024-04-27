const pool = require('../db');

const insertarFeedback = async(req,res,next)=>{
    try {
        const { id_usuario } = req.params;
        const { comentario, calificacion, fecha_realizado } = req.body;

        const result = await pool.query('INSERT INTO public."ReporteFeedback" (id_usuario, comentario, calificacion, fecha_realizado) VALUES ($1, $2, $3, $4);',
        [
            id_usuario,
            comentario,
            calificacion,
            fecha_realizado
        ]);
        res.json(result.rowCount);
    } catch (error) {
        next(error);
    }
};

const obtenerFeedback = async (req,res,next)=>{
    try {
        const { id_usuario } = req.params;
        
        const result = await pool.query('SELECT * FROM public."ReporteFeedback" WHERE id_usuario=$1;',
        [id_usuario]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Reporte feedback de usuario no encontrado",
            });
        }
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    insertarFeedback,
    obtenerFeedback
};