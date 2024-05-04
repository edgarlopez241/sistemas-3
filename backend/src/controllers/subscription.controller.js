const pool = require('../db');

const insertarSubscripcion = async (req, res, next) => {
    try {
        const { id_usuario } = req.params;
        const { tipo_subscripcion, modalidad_temporal, fecha_vencimiento } = req.body;

        const result = await pool.query('INSERT INTO public."SubscripcionUsuario" (id_usuario, tipo_subscripcion, modalidad_temporal, fecha_vencimiento, estatus_subscripcion) VALUES ($1, $2, $3, $4, $5);',
            [
                id_usuario,
                tipo_subscripcion,
                modalidad_temporal,
                fecha_vencimiento,
                'A'
            ]);
        res.json(result.rowCount);
    } catch (error) {
        next(error);
    }
};

const actualizarSubscripcion = async (req, res, next) => {
    try {
        const { id_usuario } = req.params;
        const { tipo_subscripcion, modalidad_temporal, fecha_vencimiento } = req.body;

        const result = await pool.query('UPDATE public."SubscripcionUsuario" SET tipo_subscripcion=$1, modalidad_temporal=$2, fecha_vencimiento=$3 WHERE id_usuario=$4 AND estatus_subscripcion=$5 RETURNING *;',
            [
                tipo_subscripcion,
                modalidad_temporal,
                fecha_vencimiento,
                id_usuario,
                'A'
            ]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Susbscripcion de usuario no encontrado",
            });
        }
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const cambiarEstatus = async (req, res, next) => {
    try {
        const { id_usuario } = req.params;
        const { estatus } = req.body;

        const result = await pool.query('UPDATE public."SubscripcionUsuario" SET estatus_subscripcion=$1 WHERE id_usuario=$2 RETURNING *;',
            [
                estatus,
                id_usuario
            ]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Susbscripcion de usuario no encontrado",
            });
        }
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const obtenerSubscripcion = async (req, res, next) => {
    try {
        const { id_usuario } = req.params;

        const result = await pool.query('SELECT * FROM public."SubscripcionUsuario" WHERE id_usuario=$1;',
            [
                id_usuario
            ]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Plan nutricional de usuario no encontrado",
            });
        }
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

    const obtenerIdUsuario = async (req, res, next) => {
        try {
            const { correo } = req.params;

            const result = await pool.query('SELECT id_usuario FROM public."Usuario" WHERE correo=$1;', [correo]);

            if (result.rows.length === 0) {
                return res.status(404).json({
                    message: "Usuario no encontrado",
                });
            }
            res.json(result.rows[0]);
        } catch (error) {
            next(error);
        }
    };

    module.exports = {
        insertarSubscripcion,
        actualizarSubscripcion,
        cambiarEstatus,
        obtenerSubscripcion,
        obtenerIdUsuario // Exportar la nueva función
    };
