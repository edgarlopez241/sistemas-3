import { Grid, Paper, Typography, Card, Avatar, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

const VerPlan = ()=>{
    let location = useLocation();
    const {correo} = location.state;
    const navigate = useNavigate();
    const paperStyle = {padding:20, height:'90vh', width:1200, margin:'20px auto', backgroundColor:'white'};
    const avatarStyle = {backgroundColor:'white'};
    const [descripcion, setDescripcion] = useState("");
    const [id_usuario, setId] = useState(0);
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );

    const obtenerUsuario = async()=>{
        if (validEmail.test(correo)) {
            const res = await fetch(`http://localhost:4000/usuario/${correo}`,{headers:{ "Content-Type": "application/json" }});
            const data = await res.json();
            const { id_usuario } = data;
            setId(id_usuario);
        }
    }
    const obtenerDescripcionPlan = async()=>{
        const id = id_usuario;
        if (id) {
            const res = await fetch(`http://localhost:4000/plan/${id_usuario}`);
            const data = await res.json();
            const { message, descripcion } = data;
            if (message) {
                setDescripcion("No posee un plan nutricional asignado actualmente");
            }
            else if (descripcion){
                setDescripcion(descripcion);
            }
        }
    }
    useEffect(()=>{
        obtenerUsuario().then(obtenerDescripcionPlan());
        });
    return(
        <Grid justifyContent={"center"}>
        <Paper elevation={3} style={paperStyle}>
        <Grid  container direction="row" align="center">
        <Avatar style={avatarStyle} alt="Logo" src="src/assets/nutrition.png" sx={{ width: 56, height: 56 }}/>
        <Typography sx={{flexGrow: 1}}>Ver plan nutricional</Typography>
        </Grid>
        <Card elevation={1} style={{ border: "1px solid green" }} sx={{margin:2}}>
        <Typography variant="h5" sx={{margin:2}}>Descripción del plan nutricional</Typography>
        <Typography variant="body1" sx={{margin:2}}>{descripcion}</Typography>
        </Card>
        <Button variant="contained" 
        onClick={()=>{navigate('/menu', {state:{correo:correo}})}}
        sx={{height:40, margin:2}}>Volver</Button>
        </Paper>   
        </Grid>
    );
}

export default VerPlan