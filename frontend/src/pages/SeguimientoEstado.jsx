import { Grid, Paper, Avatar, Typography, Card, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

const SeguimientoEstado = ()=>{
    let location = useLocation();
    const { id, correo } = location.state;
    const navigate = useNavigate();
    const paperStyle = {padding:20, height:'90vh', width:1200, margin:'20px auto', backgroundColor:'white'};
    const avatarStyle = {backgroundColor:'white'};
    const [seguimiento, setSeguimiento] = useState({descripcion:"", fecha:""});

    const obtenerSeguimiento = async()=>{
        if (id) {
            const idUsuario = parseInt(id,10);
            if (idUsuario){
                const res = await fetch(`http://localhost:4000/seguimiento/${idUsuario}`);
                const data = await res.json();
                const { descripcion_analisis, fecha_seguimiento, message } = data[0];
                if (!message){
                    setSeguimiento({descripcion:descripcion_analisis, fecha:fecha_seguimiento});
                }
            }
        }
    }
    useEffect(()=>{
        obtenerSeguimiento();
    })
    return (
        <Grid justifyContent={"center"}>
        <Paper elevation={3} style={paperStyle}>
        <Grid  container direction="row" align="center">
        <Avatar style={avatarStyle} alt="Logo" src="src/assets/nutrition.png" sx={{ width: 56, height: 56 }}/>
        <Typography sx={{flexGrow: 1}}>Seguimiento de estado</Typography>
        </Grid>
        <Card elevation={1} style={{ border: "1px solid green" }} sx={{margin:2}}>
            <Typography variant="h5" sx={{margin:2}}>
                Descripción del seguimiento agendado
            </Typography>
            <Typography variant="body1" sx={{margin:2}}>
                {"Descripción del seguimiento: " + seguimiento.descripcion}
            </Typography>
            <Typography variant="body1" sx={{margin:2}}>
                {"Fecha agendada del seguimiento: " + seguimiento.fecha.substring(0,10)}
            </Typography>
        </Card>
        <Button variant="contained" 
        onClick={()=>{navigate('/menu', {state:{correo:correo}})}}
        sx={{height:40, margin:2}}>Volver</Button>
        </Paper>
        </Grid>
    );
}

export default SeguimientoEstado