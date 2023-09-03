import { Container, Grid, Typography,styled,Paper,Box } from '@mui/material'
import React from 'react'
import sawir from '../images/Service/reefer.jpeg'
import sawir2 from '../images/blue.jpg'
import sawir3 from '../images/bluetruck.jpg'
import sawir4 from '../images/redtruck.jpg'

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
        <Container maxWidth="xl" sx={{background:"#e2e2e2"}}>
                        <Typography variant='h2' sx={{ color: "#FDBC18" }}>
                            Truck Types
                        </Typography>

                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{padding:"20px"}}>
                        
                                <Grid item lg={6} xs={12}>
                                        <Item>
                                            <Box   component="img"
                                                    sx={{
                                                    height: 233,
                                                    width: '100%'
                                                    
                                                    }} src={sawir}>

                                            </Box>
                                
                                        </Item>
                                    
                                </Grid>

                                <Grid item lg={6} xs={12}>
                                    <Item>
                                        <Typography variant='h3'>
                                            Reefer
                                        </Typography>
                                        
                                    <Typography sx={{marginTop:'20px'}}>
                                        Without impeccable customer service, you’ll struggle to maintain your relationship with shippers. By using a dispatch service,
                                        you can increase your communication with shippers and ensure you meet contractual expectations.
                                        Keep in mind that the dispatch service will represent you and your company when communicating on your behalf. As you look
                                        for the best business partner, ensure that all options are skilled at interacting with customers and accurately completing
                                        paperwork. That way, you won’t be worried about their team acting as an extension of your brand and business. 
                                    </Typography>
                                    </Item>
                                
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                        <Item>
                                            <Box   component="img"
                                                    sx={{
                                                    height: 233,
                                                    width: '100%'
                                                    
                                                    }} src={sawir2}>

                                            </Box>
                                
                                        </Item>
                                    
                                </Grid>

                                <Grid item lg={6} xs={12}>
                                    <Item>
                                    <Typography variant='h3'>
                                        Dry Van
                                        </Typography>
                                    <Typography sx={{marginTop:'20px'}}>
                                        Without impeccable customer service, you’ll struggle to maintain your relationship with shippers. By using a dispatch service,
                                        you can increase your communication with shippers and ensure you meet contractual expectations.
                                        Keep in mind that the dispatch service will represent you and your company when communicating on your behalf. As you look
                                        for the best business partner, ensure that all options are skilled at interacting with customers and accurately completing
                                        paperwork. That way, you won’t be worried about their team acting as an extension of your brand and business. 
                                    </Typography>
                                    </Item>
                                
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                        <Item>
                                            <Box   component="img"
                                                    sx={{
                                                    height: 233,
                                                    width: '100%'
                                                    
                                                    }} src={sawir3}>

                                            </Box>
                                
                                        </Item>
                                    
                                </Grid>

                                <Grid item lg={6} xs={12}>
                                    <Item>
                                    <Typography variant='h3'>
                                            Dry Van
                                        </Typography>
                                    <Typography sx={{marginTop:'20px'}}>
                                        Without impeccable customer service, you’ll struggle to maintain your relationship with shippers. By using a dispatch service,
                                        you can increase your communication with shippers and ensure you meet contractual expectations.
                                        Keep in mind that the dispatch service will represent you and your company when communicating on your behalf. As you look
                                        for the best business partner, ensure that all options are skilled at interacting with customers and accurately completing
                                        paperwork. That way, you won’t be worried about their team acting as an extension of your brand and business. 
                                    </Typography>
                                    </Item>
                                
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                        <Item>
                                            <Box   component="img"
                                                    sx={{
                                                    height: 233,
                                                    width: '100%'
                                                    
                                                    }} src={sawir4}>

                                            </Box>
                                
                                        </Item>
                                    
                                </Grid>

                                <Grid item lg={6} xs={12}>
                                    <Item>
                                    <Typography variant='h3'>
                                            Dry van
                                        </Typography>
                                    <Typography sx={{marginTop:'20px'}}>
                                        Without impeccable customer service, you’ll struggle to maintain your relationship with shippers. By using a dispatch service,
                                        you can increase your communication with shippers and ensure you meet contractual expectations.
                                        Keep in mind that the dispatch service will represent you and your company when communicating on your behalf. As you look
                                        for the best business partner, ensure that all options are skilled at interacting with customers and accurately completing
                                        paperwork. That way, you won’t be worried about their team acting as an extension of your brand and business. 
                                    </Typography>
                                    </Item>
                                
                                </Grid>
                            

                    </Grid>   
        </Container>


  )
}

export default Service