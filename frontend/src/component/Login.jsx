import React, { useState } from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { reduxForm , Field } from "redux-form";
import {renderTextField, validate, maxValue } from "../forForm/validation"
import Registration from "./Registration";
import axios from "axios";

const Login = (props) => {
    const { handleSubmit, pristine, submitting, invalid } = props
    const [active , setActive] = useState(false)
  
      const theme = createTheme({
          palette: {
            neutral: {
              main: '#354461',
              contrastText: '#FFFFFF',
            },
          },
        })

        const clickChange = () => {
          setActive(true)
        }

        const subReg = (dataReg) => {
          console.log(dataReg);
          axios.post('http://localhost:3001/auth/registration', dataReg)
          .then(function (res) {
            console.log(res);
            if(res.data.registration) {
              alert(res.data.message)
              setActive(false)
            } else {
              alert(res.data.message)
            }

          })
        }
  
      return(
        <div className="login-container">
          <Registration indicate={active} setIndicate={setActive} onSubmit={subReg}/>
          <h1>LogIn:</h1>
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
                validate={maxValue}
                data-testid="password-first"
              />
                <Button 
                    disabled={invalid || pristine || submitting}
                    variant="contained"
                    type="submit"
                    color='neutral'
                    sx={{ width: '90%', height: '61px', borderRadius: '40px', marginTop: '20px'}}
                >начать тестирование</Button>
                <div className="text">
                  <p id='reg'>Don't have an account? </p><p id='create' onClick={clickChange}>Create</p>
                </div>                
            </ThemeProvider>
          </form>
        </div>
      )
  }
  
  export default reduxForm({
    form: 'login',
    validate,
  })(Login);