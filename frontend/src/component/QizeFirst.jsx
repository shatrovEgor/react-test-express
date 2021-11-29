import React from "react";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import '../styles/QizeFirst.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {connect} from 'react-redux'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

const mapStateToProps = state => {
    return {
        indicate: state.modalQize
    }
}

const QizeFirst = ({indicate}) => {

    const [age, setAge] = React.useState('');
    const [check, setCheck] = React.useState({
        Margherita: false,
        Marinara: false,
        QuattroStagioni: false,
        Carbonara: false,
        FruttiDiMare: false,
        QuattroFormaggi: false,
        hamPizza: false,
        Havai: false,

      });

    const handleChange2 = (event) => {
        setCheck({
        ...check,
        [event.target.name]: event.target.checked,
    });
    };

    const { Margherita, Marinara, QuattroStagioni, Carbonara, FruttiDiMare, QuattroFormaggi, hamPizza, Havai } = check;
    
    const handleChange = (event) => {
        setAge(event.target.value);
    };

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
        <div className={indicate ? 'qize-container' : 'unactive qize-container'}>
            <h1>Your favorite pizza</h1>
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
                        <MenuItem value={20}>Женский</MenuItem>
                        <MenuItem value={30}>Пока в раздумьях</MenuItem>
                    </Select>
                </FormControl>
                <FormControl component="fieldset" sx={{ marginTop: '20px'}}>
                <Typography variant="subtitle2" align='center' sx={{fontSize: '16px', marginTop: '20px', marginBottom: '10px'}}>
                    Вопрос 4. Какое тесто предпочитаете?
                </Typography>
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group" >
                        <FormControlLabel value="thin" control={<Radio color="myblue"/>} label="Тонкое"/>
                        <FormControlLabel value="thick" control={<Radio color="myblue"/>} label="Толстое" />
                        <FormControlLabel value="medium" control={<Radio color="myblue"/>} label="Среднее" />
                    </RadioGroup>
                </FormControl>
                
                <Typography variant="subtitle2" align='center' sx={{fontSize: '16px', marginTop: '20px'}}>
                    Вопрос 5. Выберете несколько ваших любимых вкусов?
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox checked={Margherita} onChange={handleChange2} name="Margherita" color="neutral"/>
                                }
                                label="Маргарита (Томатный соус, моцарелла и орегано)"
                                sx={{marginBottom: '10px'}}
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={Marinara} onChange={handleChange2} name="Marinara" color="neutral"/>
                                }
                                label="Маринара (Томатный соус, чеснок и базилик)"
                                sx={{marginBottom: '10px'}}
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={QuattroStagioni} onChange={handleChange2} name="QuattroStagioni" color="neutral"/>
                                }
                                label="Четыре сезона (Моцарелла, грибы, ветчина, артишоки, оливки)"
                                sx={{marginBottom: '10px'}}
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={Carbonara} onChange={handleChange2} name="Carbonara" color="neutral" />
                                }
                                label="Карбонара (Томатный соус, моцарелла, пармезан, яйца, бекон)"
                                sx={{marginBottom: '10px'}}
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={FruttiDiMare} onChange={handleChange2} name="FruttiDiMare" color="neutral"/>
                                }
                                label="Пицца с морепродуктами (Томатный соус и морепродукты)"
                                sx={{marginBottom: '10px'}}
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={QuattroFormaggi} onChange={handleChange2} name="QuattroFormaggi" color="neutral"/>
                                }
                                label="Четыре сыра (Моцарелла, пармезан, сыр горгонзола, артишоки)"
                                sx={{marginBottom: '10px'}}
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={hamPizza} onChange={handleChange2} name="hamPizza" color="neutral"/>
                                }
                                label="Ветчина грибы (Томатный соус, моцарелла, ветчина, грибы)"
                                sx={{marginBottom: '10px'}}
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={Havai} onChange={handleChange2} name="Havai" color="neutral"/>
                                }
                                label="Гавайская (Томатный соус, моцарелла, куринная грудка, ананас)"
                                sx={{marginBottom: '10px'}}
                            />
                            </FormGroup>
                    </FormControl>
                </Box>
                <Typography variant="subtitle2" align='center' sx={{fontSize: '16px'}}>
                    Вопрос 6. Есть ли у вас свой(фирменный) рецепт пиццы?
                </Typography>
                 <FormControlLabel  control={<Checkbox/>} label="Конечно!" />
                 <TextareaAutosize
                    aria-label="minimum height"
                    minRows={6}
                    placeholder="Поделитесь?"
                    style={{ width: 500 , backgroundColor: 'aliceblue', fontSize: '16px' }}
                /> 
                    <Button 
                        variant="contained"
                        color='myblue'
                        sx={{ width: '50%', height: '50px', marginTop: '50px', marginBottom: '20px'}}
                    >закончить опрос</Button>
            </ThemeProvider>
        </div>
    )
}

export default connect(mapStateToProps)(QizeFirst);