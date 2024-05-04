import { Avatar, FormControl, Grid, Paper, TextField, Typography, Button } from '@mui/material';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import moment from 'moment';

const Soporte = ()=>{
    let location = useLocation();
    const {id, correo} = location.state;
    const fecha = moment().format('YYYY-MM-DD');
    const navigate = useNavigate();
    const paperStyle = {padding:20, height:'90vh', width:1200, margin:'20px auto', backgroundColor:'white'};
    const avatarStyle = {backgroundColor:'white'};
    const [soporte, setSoporte] = useState({detalles_soporte:"", fecha_soporte:fecha});

    const handleChange = e =>{
        setSoporte({...soporte, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if (id){
            const res = await fetch(`http://localhost:4000/soporte/${id}`,
            {
                method: 'POST', body:JSON.stringify(soporte), 
                headers: { "Content-Type": "application/json" } 
            });
            const data = await res.text();
            if (data){
                console.log(data);
            }
        }
    }
    return (
        <Grid justifyContent={"center"}>
        <Paper elevation={3} style={paperStyle}>
        <Grid  container direction="row" align="center">
        <Avatar style={avatarStyle} alt="Logo" src="src/assets/nutrition.png" sx={{ width: 56, height: 56 }}/>
        <Typography sx={{flexGrow: 1}}>Soporte</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
        <FormControl sx={{ width: '80ch', margin:3 }}>
            <TextField variant="outlined" label="Escriba su reclamo aqui" 
                sx={{display:'block', margin:3}}
                name="detalles_soporte"
                onChange={handleChange}
                multiline maxRows={5}
                fullWidth
                />
        </FormControl>
        <Button variant="contained" color="success" type="submit" 
        sx={{margin:2}}>Enviar soporte</Button>
        </form>
        <Button variant="contained" 
        onClick={()=>{navigate('/menu', {state:{correo:correo}})}}
        sx={{height:40, margin:3}}>Volver</Button>
        </Paper>
        </Grid>
    );
}

export default Soporte