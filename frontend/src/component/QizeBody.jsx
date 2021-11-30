import React from "react";
import { reduxForm , Field } from "redux-form";
import FormControl from '@mui/material/FormControl';
import '../styles/QizeFirst.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
    renderTextField, 
    renderSelectField, 
    validate, 
    renderRadioButton, 
    renderCheckbox,
    renderCheckbox2,
    renderCheckbox3,
    renderCheckbox4,
    renderCheckbox5,
    renderCheckbox6,
    renderCheckbox7,
    renderCheckbox8,
    renderTextAria

} from "../forForm/validationQize"

const QizeBody = (props) => {
    const { handleSubmit, pristine, submitting, invalid } = props 

    const theme = createTheme({
        palette: {
          neutral: {
            main: '#d9c4b4',
            contrastText: '#fff',
          },
          myblue: {
              main: '#354461',
              contrastText: '#fff'
          }
        },
      })

    return(
        <form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
            <Typography variant="subtitle2" align='center' sx={{fontSize: '16px', marginTop: '20px'}}>
                Вопрос 1. Ваше имя?
            </Typography>
            <Field
                name="name"
                component={renderTextField}
                data-testid="profile-name"
            />
            <Typography variant="subtitle2" align='center' sx={{fontSize: '16px', marginTop: '20px'}}>
                Вопрос 2. Ваша фамилия?
            </Typography>
            <Field
                name="surname"
                component={renderTextField}
                data-testid="profile-name"
            />
            <Typography variant="subtitle2" align='center' sx={{fontSize: '16px', marginTop: '20px'}}>
                Вопрос 3. Ваш пол?
            </Typography>
            <Field
                name="sex"
                component={renderSelectField}
                data-testid="profile-name"
            />
            <FormControl component="fieldset" sx={{ marginTop: '20px'}}>
            <Typography variant="subtitle2" align='center' sx={{fontSize: '16px', marginTop: '20px', marginBottom: '10px'}}>
                Вопрос 4. Какое тесто предпочитаете?
            </Typography>
                    <Field
                    name="dough"
                    component={renderRadioButton}
                    data-testid="profile-name"
                />
            </FormControl>
            <Typography variant="subtitle2" align='center' sx={{fontSize: '16px', marginTop: '20px'}}>
                Вопрос 5. Выберете несколько ваших любимых вкусов
            </Typography>
            <Box sx={{ display: 'block' }}>
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormGroup>
                    <Field
                        name="margarita"
                        component={renderCheckbox}
                        data-testid="profile-name"
                    />
                    <Field
                        name="marinara"
                        component={renderCheckbox2}
                        data-testid="profile-name"
                    />
                    <Field
                        name="fourSeason"
                        component={renderCheckbox3}
                        data-testid="profile-name"
                    />
                    <Field
                        name="carbonara"
                        component={renderCheckbox4}
                        data-testid="profile-name"
                    />
                    <Field
                        name="fish"
                        component={renderCheckbox5}
                        data-testid="profile-name"
                    />
                    <Field
                        name="fourChees"
                        component={renderCheckbox6}
                        data-testid="profile-name"
                    />
                    <Field
                        name="hamMash"
                        component={renderCheckbox7}
                        data-testid="profile-name"
                    />
                    <Field
                        name="havai"
                        component={renderCheckbox8}
                        data-testid="profile-name"
                    />
                        </FormGroup>
                </FormControl>
            </Box>
            <Typography variant="subtitle2" align='center' sx={{fontSize: '16px'}}>
                Вопрос 6. Есть ли у вас свой(фирменный) рецепт пиццы?
            </Typography>
                <FormControlLabel  control={<Checkbox color='neutral'/>} label="Конечно!" />
            <Field
                name="textAria"
                component={renderTextAria}
                data-testid="profile-name"
            />
            <Button 
                disabled={invalid || pristine || submitting}
                type='submit'
                variant="contained"
                color='myblue'
                sx={{ width: '50%', height: '50px', marginTop: '50px', marginBottom: '20px'}}
            >закончить опрос</Button>
        </ThemeProvider>
        </form>
    )
}

export default reduxForm({
    form: 'qize',
    validate,
})(QizeBody);