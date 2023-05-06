import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '64px', bgcolor: 'grey.900', color: 'white', }}>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} SHOPING CART BY ZXX
      </Typography>
    </Box>
  );
};

export default Footer;