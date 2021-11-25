import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Navbar = () => {
    const theme = createTheme({
        palette: {
          neutral: {
            main: '#354461',
            contrastText: '#fff',
          },
        },
      })

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{ width:"100vw" }}>
                <AppBar 
                    position="static"
                    color="neutral"
                    >
                <Toolbar variant="regular">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                    </IconButton>
                </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}

export default Navbar;