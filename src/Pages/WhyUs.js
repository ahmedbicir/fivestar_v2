import { Box, Container,Grid,Typography } from '@mui/material'
import React from 'react'

function WhyUs() {
  return (
    
   <Container sx={{color:"white",background:"#363435"}}  maxWidth="xl" >
                    <Typography variant="h3" sx={{ color: "#FDBC18" }}>Why us</Typography>
    <Box  sx={{marginTop:"20px"}}>

            
                    <Typography variant="h5" gutterBottom sx={{marginTop:'30px'}}>
                    Customer service 

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
                    for the best business partner, ensure that all options are skilled at interacting with customers and accurately completing
                    paperwork. That way, you won’t be worried about their team acting as an extension of your brand and business. 
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{marginTop:'30px'}}>
                    Communication 

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
                    for the best business partner, ensure that all options are skilled at interacting with customers and accurately completing
                    paperwork. That way, you won’t be worried about their team acting as an extension of your brand and business. 
                    </Typography> 

                    <Typography variant="h5" gutterBottom sx={{marginTop:'30px'}}>
                    Dispatching service 

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
                    for the best business partner, ensure that all options are skilled at interacting with customers and accurately completing
                    paperwork. That way, you won’t be worried about their team acting as an extension of your brand and business. 
                    </Typography> 
               
   </Box>
   </Container>

  )
}

export default WhyUs