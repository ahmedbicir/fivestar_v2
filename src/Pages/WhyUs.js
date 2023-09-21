import { Box, Container,Grid,Typography } from '@mui/material'
import React from 'react'
import { FaPhone, FaShieldAlt, FaUserFriends } from 'react-icons/fa';


function WhyUs() {
  return (
    
   <Container sx={{color:"white",background:"#363435",padding:"40px 20px"}}  maxWidth="xl" >
                    <Typography variant="h3" sx={{ color: "#FDBC18" ,marginTop:"20px",fontSize:{xs:"2rem",md:"2.5rem"}}}>Why Choose <span style={{color:"#FDBC18"}}>us</span></Typography>
    <Box  sx={{marginTop:"20px"}}>

            
                    <Typography variant="h5" gutterBottom sx={{marginTop:'30px'}}>
                    <FaUserFriends size={24} style={{color: "#FDBC18"}} />  <span style={{ marginLeft:"20px" }}>User friendly</span>  

                    </Typography> 
                    <Typography  sx={{marginTop:'20px',
                    fontSize:{
                      xs:"0.9rem",
                      md:"1rem"
              }
                  }}>
                     Our platform is designed with you in mind. Easy to navigate and intuitive to use, we make it simple for you to manage your logistics needs.
                   
                    </Typography>
                    <Typography  variant="h5" gutterBottom sx={{marginTop:'30px'}}>
                      <FaPhone size={24} style={{color: "#FDBC18"}}/> <span style={{ marginLeft:"20px" }} >Support 24/7</span>
                    </Typography>

                    <Typography sx={{marginTop:'20px',
                      fontSize:{
                        xs:"0.9rem",
                        md:"1rem"
                }
                  }}>
                    We understand that the logistics industry never sleeps, and neither do we. Our dedicated support team is available around the clock to assist you with any queries or issues you may have.
                   
                    </Typography> 

                    <Typography variant="h6" gutterBottom sx={{marginTop:'30px'}}>
                    <FaShieldAlt size={24} style={{color: "#FDBC18"}}/> <span style={{ marginLeft:"20px" }}>Trustable</span>

                    </Typography>  
                    <Typography sx={{marginTop:'20px',
                        fontSize:{
                          xs:"0.9rem",
                          md:"1rem"
                  }
                  }}>
                    At 5 Star  Dispatch, your trust is our top priority. We adhere to the highest standards of professionalism and integrity, ensuring that you can rely on us for secure and efficient service.
                   
                    </Typography> 
               
   </Box>
   </Container>

  )
}

export default WhyUs