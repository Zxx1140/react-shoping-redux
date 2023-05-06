import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:'white', color:'black'  }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Button component={Link} to={`/`} color="inherit" sx={{ mr: 2, textAlign: 'center',fontSize: 24 } }>HOME</Button>
          <Button color="inherit" sx={{ textAlign: 'center' ,fontSize: 24}}>STORE</Button>
          <Button color="inherit" sx={{ textAlign: 'center'}}> <ShoppingCartIcon/>  </Button>
       </Typography>
       </Toolbar> 
      </AppBar> 
    </Box>
  );
}