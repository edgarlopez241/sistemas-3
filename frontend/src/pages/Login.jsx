import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'

const Login = () => {
    const paperStyle = { padding: 20, height: '80vh', width: 300, margin: '20px auto', backgroundColor: '#AAB28C', color: 'white' };
    const avatarStyle = { backgroundColor: 'white' };
    const [usuario, setUsuario] = useState({ correo: "", password: "" });
    const [validado, setValidado] = useState("");
    const navigate = useNavigate();

    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validEmail.test(usuario.correo)) {
            const res = await fetch(`http://localhost:4000/usuario/validar/${usuario.correo}`, {
                method: 'POST', body: JSON.stringify(usuario),
                headers: { "Content-Type": "application/json" }
            });

            try {
                const data = await res.json();
                console.log(data);
                const { match } = data;
                if (match) {
                    localStorage.setItem('correo', usuario.correo);
                    // Obtener el id del usuario
                    const idRes = await fetch(`http://localhost:4000/usuario/${usuario.correo}`);
                    const idData = await idRes.json();
                    const userId = idData.id_usuario;
                    localStorage.setItem('userId', userId);
                    // Obtener la suscripción del usuario
                    const subRes = await fetch(`http://localhost:4000/susbscripcion/${idData.id_usuario}`);
                    const subData = await subRes.json();
                    if (!subData.id_subscripcion) { // Comprueba si subData.id no existe
                        // Si el usuario no tiene una suscripción, redirigirlo a la página de suscripción
                        navigate("/subscription");
                    } else {
                        // Si el usuario ya tiene una suscripción, redirigirlo a la página de inicio
                        navigate('/Menu');
                    }
                }
                else {
                    setValidado("Usuario o contraseña no valido");
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleChange = e => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <h2>Inicio de sesión</h2>
                <Grid align='center'>
                    <Typography variant='5'>My Health</Typography>
                    <h6>Nutrition Subscription Service</h6>
                    <Avatar style={avatarStyle} alt="Logo" src="src/assets/nutrition.png" sx={{ width: 56, height: 56 }} />
                    <form onSubmit={handleSubmit}>
                        <TextField variant="outlined" label="Correo electronico"
                            sx={{ display: 'block', margin: "0.5rem 0" }}
                            name="correo"
                            onChange={handleChange} />
                        <TextField variant="outlined" label="Contraseña" type="password"
                            sx={{ display: 'block', margin: "0.5rem 0" }}
                            name="password"
                            onChange={handleChange} />
                        <Button variant="contained" color="success" type="submit">Iniciar seción</Button>
                    </form>
                    <Link>No tiene una cuenta? Registrese!</Link>
                    <div>{validado}</div>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login