const pool = require('../db');

const insertarPlan = async (req,res,next)=>{
    try {
        const { id_usuario } = req.params;
        const { descripcion } = req.body;

        const result = await pool.query('INSERT INTO public."PlanNutricional"(id_usuario, descripcion) VALUES ($1, $2);',
        [
            id_usuario,
            descripcion
        ]);
        res.json(result.rowCount);
    } catch (error) {
        next(error);
    }
};

const obtenerPlan = async (req,res,next) =>{
    try {
        const { id_usuario } = req.params;

        const result = await pool.query('SELECT id_plan, id_usuario, descripcion FROM public."PlanNutricional" WHERE id_usuario=$1;',
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

const modificarPlan = async (req,res,next)=>{
    try {
        const { id_usuario } = req.params;
        const { descripcion } = req.body;

        const result = await pool.query('UPDATE public."PlanNutricional" SET descripcion=$1 WHERE id_usuario=$2;',
        [
            descripcion,
            id_usuario
        ]);

        if(result.rows.length === 0){
            return res.status(404).json({
                message: "Plan nutricional de usuario no encontrado",
            });
        }
        res.json(result.rows[0]);
    } catch (error) {
        
    }
};
module.exports = {
    insertarPlan,
    obtenerPlan,
    modificarPlan
};