import { Container, Grid, Typography,styled,Paper,Box } from '@mui/material'
import React from 'react'
import sawir from '../images/Service/billing.jpeg'

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

<Container  maxWidth="xl">

  <Typography variant='h3' sx={{ color: "#FDBC18" }}>
    Service
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
                <Typography variant='h4'>
                  dispatcher
                </Typography>
                <Typography>
                some dispatch services require a contract. That contract can be short, as is the case of a week when billing a flat weekly
                </Typography>
              </Grid>

              <Grid item lg={6} xs={12}>
                <Item>
                    <Box   component="img"
                            sx={{
                              height: 233,
                              width: '100%'
                            
                            }} src={sawir}>

                    </Box>
        
                </Item>
                <Typography variant='h4'>
                  dispatcher
                </Typography>
                <Typography>
                some dispatch services require a contract. That contract can be short, as is the case of a week when billing a flat weekly
                </Typography>
              </Grid>
              
              

      </Grid>        
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
  <Typography variant='h4'>
    dispatcher
  </Typography>
  <Typography>
  some dispatch services require a contract. That contract can be short, as is the case of a week when billing a flat weekly
  </Typography>
</Grid>

<Grid item lg={6} xs={12}>
  <Item>
      <Box   component="img"
              sx={{
                height: 233,
                width: '100%'
              
              }} src={sawir}>

      </Box>

  </Item>
  <Typography variant='h4'>
    dispatcher
  </Typography>
  <Typography>
  some dispatch services require a contract. That contract can be short, as is the case of a week when billing a flat weekly
  </Typography>
</Grid>



</Grid>   
</Container>
  )
}

export default Service