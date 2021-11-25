import React from "react";
import '../styles/TestPage.css'
import Navbar from "../component/Navbar";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const TestPage = () => {
    const theme = createTheme({
        palette: {
          neutral: {
            main: '#354461',
            contrastText: '#fff',
          },
        },
      })

      function hadleClick() {
        console.log('abbo');
    }

    return(
        <div className='container-test-main'>
            <Navbar/>
            <div className='container-test'>
                <p>TEST START</p>
                <ThemeProvider theme={theme}>
                    <Button 
                        variant="contained"
                        onClick={hadleClick}
                        color='neutral'
                        sx={{ width: '15%', height: '50px', marginTop: '20px'}}
                    >выбрать тест</Button>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default TestPage;