import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {des2, des3, des4, des5} from '../assets'

export default function SimplePaper() {
  return (
    <div className='servcont'>
    
    <Box
      sx={{
       
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          
          m: 2,
          width: 300,
          height: 428,

          ':hover': {
            boxShadow: 20,

          },

        },

      }}
    
      
    >
      <Paper elevation={3} >
        <img src={des4} className="w-[100%] h-[70%]"/>
        <h2>Cheerful</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
      </Paper>
      <Paper elevation={3}>
        <img src={des3} className="w-[100%] h-[70%]"/>
        <h2>Airy</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
      </Paper>
      <Paper elevation={3}>
        <img src={des4} className="w-[100%] h-[70%]"/>
        <h2>Grand</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
      </Paper>
      <Paper elevation={3}>
        <img src={des5} className="w-[100%] h-[70%]"/>
        <h2>Classic</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
      </Paper>
    </Box>
    </div>
    
  );
}