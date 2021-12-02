import React from "react";
import '../styles/ModalEndQize.css'
import { connect } from "react-redux";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import store from "../store";
import {modalUnActiveQzEnd, modalActiveHel} from '../actions'

const mapStateToProps = state => {
    return {
        active: state.modalQizeEnd,
        result: state.saveQize.qizeAnswer
    }
  }
  
const ModalEndQize = ({active, result}) => {

    const clickChange = () => {
        store.dispatch(modalUnActiveQzEnd())
        store.dispatch(modalActiveHel())
    }

    const theme = createTheme({
        palette: {
          neutral: {
            main: '#354461',
            contrastText: '#FFFFFF',
          },
        },
      })

    return(
        <div className={active ? 'modal-end' : 'modal-end unactive'}>
            <div className="modal-end-content" onClick={e => e.stopPropagation()}>
                <h2>Ваш результат:</h2>
                <ThemeProvider theme={theme}>
                    <p id='answer'>{result}</p>
                    <Button
                        variant="contained"
                        onClick={clickChange}
                        color='neutral'
                        sx={{ width: '50%', height: '61px', borderRadius: '20px', marginTop: '20px', marginBottom: '20px'}}
                    >
                        Следующий тест
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(ModalEndQize);