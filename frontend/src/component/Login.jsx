import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router';
import { reduxForm , Field } from "redux-form";
import {renderTextField, validate } from "../forForm/validation"

const Login = (props) => {
    const { handleSubmit, pristine, submitting, invalid } = props
      let navigate = useNavigate();
  
  
      const theme = createTheme({
          palette: {
            neutral: {
              main: '#354461',
              contrastText: '#FFFFFF',
            },
          },
        })
  
      function hadleClick() {
          
      }
  
      return(
          <div className="login-container">
            <h1>LogIn:</h1>
          <form onSubmit={handleSubmit}>
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
                placeholder='password'
                data-testid="password-first"
              />
                <Button 
                    disabled={invalid || pristine || submitting}
                    variant="contained"
                    type="submit"
                    color='neutral'
                    sx={{ width: '90%', height: '61px', borderRadius: '40px', marginTop: '20px'}}
                >начать тестирование</Button>
            </ThemeProvider>
          </form>
          </div>
      )
  }
  
  export default reduxForm({
    form: 'login',
    validate,
  })(Login);