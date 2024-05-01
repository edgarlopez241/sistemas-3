import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontSize: 20,
    fontFamily: 'Roboto',
  },
});

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const role = 'P';
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const validateName = (name) => {
    if (!name) return false;
    const re = /^[A-Za-z\-]+$/;
    return re.test(name);
  };

  const validatePhoneNumber = () => {
    if (!phoneNumber) return false;
    const re = /^[0-9]+$/;
    return re.test(phoneNumber);
  };

  const validateBirthDate = () => {
    if (!birthDate) return false;
    const today = new Date();
    const birth = new Date(birthDate);
    const age = today.getFullYear() - birth.getFullYear();
    return age >= 15;
  };

  const validateGender = () => {
    return gender !== '';
  };

  const validateEmail = () => {
    if (!email) return false;
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = () => {
    if (!password) return false;
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return re.test(password);
};

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nombre"
            label="Nombre"
            name="nombre"
            autoFocus
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#ffffff' } } }}
            InputLabelProps={{ style: { color: '#ffffff' } }}
            error={submitted && !validateName(firstName)}
            helperText={submitted && !validateName(firstName) ? (firstName ? 'El nombre solo debe contener letras' : 'El campo nombre no puede estar vacío') : ''}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="apellido"
            label="Apellido"
            name="apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#ffffff' } } }}
            InputLabelProps={{ style: { color: '#ffffff' } }}
            error={submitted && !validateName(lastName)}
            helperText={submitted && !validateName(lastName) ? (lastName ? 'Apellido solo debe contener letras' : 'El campo apellido no puede estar vacío') : ''}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#ffffff' } } }}
            InputLabelProps={{ style: { color: '#ffffff' } }}
            error={submitted && !validateEmail()}
            helperText={submitted && !validateEmail() ? (email ? 'Formato de correo inválido' : 'El campo correo electrónico no puede estar vacío') : ''}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#ffffff' } } }}
            InputLabelProps={{ style: { color: '#ffffff' } }}
            error={submitted && !validatePassword()}
            helperText={submitted && !validatePassword() ? (password ? 'La contraseña debe tener al menos 8 caracteres, contener al menos una letra mayúscula, una letra minúscula, un número, y un carácter especial' : 'El campo contraseña no puede estar vacío') : ''}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="birthDate"
            label="Fecha de Nacimiento"
            name="birthDate"
            type="date"
            InputLabelProps={{
              shrink: true,
              style: { color: '#ffffff' }
            }}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#ffffff' } } }}
            error={submitted && !validateBirthDate()}
            helperText={submitted && !validateBirthDate() ? (birthDate ? 'Debes tener al menos 15 años de edad para registrarte' : 'El campo fecha de nacimiento no puede estar vacío') : ''}
          />
          <FormControl variant="outlined" margin="normal" required fullWidth error={submitted && !validateGender()}>
  <InputLabel id="gender-label" style={{ color: '#ffffff' }}>Género</InputLabel>
  <Select
    labelId="gender-label"
    id="gender"
    value={gender}
    onChange={(e) => setGender(e.target.value)}
    label="Género"
    sx={{ 
      '& .MuiOutlinedInput-root': { 
        '& fieldset': { borderColor: '#ffffff' },
        '&:hover fieldset': { borderColor: '#ffffff' },
        '&.Mui-focused fieldset': { borderColor: '#ffffff' },
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ffffff',
      },
    }}
  >
    <MenuItem value={'M'} style={{ color: '#000000' }}>Masculino</MenuItem>
    <MenuItem value={'F'} style={{ color: '#000000' }}>Femenino</MenuItem>
  </Select>
  {submitted && !validateGender() && <p style={{ color: 'red' }}>Por favor, selecciona un género.</p>}
</FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            label="Telefono"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#ffffff' } } }}
            InputLabelProps={{ style: { color: '#ffffff' } }}
            error={submitted && !validatePhoneNumber()}
            helperText={submitted && !validatePhoneNumber() ? (phoneNumber ? 'El teléfono solo debe contener números' : 'El campo teléfono no puede estar vacío') : ''}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;