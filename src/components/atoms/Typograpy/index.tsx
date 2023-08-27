import React, { Children } from 'react'
import { Typography } from '@mui/material';
export interface TypographyProps{
    children:string;
    variant?: | "h1"
    | "h4"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "b1"
    | "b2"
    | "c1"
    | "c2"
    | "button"
    | "overline";
    styles?:React.CSSProperties;
}
const TypograpyComponent = (props: TypographyProps) => {
    const {children,variant,styles}=props;

  return (
    <div>
        <Typography  variant={variant} style={styles}>{children}</Typography>
    </div>
  )
}

export default TypograpyComponent;