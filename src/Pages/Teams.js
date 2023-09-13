import { Container, Grid, Typography,styled,Paper,Box } from '@mui/material'
import React from 'react'
import girl from '../images/Service/girl.png'
import dispatch from '../images/Service/qadar.jpg'

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
                  Executive
                </Typography>
                <Typography>
                some dispatch services require a contract. That contract can be short, as is the case of a week when billing a flat weekly
                </Typography>
                </Box>
              </Grid>

              <Grid item lg={6} xs={12} >
                <Item>
                    <Box   component="img"
                            sx={{
                                height: 300,
                                width: '100%',
                                objectFit:'cover'
                            
                            }} src={girl}>

                    </Box>
        
                </Item>
                <Box sx={{marginTop:"20px"}}>
                <Typography variant='h4' >
                  Dispatcher
                </Typography>
                <Typography>
                some dispatch services require a contract. That contract can be short, as is the case of a week when billing a flat weekly
                </Typography>
                </Box>
                
              </Grid>
             
              

      </Grid>        
     
</Container>
  )
}

export default Service