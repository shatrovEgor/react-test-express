import React from "react";
import '../styles/Registration.css'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { reduxForm , Field } from "redux-form";
import {renderTextField, validate } from "../forForm/validationReg"


const Registration = ({indicate, setIndicate}, props) => {

    const { handleSubmit, pristine, submitting, invalid } = props
    const theme = createTheme({
        palette: {
          neutral: {
            main: '#354461',
            contrastText: '#FFFFFF',
          },
        },
      })

    return(
        <div className={indicate ? 'reg-container' : 'reg-container unactive'} onClick={() => setIndicate(false)}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
            <h1>Sing Up</h1>
            <form onSubmit={handleSubmit} className="login_fom">
                <ThemeProvider theme={theme}>
                    <Field
                        name="username"
                        component={renderTextField}
                        placeholder='Email'
                        data-testid="email-first"
                    />
                    <Field
                        name="password"
                        component={renderTextField}
                        placeholder='Password'
                        data-testid="password-first"
                    />
                    <Field
                        name="password_rep"
                        component={renderTextField}
                        placeholder='Repeat password'
                        data-testid="password-first"
                    />
                        <Button 
                            disabled={invalid || pristine || submitting}
                            variant="contained"
                            type="submit"
                            color='neutral'
                            sx={{ width: '80%', height: '61px', borderRadius: '40px', marginTop: '20px'}}
                        >зарегистрироваться</Button>             
                </ThemeProvider>
            </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'registration',
    validate,
})(Registration);