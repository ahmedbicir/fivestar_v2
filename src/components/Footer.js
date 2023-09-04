import { Box, Button, Container, Grid, Typography } from "@mui/material";
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
function Footer() {
  let date = new Date();
  return (
<Box sx={{background:"#363435",marginBottom:"0",marginTop:"40px",marginBottom:"-30px"}}>

   
      <Container maxWidth="xl">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={4} xs={12}>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                marginTop: "30px",
                fontSize:{
                  xs:"1rem",
                  sm:"1.7rem",
                  md:"2.5rem"

                }

              }}
            >
             Links
            </Typography>
            <Box>
              <Typography sx={{ color: "white" }}>Contact us</Typography>
              <Typography sx={{ color: "white" }}>Services</Typography>
              <Typography sx={{ color: "white" }}>Truck Types</Typography>
            </Box>
          </Grid>

          <Grid item lg={4} xs={12}>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                marginTop: "30px",
                fontSize:{
                  xs:"1rem",
                  sm:"1.7rem",
                  md:"2.5rem"

                }
              }}
            >
              Address 
            </Typography>
            <Box>
              <Typography sx={{ color: "white" }}>info@fivestar.com</Typography>
              <Typography sx={{ color: "white" }}>FIVE STAR</Typography>
              <Typography sx={{ color: "white" }}>
                3524 SILVERSIDE RD STE 35B 3524
              </Typography>
              <Typography sx={{ color: "white" }}>
                SILVERSIDE RD STE 35B
              </Typography>
              <Typography sx={{ color: "white" }}>
                WILMINGTON, DE 19810-4929 WILMINGTON
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                marginTop: "30px",
                fontSize:{
                  xs:"1rem",
                  sm:"1.7rem",
                  md:"2.5rem"

                }
              }}
            >
             Social media
            </Typography>
            <Box sx={{marginTop:"20px"}}>
            <Button component="a" href="https://www.facebook.com/ahmedbicir.ohirsi" sx={{ fontSize: "30px", color:"#dd8d12"}}>
              <FaFacebookF />
            </Button>


            <Button  component="a" href="https://twitter.com/AhmedHa25631290"  sx={{ fontSize: "30px", color:"#dd8d12"}}>
              <FaTwitter />
            </Button>

            <Button component="a" href="https://www.linkedin.com/in/ahmed-mohamed-bicir/" sx={{ fontSize: "30px", color:"#dd8d12"}}>
              <FaLinkedin />
            </Button>

            <Button  sx={{ fontSize: "30px", color:"#dd8d12"}}>
              <FaInstagramSquare />
            </Button>



            </Box>

        
          </Grid>
         
        </Grid>
        <Grid
  container
  rowSpacing={1}
  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
  sx={{ marginTop: "20px" }}
>
  <Grid item xs={6}>
    <Typography
      sx={{ width: "100%", color: "white", marginTop: "20px" }}
    >
      © {date.getFullYear()}<span > <a href="mailto:ahmedbicir2@gmail.com" style={{color:"white"}}>Five Star. All rights reserved</a></span> 
    </Typography>
  </Grid>

  <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-start"}}>
      <Button onClick={handleScrollToTop}>
        <KeyboardArrowUpIcon
          id="#home"
          sx={{ fontSize: "50px", background: "#dd8d12"}}
        />
      </Button>
    </Grid>
</Grid>

       
      </Container>
    </Box>
  );
}

export default Footer;
