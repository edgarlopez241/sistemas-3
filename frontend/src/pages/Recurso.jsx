import { Button, Grid, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom'; // Cambiado de useHistory a useNavigate

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

const paperStyle = { padding: 20, height: '40vh', width: 400, margin: '20px auto', backgroundColor: '#AAB28C', color: 'white' };
const buttonStyle = { marginTop: '1rem' };

const NewPage = () => {
  const navigate = useNavigate(); // Cambiado de history a navigate

  const handleClick = async () => {
    const id_usuario = localStorage.getItem('userId');
    const nombre_recurso = 'Consejos sobre: La nutrición básica';
    const enlace_recurso = 'https://youtu.be/H8Z6jLxV38U?si=YuOuGy-ORqWUzb-E';
    const estatus_recurso = 'A';

    // Primero, verifica si el recurso ya existe
    const response = await fetch(`http://localhost:4000/recurso/${id_usuario}/${nombre_recurso}`);
    let data = [];

    if (response.ok) {
        // Si la respuesta fue exitosa, intenta leer el cuerpo de la respuesta
        data = await response.json();
    }

    if (data.length === 0) {
        // Si el recurso no existe, inserta el nuevo recurso
        const postResponse = await fetch(`http://localhost:4000/recurso/${id_usuario}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_usuario,
                nombre_recurso,
                enlace_recurso,
                estatus_recurso,
            }),
        });

        const postData = await postResponse.json();

        if (!postResponse.ok || postData.rowCount === 0) {
            // Si la solicitud POST falla o si el recurso no fue creado, lanza un error
            throw new Error('Error al insertar el recurso');
        }
    }

    console.log(data); // Usa la variable data en lugar de intentar leer la respuesta de nuevo

    // Abre el enlace recurso en una nueva pestaña
    window.open(enlace_recurso, '_blank');
};

const handleClick2 = async () => {
    const id_usuario = localStorage.getItem('userId');
    const nombre_recurso = 'Alimentación Saludable';
    const enlace_recurso = 'https://youtu.be/z9ov3C7XM3o?si=7jwK0GW3rQdFXP_7'; // Cambia esto al nuevo enlace
    const estatus_recurso = 'A';

    // Primero, verifica si el recurso ya existe
    const response = await fetch(`http://localhost:4000/recurso/${id_usuario}/${nombre_recurso}`);
    let data = [];

    if (response.ok) {
        // Si la respuesta fue exitosa, intenta leer el cuerpo de la respuesta
        data = await response.json();
    }

    if (data.length === 0) {
        // Si el recurso no existe, inserta el nuevo recurso
        const postResponse = await fetch(`http://localhost:4000/recurso/${id_usuario}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_usuario,
                nombre_recurso,
                enlace_recurso,
                estatus_recurso,
            }),
        });

        const postData = await postResponse.json();

        if (!postResponse.ok || postData.rowCount === 0) {
            // Si la solicitud POST falla o si el recurso no fue creado, lanza un error
            throw new Error('Error al insertar el recurso');
        }
    }

    console.log(data); // Usa la variable data en lugar de intentar leer la respuesta de nuevo

    // Abre el enlace recurso en una nueva pestaña
    window.open(enlace_recurso, '_blank');
};

const handleClick3 = async () => {
    const id_usuario = localStorage.getItem('userId');
    const nombre_recurso = 'Educación Alimentaria y Nutricional';
    const enlace_recurso = 'https://cesni-biblioteca.org/archivos/Libro%20docente%202.pdf'; // Cambia esto al nuevo enlace
    const estatus_recurso = 'A';

    // Primero, verifica si el recurso ya existe
    const response = await fetch(`http://localhost:4000/recurso/${id_usuario}/${nombre_recurso}`);
    let data = [];

    if (response.ok) {
        // Si la respuesta fue exitosa, intenta leer el cuerpo de la respuesta
        data = await response.json();
    }

    if (data.length === 0) {
        // Si el recurso no existe, inserta el nuevo recurso
        const postResponse = await fetch(`http://localhost:4000/recurso/${id_usuario}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_usuario,
                nombre_recurso,
                enlace_recurso,
                estatus_recurso,
            }),
        });

        const postData = await postResponse.json();

        if (!postResponse.ok || postData.rowCount === 0) {
            // Si la solicitud POST falla o si el recurso no fue creado, lanza un error
            throw new Error('Error al insertar el recurso');
        }
    }

    console.log(data); // Usa la variable data en lugar de intentar leer la respuesta de nuevo

    // Abre el enlace recurso en una nueva pestaña
    window.open(enlace_recurso, '_blank');
};

  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar alt="Logo" src="src/assets/nutrition.png" sx={{ width: 56, height: 56 }} />
            <Typography variant='h4'>Recursos del Plan Gratuito </Typography>
            <Button variant="contained" color="success" style={buttonStyle} onClick={handleClick}>Consejos sobre la nutrición básica</Button>
            <Button variant="contained" color="success" style={buttonStyle} onClick={handleClick2}>Alimentación Saludable</Button>
            <Button variant="contained" color="success" style={buttonStyle} onClick={handleClick3}>Educación alimentaria y nutricional</Button>
          </Grid>
        </Paper>
      </Grid>
    </ThemeProvider>
  )
}

export default NewPage;