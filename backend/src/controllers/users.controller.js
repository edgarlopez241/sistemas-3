const pool = require('../db');

const insertarUsuario = async(req,res,next) => {
    try {
        const { nombre, apellido, correo, telefono, fecha_nacimiento, genero, password, rol} = req.body;
    
        // Verificar si el correo está registrado
        const resultCheck = await pool.query('SELECT id_usuario FROM public."Usuario" WHERE correo=$1;', [correo]);
        if (resultCheck.rows.length > 0) {
            return res.status(400).json({
                message: "El correo ya está registrado",
            });
        }

        const result = await pool.query('INSERT INTO public."Usuario"(nombre, apellido, correo, telefono, fecha_nacimiento, genero, password_hash, rol)' +
         "VALUES ($1, $2, $3, $4, $5, $6, crypt($7, gen_salt('md5')), $8);",[
            nombre, 
            apellido, 
            correo, 
            telefono, 
            fecha_nacimiento, 
            genero,
            password,
            rol
        ]);
        res.json(result.rowCount);
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
        if(result.rows.length === 0){
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        }
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const actualizarUsuario = async (req,res,next) =>{
    try {
        const { correo } = req.params;
        const { nombre, apellido, nuevocorreo, 
        telefono, fecha_nacimiento, genero, password, rol } = req.body;

        const result = await pool.query('UPDATE public."Usuario" SET nombre=$1, apellido=$2, correo=$3, telefono=$4, fecha_nacimiento=$5, genero=$6, password_hash=crypt($7,gen_salt($8)), rol=$9 WHERE correo=$10 RETURNING id_usuario;', 
        [
            nombre,
            apellido,
            nuevocorreo,
            telefono,
            fecha_nacimiento,
            genero,
            password,
            'md5',
            rol,
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

        const result = await pool.query('SELECT id_usuario, nombre, apellido, correo, telefono, fecha_nacimiento, genero, rol FROM public."Usuario" WHERE correo=$1;', 
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

const obtenerPacientes = async(req,res,next)=>{
    try {
        const result = await pool.query('SELECT id_usuario, nombre, apellido, correo, telefono, fecha_nacimiento, genero, rol FROM public."Usuario" WHERE rol=$1',['P']);
        
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "No hay pacientes existentes",
            });
        }
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    insertarUsuario,
    validarPassword,
    actualizarUsuario,
    obtenerDatosUsuario,
    obtenerPacientes
};