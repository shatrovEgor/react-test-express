import React from 'react'
import { TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const validate = values => {
    const errors = {}
    const requiredFields = [
      'name',
      'surname',
      'sex',
    ]
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Не заполнено'
      }
    })

    return errors
}

export const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      sx={{ marginTop: '20px', width: '500px'}}
      variant="outlined"
      color='neutral'
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )

  export const validName = value =>
    value && !/^[а-я ,.'-]+$/i.test(value)
      ? 'Некорректно введено имя'
      : undefined

  export const validSurname = value =>
  value && !/^[а-я ,.'-]+$/i.test(value)
    ? 'Некорректно введена фамилия'
    : undefined

  export const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
    <FormControl error={touched && error} sx={{width: '200px', marginTop: '10px'}}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        color='neutral'
        {...input}
        {...custom}
        inputProps={{
          name: 'sex',
        }}
      >
        <MenuItem value={'male'}>Мужской</MenuItem>
        <MenuItem value={'female'}>Женский</MenuItem>
        <MenuItem value={'undefined'}>Пока в раздумьях</MenuItem>
        {children}
      </Select>
    </FormControl>
  )

  export const renderRadioButton = ({ input, ...rest }) => (
      <RadioGroup row {...input} {...rest}>
        <FormControlLabel value="thin" control={<Radio color="myblue"/>} label="Тонкое" />
        <FormControlLabel value="thick" control={<Radio color="myblue"/>} label="Толстое" />
        <FormControlLabel value="medium" control={<Radio color="myblue"/>} label="Среднее" />
      </RadioGroup>
  )
  
  export const renderCheckbox = ({ input, label }) => (
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value ? true : false}
            onChange={input.onChange}
            color='neutral'
          />
        }
        label='Маргарита (Томатный соус, моцарелла и орегано)'
      />
  )

  export const renderCheckbox2 = ({ input, label }) => (
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value ? true : false}
            onChange={input.onChange}
            color='neutral'
          />
        }
        label='Маринара (Томатный соус, чеснок и базилик)'
      />
  )

  export const renderCheckbox3 = ({ input, label }) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
          color='neutral'
        />
      }
      label='Четыре сезона (Моцарелла, грибы, ветчина, артишоки, оливки)'
    />
)
export const renderCheckbox4 = ({ input, label }) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
          color='neutral'
        />
      }
      label='Карбонара (Томатный соус, моцарелла, пармезан, яйца, бекон)'
    />
)

export const renderCheckbox5 = ({ input, label }) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
          color='neutral'
        />
      }
      label='Пицца с морепродуктами (Томатный соус и морепродукты)'
    />
)

export const renderCheckbox6 = ({ input, label }) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
          color='neutral'
        />
      }
      label='Четыре сыра (Моцарелла, пармезан, сыр горгонзола, артишоки)'
    />
)

export const renderCheckbox7 = ({ input, label }) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
          color='neutral'
        />
      }
      label='Ветчина грибы (Томатный соус, моцарелла, ветчина, грибы)'
    />
)

export const renderCheckbox8 = ({ input, label }) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
          color='neutral'
        />
      }
      label='Гавайская (Томатный соус, моцарелла, куринная грудка, ананас)'
    />
)

export const renderTextAria = ({input, meta: { touched, error, warning }}) => (
    <div>
    <TextareaAutosize
        {...input}
        minRows={6}
        placeholder="Поделитесь?"
        style={{ width: 500 , backgroundColor: 'aliceblue', fontSize: '16px' }}
    /> 
    </div>
)