import { Container, Grid, Typography,styled,Paper,Box } from '@mui/material'
import React from 'react'
import girl from '../images/Service/girls.png'
import dispatch from '../images/Service/billing.jpeg'
import freight from '../images/Service/factoring.png'

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
    Service
  </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{padding:"20px",color:"white"}}>

              <Grid item lg={4} xs={12}>
                <Item>
                    <Box   component="img"
                            sx={{
                              height: 233,
                              width: '100%'
                            
                            }} src={girl}>

                    </Box>
        
                </Item>
                <Box sx={{marginTop:"20px"}}>
                <Typography variant='h4' >
                  Dispatching
                </Typography>
                <Typography>
                Embark on a journey where every mile is meticulously planned and every load is handled with utmost precision.our dispatching service is not just a process but a commitment to ensuring your freight reaches its destination efficiently and reliably
                </Typography>
                </Box>
              </Grid>

              <Grid item lg={4} xs={12} >
                <Item>
                    <Box   component="img"
                            sx={{
                              height: 233,
                              width: '100%'
                            
                            }} src={dispatch}>

                    </Box>
        
                </Item>
                <Box sx={{marginTop:"20px"}}>
                <Typography variant='h4' >
                Dot Compliant
                </Typography>
                <Typography>
                Stay on the right side of the law, effortlessly. Our experts navigate the maze of DOT regulations so you don't have to. Drive with peace of mind, knowing you're 100% compliant. 
                </Typography>
                </Box>
                
              </Grid>
              <Grid item lg={4} xs={12}>
            <Item>
                <Box   component="img"
                        sx={{
                          height: 233,
                          width: '100%'
                        
                        }} src={freight}>

                </Box>

            </Item>
            <Box sx={{marginTop:"20px"}}>
                <Typography variant='h4' >
                  Factoring Campany
                </Typography>
                <Typography>
                Cash flow woes? Not on our watch. Turn your invoices into instant cash through our trusted factoring partners. More business, less waiting.
                </Typography>
            </Box>
          </Grid>
              

      </Grid>        
     
</Container>
  )
}

export default Service