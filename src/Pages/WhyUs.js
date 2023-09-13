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
                    Without impeccable customer service, you’ll struggle to maintain your relationship with shippers. By using a dispatch service,
                    you can increase your communication with shippers and ensure you meet contractual expectations.
                    Keep in mind that the dispatch service will represent you and your company when communicating on your behalf. As you look
                   
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
                    Without impeccable customer service, you’ll struggle to maintain your relationship with shippers. By using a dispatch service,
                    you can increase your communication with shippers and ensure you meet contractual expectations.
                    Keep in mind that the dispatch service will represent you and your company when communicating on your behalf. As you look
                   
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
                    Without impeccable customer service, you’ll struggle to maintain your relationship with shippers. By using a dispatch service,
                    you can increase your communication with shippers and ensure you meet contractual expectations.
                    Keep in mind that the dispatch service will represent you and your company when communicating on your behalf. As you look
                   
                    </Typography> 
               
   </Box>
   </Container>

  )
}

export default WhyUs