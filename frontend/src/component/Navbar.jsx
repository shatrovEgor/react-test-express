import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router';
import { connect } from "react-redux";
import store from "../store";
import {modalActive, modalUnActive} from '../actions'

const mapStateToProps = state => {
    return {
        indicate: state.modal
    }
}


const  Navbar = ({indicate}) => {
    let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuClick = () => {
      if(indicate) {
          store.dispatch(modalUnActive())
      } else {
          store.dispatch(modalActive())
      }
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseProfile = () => {
    setAnchorEl(null);
    navigate('/profile')
  };

  const handleCloseExit = () => {
    setAnchorEl(null);
    navigate('/')
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: '#354461',
        contrastText: '#fff',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
        <div className={indicate ? 'modal' : 'modal unactive'}>
            <p>Выберите опрос:</p>
            <ul>
                <li>Favorite PIZZA</li>
                <li>Back or front?</li>
                <li>etc...</li>
            </ul>
        </div>
    <Box sx={{ flexGrow: 1, width: '100vw' }}>
      <AppBar position="static" color="neutral">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={menuClick}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          {
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleCloseProfile}>Профиль</MenuItem>
                <MenuItem onClick={handleCloseExit}>Выйти</MenuItem>
              </Menu>
            </div>
          }
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}

export default connect(mapStateToProps)(Navbar)
