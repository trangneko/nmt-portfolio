import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>Contact Me</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Email" variant="outlined" />
        <TextField label="Message" multiline rows={4} variant="outlined" />
        <Button variant="contained" color="primary">Send</Button>
      </Box>
    </Container>
  );
};

export default Contact;
