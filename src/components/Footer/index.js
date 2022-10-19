import { Box, Link, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { theme } from '../../utils';

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>

      <Box
        sx={{
          flexGrow: 1, alignItems: 'center', position: 'fixed',
          bottom: 0, width: '100%'
        }}
        bgcolor={theme.palette.primary.main}
        color={theme.palette.secondary.light}
      >
        <Typography variant="body2" sx={{ py: 2 }}>
          {'Copyright © '}
          <Link color="inherit" href="#" underline="none">
            News Portal
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box >
    </ThemeProvider>
  );
}

export default Footer;
