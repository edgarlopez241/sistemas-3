import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { List, ListItem } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#AAB28C',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

const Subscription = () => {
  const paperStyle = { padding: 20, height: '60vh', width: 450, margin: '20px auto', backgroundColor: '#AAB28C', color: 'white' };
  const buttonStyle = { marginTop: '1rem' };
  const [subscription, setSubscription] = useState(null);
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();
  const correo = localStorage.getItem('correo');


  const handleSubscribe = async () => {
    if (!userId) {
      console.error('userId is not defined');
      return;
    }

    const subscriptionData = {
      id_usuario: userId,
      tipo_subscripcion: 'Gratuito',
      modalidad_temporal: 'No Aplica',
      fecha_vencimiento: '2124-12-31',
      estatus_subscripcion: 'A'
    };

    const res = await fetch(`http://localhost:4000/susbscripcion/${userId}`, {
      method: 'POST',
      body: JSON.stringify(subscriptionData),
      headers: { "Content-Type": "application/json" }
    });

    if (!res.ok) {
      console.error('Failed to subscribe');
      return;
    }

    let data;
    try {
      data = await res.json();
    } catch (error) {
      console.error('Failed to parse JSON response', error);
      return;
    }

    console.log('Success:', data);
    setSubscription(data);
    navigate('/Menu', { state: { correo: correo } });
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar alt="Logo" src="src/assets/nutrition.png" sx={{ width: 56, height: 56 }} />
            <Typography variant='h4'>Plan Gratuito para Nutrition Subscribe</Typography>
            <Typography variant='h6'>evaluación nutricional inicial, Plan de alimentación de muestra</Typography>
            <Typography variant='h2'>$0</Typography>
            <Paper style={{ backgroundColor: '#AAB28C', color: 'white', padding: '1rem', marginTop: '1rem', border: '3px solid white' }}>
              <List>
                <ListItem>
                  <Typography variant='body1'>Evaluación nutricional personalizada</Typography>
                </ListItem>
                <Divider />
                <ListItem>
                  <Typography variant='body1'>Plan de alimentación de muestra</Typography>
                </ListItem>
              </List>
            </Paper>
            <Button variant="contained" color="success" style={buttonStyle} onClick={handleSubscribe}>Suscribirse</Button>
          </Grid>
        </Paper>
      </Grid>
    </ThemeProvider>
  )
}

export default Subscription;