import { Button, Paper, Grid, Avatar, Typography, TextField, FormControl, Container, Select, MenuItem, InputLabel } from "@mui/material";
import { useState } from "react";

import { useLocation } from "react-router-dom"
import moment from 'moment';

const TestNutricional = ()=>{
    let location = useLocation();
    const {correo} = location.state;
    const fecha = moment().format('YYYY-MM-DD');
    const paperStyle = {padding:20, height:'90vh', width:1200, margin:'20px auto', backgroundColor:'white'};
    const avatarStyle = {backgroundColor:'white'};
    const [datos, setDatos] = useState({fecha_realizado: fecha, habitos_alimenticios:"", metas_nutricionales:"", necesidades:""});
    const [habitos, setHabitos] = useState({actividad:"", otro:""});
    const [metas, setMetas] = useState({altura:0, pesoActual:0, pesoMeta:0});
    const [necesidades, setNecesidades] = useState({medicamento:"", condicion:""});

    const handleHabitos = e =>{
        setHabitos({...habitos,[e.target.name]: e.target.value });

    }
    const handleMetas = e =>{
        setMetas({...metas, [e.target.name]: e.target.value});

    }
    const handleNecesidades = e =>{
        setNecesidades({...necesidades, [e.target.name]: e.target.value});

    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        let habitosActual = habitos.actividad + " " + habitos.otro;
        let metasActual = `altura ${metas.altura} peso actual ${metas.pesoActual} peso meta ${metas.pesoMeta}`;
        let necesidadesActual = necesidades.medicamento + " y condicion fisica " + necesidades.condicion;
        setDatos({fecha_realizado:fecha, habitos_alimenticios:habitosActual, metas_nutricionales:metasActual, necesidades:necesidadesActual});
        console.log(necesidades);
        console.log(habitos);
        console.log(metas);
        console.log(datos);
    }

    return(
       <Grid>
        <Paper elevation={3} style={paperStyle}>
        <Grid  container direction="column" align="center">
        <Avatar style={avatarStyle} alt="Logo" src="src/assets/nutrition.png" sx={{ width: 56, height: 56 }}/>
        <Typography>Test Nutricional Información Personal</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
            <Grid container direction="row">
            <TextField variant="outlined" label="Cuál es su altura?" 
                sx={{display:'block', margin:3}}
                name="altura"
                type="number"
                onChange={handleMetas}
            />
            <TextField variant="outlined" label="Cuál es su peso actual?" 
                sx={{display:'block', margin:3}}
                name="pesoActual"
                type="number"
                onChange={handleMetas}
            />
            <TextField variant="outlined" label="Cuál es su peso meta?" 
                sx={{display:'block', margin:3}}
                name="pesoMeta"
                type="number"
                onChange={handleMetas}
            />
            </Grid>
            <Grid container direction="row" alignItems='center'>
            <TextField variant="outlined" label="Está tomando algun medicamento?" 
                sx={{display:'block', margin:3}}
                name="medicamento"
                onChange={handleNecesidades}
            />
            <TextField variant="outlined" label="Tiene alguna condicion médica o alergia alimentaria?" 
                sx={{display:'block', margin:3}}
                name="condicion"
                onChange={handleNecesidades}
            />
            <InputLabel id="label">Cuál es su nivel de actividad fisica?</InputLabel>
            <Select defaultValue={"Moderado"} name="actividad" 
            labelId="label" onChange={handleHabitos}
            >
                <MenuItem value="Moderado">Moderado</MenuItem>
                <MenuItem value="Activo">Activo</MenuItem>
                <MenuItem value="Sedentario">Sedentario</MenuItem>
            </Select>
            </Grid>
            
            <FormControl sx={{ width: '80ch' }}>
            <TextField variant="outlined" label="Algo más sobre ti" 
                sx={{display:'block', margin:1}}
                name="otro"
                onChange={handleHabitos}
                multiline maxRows={2}
                fullWidth/>
                
            </FormControl>
            <Container>
            <Button variant="contained" color="success" type="submit">Guardar</Button>
            </Container>
        </form>
        </Paper>
       </Grid>
    )
}

export default TestNutricional