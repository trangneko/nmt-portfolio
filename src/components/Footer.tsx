import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
      <footer className="flex min-h-screen flex-col items-center justify-between p-24">
        <Box sx={{textAlign: 'center', p: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
      <Typography variant="body2">© 2024 Lucide's playground. All rights reserved.</Typography>
    </Box>
      </footer>
    );
  }