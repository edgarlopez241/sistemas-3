import { Grid, Paper, Avatar, Typography, Button, Card } from "@mui/material"
import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const AdministrarPacientes = ()=>{
    let location = useLocation();
    const {correo} = location.state;
    const navigate = useNavigate();
    const paperStyle = {padding:20, height:'90vh', width:1200, margin:'20px auto', backgroundColor:'white'};
    const avatarStyle = {backgroundColor:'white'};
    const [pacientes, setPacientes] = useState([{}]);

    const obtenerPacientes = async()=>{
        const res = await fetch(`http://localhost:4000/pacientes/`,
        {headers:{ "Content-Type": "application/json" }}
        );
        const data = await res.json();
        const datos = JSON.stringify(data);
        setPacientes(data);
    }   

    useEffect(()=>{
        obtenerPacientes();
    });
    return (
        <Grid justifyContent={"center"}>
        <Paper elevation={3} style={paperStyle}>
        <Grid  container direction="row" align="center">
        <Avatar style={avatarStyle} alt="Logo" src="src/assets/nutrition.png" sx={{ width: 56, height: 56 }}/>
        <Typography sx={{flexGrow: 1}}>Lista de pacientes</Typography>
        </Grid>
        <Card elevation={1} style={{ border: "1px solid green" }} sx={{margin:2}}>{
            pacientes.map((datos,key)=>{
                return(
                    <Link to={'/gestionarpaciente'} state={{id_usuario:datos.id_usuario, correo:correo}}
                    key={key}>
                        {datos.nombre + " " + datos.apellido + " , Genero: " + 
                        datos.genero + " , Fecha de nacimiento: " + datos.fecha_nacimiento}
                    </Link>
                );
            })
        }
        </Card>
        <Button variant="contained" 
        onClick={()=>{navigate('/menu', {state:{correo:correo}})}}
        sx={{height:40, margin:2}}>Volver</Button>
        </Paper>
        </Grid>
    );
}

export default AdministrarPacientes