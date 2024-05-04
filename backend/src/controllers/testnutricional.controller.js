const pool = require('../db');

const insertarTestNutricional = async(req,res,next)=>{
    try {
        const { id_usuario } = req.params;
        const { fecha_realizado, habitos_alimenticios, 
        metas_nutricionales, necesidades } = req.body;

        const result = await pool.query('INSERT INTO public."TestNutricional" (id_usuario, fecha_realizado, habitos_alimenticios, metas_nutricionales, necesidades) VALUES ($1, $2, $3, $4, $5);',
        [
            id_usuario,
            fecha_realizado,
            habitos_alimenticios,
            metas_nutricionales,
            necesidades
        ]);
        res.json(result.rowCount);
    } catch (error) {
        next(error);
    }
};

const obtenerTestNutricional = async (req,res,next)=>{
    try {
        const { id_usuario } = req.params;
        
        const result = await pool.query('SELECT * FROM public."TestNutricional" WHERE id_usuario=$1 ORDER BY fecha_realizado;',
        [id_usuario]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Test nutricional de usuario no encontrado",
            });
        }
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    insertarTestNutricional,
    obtenerTestNutricional
};
