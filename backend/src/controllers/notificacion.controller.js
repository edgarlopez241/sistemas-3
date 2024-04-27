const pool = require('../db');

const insertarNotificacion = async(req,res,next)=>{
    try {
        const { id_usuario } = req.params;
        const { descripcion_notificacion , fecha_publicacion} = req.body;

        const result = await pool.query('INSERT INTO public."Notificacion" (id_usuario, descripcion_notificacion, fecha_publicacion) VALUES ($1, $2, $3);',
        [
            id_usuario,
            descripcion_notificacion,
            fecha_publicacion
        ]);
        res.json(result.rowCount);
    } catch (error) {
        next(error);
    }
};

const obtenerNotificacion = async(req,res,next)=>{
    try {
        const { id_usuario } = req.params;

        const result = await pool.query('SELECT * FROM public."Notificacion" WHERE id_usuario=$1 ORDER BY fecha_publicacion;',
        [id_usuario]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Notificacion de usuario no encontrado",
            });
        }
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    insertarNotificacion,
    obtenerNotificacion
};