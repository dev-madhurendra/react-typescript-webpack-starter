import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'
type InputProps = TextFieldProps;
const Input = (props:InputProps) => {
  const {...otherprops}=props;
  return (
    
    <TextField {...otherprops}/>
  )
}

export default Input