import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log({ firstName, lastName, email, password, gender, age });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <TextField variant="filled" required id="firstName" label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} error={submitted && firstName === ''} helperText={submitted && firstName === '' ? 'First name is required' : ''} InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff' } }} />
          <TextField variant="filled" required id="lastName" label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} error={submitted && lastName === ''} helperText={submitted && lastName === '' ? 'Last name is required' : ''} InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff' } }} />
          <TextField variant="filled" required id="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} error={submitted && email === ''} helperText={submitted && email === '' ? 'Email is required' : ''} InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff' } }} />
          <TextField variant="filled" required id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} error={submitted && password === ''} helperText={submitted && password === '' ? 'Password is required' : ''} InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff' } }} />
          <TextField variant="filled" required id="gender" label="Gender" select value={gender} onChange={(e) => setGender(e.target.value)} error={submitted && gender === ''} helperText={submitted && gender === '' ? 'Gender is required' : ''} SelectProps={{ native: true }} InputProps={{ style: { color: gender === '' ? '#000000' : '#ffffff', padding: '0.5em' } }} InputLabelProps={{ style: { color: '#ffffff' }, shrink: true }}>
            <option style={{ color: '#ffffff' }} value="">Select...</option>
            <option style={{ color: '#000000' }} value="male">Male</option>
            <option style={{ color: '#000000' }} value="female">Female</option>
          </TextField>
          <TextField variant="filled" required id="age" label="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} error={submitted && age === ''} helperText={submitted && age === '' ? 'Age is required' : ''} InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff' } }} />
          <Button variant="contained" type="submit">Register</Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;