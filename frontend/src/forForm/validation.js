import React from 'react'
import { TextField } from "@mui/material";

export const validate = values => {
    const errors = {}
    const requiredFields = [
      'username',
      'password',
    ]
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Не заполнено'
      }
    })
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
        errors.username = 'Некорректный формат Email'
      }
    return errors
}

export const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      sx={{ marginTop: '20px'}}
      fullWidth
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