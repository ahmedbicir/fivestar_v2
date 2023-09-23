import { Box, Button, Container, Grid, Typography, withTheme } from "@mui/material";
import React, { useState } from "react";
import '../App.css';

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp  } from "react-icons/fa";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { NavLink } from "react-router-dom";
const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
// const handleScrollToAbout = () => {
//   window.scrollTo({
//     top: '0',
//     behavior: 'smooth'
//   });
// };
function Footer() {
  let date = new Date();
  return (
<Box sx={{background:"#363435",marginTop:"40px",marginBottom:"-45px"}}>

   
      <Container maxWidth="xl">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={4} xs={12}>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                marginTop: "30px",
                fontWeight:"bold",

                fontSize:{
                  xs:"1.5rem",
                  sm:"1.7rem",
                  md:"2.5rem"

                }

              }}
            >
             Links
            </Typography>
            <Box>
         

              <Typography> <NavLink to="/" style={{ color: "white" ,fontWeight:"bold"}} onClick={handleScrollToTop} id="#home">Home </NavLink></Typography>
              <Typography> <NavLink to="/About" style={{ color: "white",fontWeight:"bold" }} onClick={handleScrollToTop} id="#about">About </NavLink></Typography>
              <Typography> <NavLink to="/Service" style={{ color: "white",fontWeight:"bold"}} onClick={handleScrollToTop} id="#about">Services </NavLink></Typography>
              <Typography> <NavLink to="/ContactUs" style={{ color: "white",fontWeight:"bold"}} onClick={handleScrollToTop}>Contact </NavLink></Typography>
            </Box>
          </Grid>

          <Grid item lg={4} xs={12}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                marginTop: "30px",
                fontWeight:"bold",

                fontSize:{
                  xs:"1.5rem",
                  sm:"1.7rem",
                  md:"2.5rem"

                }
              }}
            >
              Address 
            </Typography>
            <Box>
              <Typography sx={{ color: "white",
                fontSize:{
                  xs:"0.8rem",
                  sm:"1rem",
                  md:"1rem"
              }}}>
              126sw 148th st ste C100 box 110, Seattle, WA, United States, Washington</Typography>
             
              
            </Box>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                marginTop: "30px",
                fontWeight:"bold",
                fontSize:{
                  xs:"1.5rem",
                  sm:"1.7rem",
                  md:"2.5rem"


                }
              }}
            >
             Social media
            </Typography>
            <Box sx={{marginTop:"20px"}}>
            <Button component="a" href="https://www.facebook.com/5STARGoldenLogisticsLlc/" sx={{ fontSize: "30px", color:"#dd8d12"}}>
              <FaFacebookF />
            </Button>


            <Button  component="a" href="https://www.facebook.com/5STARGoldenLogisticsLlc/"  sx={{ fontSize: "30px", color:"#dd8d12"}}>
              <FaTwitter />
            </Button>

            <Button component="a" href="https://www.facebook.com/5STARGoldenLogisticsLlc/" sx={{ fontSize: "30px", color:"#dd8d12"}}>
              <FaLinkedin />
            </Button>

            <Button component="a" href="https://www.facebook.com/5STARGoldenLogisticsLlc/" sx={{ fontSize: "30px", color:"#dd8d12"}}>
              <FaInstagramSquare />
            </Button>



            </Box>

        
          </Grid>
         
        </Grid>
        <Grid
  container
  rowSpacing={1}
  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
  sx={{marginTop:"40px" ,paddingBottom:"20px"}}
>
  <Grid item xs={10}>
    <Typography
      sx={{ width: "100%",fontSize:{
        xs:"0.8rem"
      },
      
    }}
    >
          <NavLink to="/" style={{color:"white",fontWeight:"bold"}}>©Copyright 5 star  {date.getFullYear()}. All Rights Reserved</NavLink>

           <span > <a href="/" ></a></span> 

    </Typography>
  </Grid>

  <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end"}}>
      <Button onClick={handleScrollToTop}>
        <KeyboardArrowUpIcon
          id="#home"
          sx={{ fontSize: "50px", background: "#dd8d12",borderRadius:"50%"}}
        />
      </Button>
    </Grid>
</Grid>

       
      </Container>
    </Box>
  );
}

export default Footer;
