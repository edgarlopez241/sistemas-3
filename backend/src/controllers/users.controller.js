const pool = require('../db');

const insertarUsuario = async(req,res,next) =>{
    const { nombre, apellido, correo, 
        telefono, fecha_nacimiento, genero, password} = req.body;

    try {
        const result = await pool.query('INSERT INTO public."Usuario"(nombre, apellido, correo, telefono, fecha_nacimiento, genero, password_hash)' +
         "VALUES ($1, $2, $3, $4, $5, $6, crypt($7, gen_salt('md5')));",[
            nombre, 
            apellido, 
            correo, telefono, 
            fecha_nacimiento, 
            genero,
            password
        ]);
    } catch (error) {
        next(error);
    }
};

const validarPassword = async (req,res,next) =>{
    try {
        const { correo } = req.params;
        const { password } = req.body;
        const result = await pool.query('SELECT (password_hash = crypt($1, password_hash)) AS match FROM public."Usuario" WHERE correo = $2',
        [
            password,
            correo
        ]);
        return res.json(result.rows[0].match);
    } catch (error) {
        next(error);
    }
};

const actualizarUsuario = async (req,res,next) =>{
    try {
        const { correo } = req.params;
        const { nombre, apellido, nuevocorreo, 
        telefono, fecha_nacimiento, genero, password } = req.body;

        const result = await pool.query('UPDATE public."Usuario" SET nombre=$1, apellido=$2, correo=$3, telefono=$4, fecha_nacimiento=$5, genero=$6,' + 
        "password_hash=crypt($7,gen_salt('md5')) WHERE correo=$8;", 
        [
            nombre,
            apellido,
            nuevocorreo,
            telefono,
            fecha_nacimiento,
            genero,
            password,
            correo
        ]);
        if(result.rows.length === 0){
            return res.status(404).json({
                message: "Usuario no encontrado",
            });
        }
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const obtenerDatosUsuario = async (req,res,next)=>{
    try {
        const { correo } = req.params;

        const result = await pool.query('SELECT id_usuario, nombre, apellido, correo, telefono, fecha_nacimiento, genero FROM public."Usuario" WHERE correo=$1;', 
        [
            correo
        ]);

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
    insertarUsuario,
    validarPassword,
    actualizarUsuario,
    obtenerDatosUsuario
};