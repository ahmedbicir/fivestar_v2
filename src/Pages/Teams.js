import { Container, Grid, Typography,styled,Paper,Box } from '@mui/material'
import React from 'react'
import sxb from '../images/Service/sxb.jpeg'
import dispatch from '../images/Service/qadar.jpeg'

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
  width:"100%",
  // height:"300px",
  
}));

function Service() {
  return (

<Container  maxWidth="xl" sx={{marginTop:"30px",background:"#01008a" ,padding:"40px 0"}}>

  <Typography variant='h3' sx={{ color: "#FDBC18" }}>
    Our Team
  </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{padding:"20px",color:"white"}}>

             

           <Grid item lg={6} xs={12} >
                <Item>
                    <Box   component="img"
                            sx={{
                                height: '300px',
                                width: '100%',
                                objectFit:'cover',
                              
                            
                            }} src={sxb}>

                    </Box>
        
                </Item>
                <Box sx={{marginTop:"20px"}}>
                <Typography variant='h4' >
                  <span style={{color:"#dd8d12"}}>Mohamed</span>,Co-Founder & Compliance Specialist
                </Typography>
                <Typography sx={{marginTop:"20px"}}>
                <span style={{color:"#dd8d12"}}>Mohamed</span> brings a wealth of knowledge in regulatory compliance and financial management to 5 Star Dispatch. With 5 years of experience, He ensures that our carriers operate within the legal framework, while also offering innovative financial solutions through our factoring partnerships. Mohamed's expertise is your ticket to worry-free logistics.
                </Typography>
                </Box>
                
              </Grid>

            <Grid item lg={6} xs={12}>
                <Item>
                    <Box   component="img"
                            sx={{
                              height: 300,
                              width: '100%',
                              objectFit:'cover'
                            
                            }} src={dispatch}>

                    </Box>
        
                </Item>
                <Box sx={{marginTop:"20px"}}>
                <Typography variant='h4' >
                <span style={{color:"#dd8d12"}}>Khadar</span>,Co-Founder & Operations Lead
                </Typography>
                <Typography sx={{marginTop:"20px"}}>
                With 5 years of experience in the logistics industry, Specializing in operations and customer relations, I ensure that every carrier we work with benefits from streamlined processes and top-notch service.Connect, Organize, Manage.               
                 </Typography>
                </Box>
              </Grid>  
              

      </Grid>        
     
</Container>
  )
}

export default Service