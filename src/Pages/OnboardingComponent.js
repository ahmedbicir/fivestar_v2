import React from 'react';
import {Container, Typography, Paper, Grid } from '@mui/material';
import { FaRegListAlt, FaSignature, FaFile, FaTruck, FaPhoneAlt } from 'react-icons/fa';
import { AiFillInsurance } from "react-icons/ai";



const OnboardingComponent = () => {
  return (
   
    <Container maxWidth="xl">

<Paper style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h4" gutterBottom align="center" 
      sx={{
        fontSize:{
          xs:"1.5rem",
          md:"3rem"
        },
      }}>
Getting Started With      </Typography>
      <Typography variant="h4" gutterBottom align="center" 
      sx={{
        fontSize:{
          xs:"2rem",
          md:"3rem"
        },
        color:"#fdbc18"
      }}>
        5 Star Golden Logistics LLC
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FaRegListAlt size={24} style={{ color:"#fdbc18"}}/>
          <Typography variant="h6" sx={{fontSize:{md:"1rem",xs:"1rem"}}}>Signed Carrier Dispatch Agreement</Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <FaSignature size={24} style={{ color:"#fdbc18"}}/>
          <Typography variant="h6" sx={{fontSize:{md:"1rem",xs:"1rem"}}}>W-9 Form signed</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <FaFile size={24} style={{ color:"#fdbc18"}}/>
          <Typography variant="h6" sx={{fontSize:{md:"1rem",xs:"1rem"}}}>MC Authority Letter</Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <FaTruck size={24} style={{ color:"#fdbc18"}}/>
          <Typography variant="h6" sx={{fontSize:{md:"1rem",xs:"1rem"}}}>Signed Welcome Packet</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <AiFillInsurance size={24} style={{ color:"#fdbc18"}}/>
          <Typography variant="h6" sx={{fontSize:{md:"1rem",xs:"1rem"}}}>Certificate of Insurance</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <FaPhoneAlt size={24} style={{ color:"#fdbc18"}}/>
          <Typography variant="h6" sx={{fontSize:{md:"1rem",xs:"1rem"}}}>Driver’s Contact Information</Typography>
        </Grid>
      </Grid>
    </Paper>
    </Container>
  );
};

export default OnboardingComponent;
