import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import img from '../assets/images/img3.png'
import Navbar from './Navbar';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: "white",
  }));
const Banner = () => {
  return (
   <>
    <Box className="banner-box" sx={{ flexGrow: 1, mb:20, height:"90vh", }}>
    <Navbar/>
      <Grid container sm={10} md={12} lg={12} className='resume-main-div' sx={{justifyContent:"center", alignItems:"center", m:"0 auto"}} >
        <Grid item lg={5} md={6} sm={12} xs={12} className='get-resume-div'>
          <Item sx={{boxShadow:"unset", background:"transparent"}}>
            <Typography sx={{fontSize:"35px"}} component="div">
                <p sx={{mb:"10px", fontSize:"30px"}}>Hello!, I am <span className='name' >Shah Masood</span><br /> A front-end Web Developer.</p>
                <Typography className='get-resume-typography' component="div">
                <Button className='get-resume' variant="contained" disableElevation>
                <a href="/ShahMasood-Software-Engineer-cv.pdf" download="ShahMasood-Software-Engineer-cv.pdf">
                  Get My Resume
                </a>
                </Button>
                </Typography>
            </Typography>
          </Item>
        </Grid>
        <Grid item lg={4} md={5} sm={10} xs={10} className='banner-img'>
          <Item sx={{textAlign:"center", boxShadow:"unset", background:"transparent"}}>
            <img className='animated-image' width="90%" src={img} alt="" />
          </Item>
        </Grid>
       
      </Grid>
    </Box>
   </>
  )
}

export default Banner