import React from "react";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import '../styles/QizeFirst.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const QizeFirst = () => {

    const [age, setAge] = React.useState('');
    const [active, setActive] = React.useState(true)
    
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const theme = createTheme({
        palette: {
          neutral: {
            main: '#d9c4b4',
            contrastText: '#fff',
          },
        },
      })
      
    return(
        <div className={active ? 'qize-container' : 'unactive qize-container'}>
            <h1>Qize First</h1>
            <ThemeProvider theme={theme}>
                <Typography variant="subtitle2" align='center' sx={{fontSize: '16px', marginTop: '20px'}}>
                    Вопрос 1. Ваше имя?
                </Typography>
                <TextField 
                    id="first" 
                    variant="outlined"
                    sx={{width: '500px', marginTop: '10px'}}
                    color='neutral'
                />
                <Typography variant="subtitle2" align='center' sx={{fontSize: '16px', marginTop: '20px'}}>
                    Вопрос 2. Ваша фамилия?
                </Typography>
                <TextField 
                    id="second"  
                    variant="outlined"
                    sx={{width: '500px', marginTop: '10px',}}
                    color='neutral' 
                />
                <Typography variant="subtitle2" align='center' sx={{fontSize: '16px', marginTop: '20px'}}>
                    Вопрос 3. Ваш Email?
                </Typography>
                <TextField 
                    id="third" 
                    variant="outlined"
                    sx={{width: '500px', marginTop: '10px'}}
                    color='neutral' 
                />
                <Typography variant="subtitle2" align='center' sx={{fontSize: '16px', marginTop: '20px'}}>
                    Вопрос 3. Ваш пол?
                </Typography>
                <FormControl sx={{width: '200px', marginTop: '10px'}}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                        color='neutral'
                    >
                        <MenuItem value={10}>Мужской</MenuItem>
                        <MenuItem value={20}>Женсикий</MenuItem>
                        <MenuItem value={30}>Пока в раздумьях</MenuItem>
                    </Select>
                </FormControl>
            </ThemeProvider>
        </div>
    )
}

export default QizeFirst;