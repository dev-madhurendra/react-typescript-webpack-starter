import { Grid } from '@mui/material';
import React from 'react'
interface HomeProps{
    navbar?:React.ReactNode;
     header?:React.ReactNode;
     body?:React.ReactNode;
}
const Home = (props:HomeProps) => {
    const {header,body,navbar}=props;
  return (
    <Grid>
        <Grid item>
         {header??"Header"}
        </Grid>
        <Grid item>
           {navbar??"navbar"} 
        </Grid>
        <Grid item>
            {body??"Body"}
        </Grid>
    </Grid>
  )
}

export default Home