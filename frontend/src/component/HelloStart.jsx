import React,{useState} from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/TestPage.css'
import store from "../store";
import {modalActive} from '../actions'

const HelloStart = () => {
    const theme = createTheme({
        palette: {
          neutral: {
            main: '#354461',
            contrastText: '#fff',
          },
        },
      })

    const clickBtn = () => {
        store.dispatch(modalActive())
    }

    const [active, setActive] = useState(false)

    return(
            <div className={active ? 'start-logo' : 'start-logo unactive'}>
                <p>Qize</p>
                <ThemeProvider theme={theme}>
                    <Button 
                        variant="contained"
                        color='neutral'
                        onClick={clickBtn}
                        sx={{ width: '15%', height: '50px', marginTop: '20px'}}
                    >выбрать опрос</Button>
                </ThemeProvider>
        </div>
    )
}

export default HelloStart;