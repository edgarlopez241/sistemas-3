import { Avatar, Button, Card, FormControl, Grid, Paper, TextField, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

const AdministrarPaciente = ()=>{
    let location = useLocation();
    const {id_usuario, correo} = location.state;
    const navigate = useNavigate();
    const paperStyle = {padding:20, height:'120vh', width:1200, margin:'20px auto', backgroundColor:'white'};
    const avatarStyle = {backgroundColor:'white'};
    const [testPaciente, setTestPaciente] = useState({fecha:"",habitos:"",metas:"",necesidades:""});
    const [descripcionPlan, setDescripcionPlan] = useState({descripcion:""});
    const [seguimiento, setSeguimiento] = useState({descripcion_analisis:"",fecha_seguimiento:""});

    const handlePlan = e =>{
        setDescripcionPlan({...descripcionPlan, [e.target.name]: e.target.value});
    }

    const handleSeguimiento = e =>{
        setSeguimiento({...seguimiento, [e.target.name]: e.target.value});
    }

    const handleSubmitSeguimiento = async(e)=>{
        e.preventDefault();
        if (seguimiento.descripcion_analisis !== "" && seguimiento.fecha_seguimiento !== "") {
            const res = await fetch(`http://localhost:4000/seguimiento/${id_usuario}`,
            {
                method: 'POST', body:JSON.stringify(seguimiento), 
                headers: { "Content-Type": "application/json" } 
            });
            try {
                const data = await res.text();
                if (data){
                    alert("Enviado con exito");
                    console.log(data);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleSubmitPlan = async(e)=>{
        e.preventDefault();
        if (descripcionPlan.descripcion !== ""){
            const res = await fetch(`http://localhost:4000/plan/${id_usuario}`,
            {
                method: 'POST', body:JSON.stringify(descripcionPlan), 
                headers: { "Content-Type": "application/json" } 
            });
            const data = await res.text();
            if (data){
                alert("Enviado con exito");
                console.log(data);
            }
        }
    }
    const obtenerTestPaciente = async()=>{
        if (id_usuario) {
            const res = await fetch(`http://localhost:4000/testnutricional/${id_usuario}`,
            {headers:{ "Content-Type": "application/json" }});
            const data = await res.json();
            const { fecha_realizado, habitos_alimenticios, metas_nutricionales, necesidades, message} = data[0];
            if (!message) {
                const fechaActual = `Fecha realizado: ${fecha_realizado}`;
                const habitosActual = `Habitos alimenticios: ${habitos_alimenticios}`;
                const metasActual = `Metas nutricionales: ${metas_nutricionales}`;
                const necesidadesActual = `Necesidades: ${necesidades}`;
                setTestPaciente({fecha:fechaActual, habitos:habitosActual, metas:metasActual, necesidades:necesidadesActual});
            };
        }
    }
    useEffect(()=>{
        obtenerTestPaciente();
    },[]);

    return (
        <Grid justifyContent={"center"}>
        <Paper elevation={3} style={paperStyle}>
        <Grid  container direction="row" align="center">
        <Avatar style={avatarStyle} alt="Logo" src="src/assets/nutrition.png" sx={{ width: 56, height: 56 }}/>
        <Typography sx={{flexGrow: 1}}>Gestión de paciente</Typography>
        </Grid>
        <Card elevation={1} style={{ border: "1px solid green" }} sx={{margin:2}}>
        <Typography variant="h6" sx={{margin:1}}>Resultados del test del paciente</Typography>
        <Typography variant="body1" sx={{margin:1}}>{testPaciente.fecha}</Typography>
        <Typography variant="body1" sx={{margin:1}}>{testPaciente.habitos}</Typography>
        <Typography variant="body1" sx={{margin:1}}>{testPaciente.metas}</Typography>
        <Typography variant="body1" sx={{margin:1}}>{testPaciente.necesidades}</Typography>
        </Card>
        <Card elevation={1} style={{ border: "1px solid green" }} sx={{margin:2}}>
        <form onSubmit={handleSubmitPlan}>
        <FormControl sx={{ width: '93ch', alignContent:'center' }} >
        <TextField variant="outlined" label="Transcriba el plan nutricional para el paciente" 
                sx={{display:'block', margin:1}}
                name="descripcion"
                onChange={handlePlan}
                multiline maxRows={2}
                fullWidth
                color="success"/>
        </FormControl>
        <Button variant="contained" color="success" type="submit" 
        sx={{margin:2}}>Guardar plan</Button>
        </form>
        </Card>
        <Card elevation={1} style={{ border: "1px solid green" }} sx={{margin:2}}>
        <form onSubmit={handleSubmitSeguimiento}>
        <Grid container direction="row" align="center">
        <FormControl sx={{ width: '30ch' }}>
        <TextField label="Fecha para realizar seguimiento" 
            type="date" color="success"
            sx={{margin:2}}
            name="fecha_seguimiento"
            onChange={handleSeguimiento}/>
        </FormControl>
        <FormControl sx={{ width: '62ch' }} >
        <TextField label="Escriba la descripción para el seguimiento"
            sx={{ margin:2}} color="success"
            name="descripcion_analisis"
            onChange={handleSeguimiento}/>
        </FormControl>
        </Grid>
        <Button variant="contained" color="success" type="submit" 
        sx={{margin:2}}>Guardar seguimiento</Button>
        </form>
        </Card>
        <Button variant="contained" 
        onClick={()=>{navigate('/menu', {state:{correo:correo}})}}
        sx={{height:40, margin:3}}>Volver</Button>
        </Paper>
        </Grid>
    );
}

export default AdministrarPaciente