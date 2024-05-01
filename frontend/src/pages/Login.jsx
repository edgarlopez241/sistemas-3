import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'

const Login = ()=>{
    const paperStyle = {padding:20, height:'80vh', width:300, margin:'20px auto', backgroundColor:'#AAB28C', color:'white'};
    const avatarStyle = {backgroundColor:'white'};
    const [usuario, setUsuario] = useState({correo:"", password:""});
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (validEmail.test(usuario.correo)) {
            const res = await fetch(`http://localhost:4000/usuario/validar/${usuario.correo}`,{
        method: 'POST', body:JSON.stringify(usuario), headers: { "Content-Type": "application/json" } });
            
        const data = await res.text();
            
        console.log(JSON.stringify(usuario));
        }
    }

    const handleChange = e =>{
        setUsuario({...usuario, [e.target.name]: e.target.value})
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <h2>Inicio de sesión</h2>
            <Grid align='center'>
            <Typography variant='5'>My Health</Typography>
            <h6>Nutrition Subscription Service</h6>
            <Avatar style={avatarStyle} alt="Logo" src="src/assets/nutrition.png" sx={{ width: 56, height: 56 }}/>
            <form onSubmit={handleSubmit}>
                <TextField variant="outlined" label="Correo electronico" 
                sx={{display:'block', margin:"0.5rem 0"}}
                name="correo"
                onChange={handleChange}/>
                <TextField variant="outlined" label="Contraseña" type="password" 
                sx={{display:'block', margin:"0.5rem 0"}}
                name="password"
                onChange={handleChange}/>
                <Button variant="contained" color="success" type="submit">Iniciar seción</Button>
            </form>
            <Link>No tiene una cuenta? Registrese!</Link>
            </Grid>
            </Paper>
        </Grid>
    )
}

export default Login