import { Grid, Paper, Avatar, Typography, TextField, Select, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

const GestionarUsuario = ()=>{
    let location = useLocation();
    const {correo} = location.state;
    const paperStyle = {padding:20, height:'90vh', width:1200, margin:'20px auto', backgroundColor:'white'};
    const avatarStyle = {backgroundColor:'white'};
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({nombre:"", apellido:"",nuevocorreo:"",telefono:"",
        fecha_nacimiento:"",genero:'M',password:"",rol:'P'
    });
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );
    const validPhone = new RegExp('^[0-9]+$');

    const validarDatos = ()=>{
        return (validEmail.test(usuario.nuevocorreo) && usuario.nombre!==""
    && usuario.apellido !=="" && validPhone.test(usuario.telefono) && usuario.fecha_nacimiento!==""
    && usuario.genero!=='' && usuario.password!=="");
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(validarDatos()){
            const res = await fetch(`http://localhost:4000/usuario/${correo}`,{
                method:'PUT', body:JSON.stringify(usuario),
                headers: { "Content-Type": "application/json" }
            });
            try {
                const data = await res.json();
                console.log(data);
                navigate('/menu',{state:{correo:usuario.nuevocorreo}});
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleChange = e =>{
        setUsuario({...usuario,[e.target.name]: e.target.value})
    }
    return(
        <Grid justifyContent={"center"}>
        <Paper elevation={3} style={paperStyle}>
        <Grid  container direction="row" align="center">
        <Avatar style={avatarStyle} alt="Logo" src="src/assets/nutrition.png" sx={{ width: 56, height: 56 }}/>
        <Typography sx={{flexGrow: 1}}>Editar Perfil</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
        <Grid container direction="row">
        <TextField label="Nombre" color="success"
        sx={{display:'block', margin:3}}
        name="nombre" onChange={handleChange}/>
        <TextField label="Apellido" color="success"
        sx={{display:'block', margin:3}}
        name="apellido" onChange={handleChange}/>
        <TextField label="Telefono" color="success"
        sx={{display:'block', margin:3}}
        name="telefono" onChange={handleChange}/>
        </Grid>
        <Grid container direction="row">
        <TextField label="Correo"  color="success"
        sx={{display:'block', margin:3}}
        name="nuevocorreo" onChange={handleChange}/>
        <TextField label="Contraseña" type="password" color="success"
        sx={{display:'block', margin:3}}
        name="password" onChange={handleChange}/>
        <TextField label="Fecha de nacimiento" type="date" color="success"
        sx={{display:'block', margin:3}}
        name="fecha_nacimiento" onChange={handleChange}/>
        </Grid>
        <Grid container direction="row">
        <Select defaultValue={'M'} name="genero" labelId="label"
        sx={{margin:3}} onChange={handleChange}>
            <MenuItem value={'M'}>Masculino</MenuItem>
            <MenuItem value={'F'}>Femenino</MenuItem>
        </Select>
        <Button variant="contained" color="success" type="submit"
        sx={{height:40, margin:3}}>Guardar</Button>
        </Grid>
        <Button variant="contained" 
        onClick={()=>{navigate('/menu', {state:{correo:correo}})}}
        sx={{height:40, margin:3}}>Volver</Button>
        </form>
        </Paper>
        </Grid>
    );
}
//TODO que vea el admin el test y ponga el plan y ponga un seguimiento

export default GestionarUsuario