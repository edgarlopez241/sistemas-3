import { Avatar, Card, FormControl, Grid, Paper, Rating, TextField, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import moment from "moment";

const Feedback = ()=>{
    let location = useLocation();
    const {id, correo} = location.state;
    const navigate = useNavigate();
    const paperStyle = {padding:20, height:'90vh', width:1200, margin:'20px auto', backgroundColor:'white'};
    const avatarStyle = {backgroundColor:'white'};
    const fecha = moment().format('YYYY-MM-DD');
    const [feedback, setFeedback] = useState({comentario:"", calificacion:0, fecha_realizado:fecha});

    const handleChange = e=>{
        setFeedback({...feedback, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if (id){
            const res = await fetch(`http://localhost:4000/feedback/${id}`,
            {
                method: 'POST', body:JSON.stringify(feedback), 
                headers: { "Content-Type": "application/json" } 
            });
            const data = await res.text();
            if (data){
                alert("Enviado con exito");
                console.log(data);
            }
        }
    }
    return (
        <Grid justifyContent={"center"}>
        <Paper elevation={3} style={paperStyle}>
        <Grid  container direction="row" align="center">
        <Avatar style={avatarStyle} alt="Logo" src="src/assets/nutrition.png" sx={{ width: 56, height: 56 }}/>
        <Typography sx={{flexGrow: 1}}>Feedback</Typography>
        </Grid>
        <Card elevation={1} style={{ border: "1px solid green" }} sx={{margin:2}}>
            <form onSubmit={handleSubmit}>
            <Typography component="legend" sx={{margin:1}}>Rating</Typography>
            <Rating name="calificacion" value={parseInt(feedback.calificacion,10)}
            onChange={handleChange} sx={{margin:1}} size="large" />
            <FormControl sx={{ width: '93ch', alignContent:'center' }}>
            <TextField
            sx={{display:'block', margin:1}} label="Escriba su comentario"
            name="comentario"
            onChange={handleChange}
            multiline maxRows={2}
            fullWidth
            color="success"/>
            </FormControl>
            <Button variant="contained" color="success" type="submit" 
            sx={{margin:2}}>Guardar Feedback</Button>
            </form>
        </Card>
        <Button variant="contained" 
        onClick={()=>{navigate('/menu', {state:{correo:correo}})}}
        sx={{height:40, margin:3}}>Volver</Button>
        </Paper>
        </Grid>
    );
}

export default Feedback