import { Box, Button, Container, Grid, Typography } from "@mui/material";


import About from "./About";
import Service from "./Service";
import ContactUs from "./ContactUs";
import WhyUs from "./WhyUs";
import bluetruck from "../images/van.png";
import Teams from "./Teams";


const imageURL = "https://images.pexels.com/photos/9895973/pexels-photo-9895973.jpeg?auto=compress&cs=tinysrgb&w=600";

const Home = () => {
  return (
    <Box sx={{marginTop:"-40px"}}>
     
      <Box
      //  sx={{height:"500px"}}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
            sx={{
              display: { xs: "flex", sm: "flex", md: "flex" },
              flexDirection: { xs: "column", sm: "column", md: "row" },
             
              // justifyContent: { xs: "left", sm: "left", md: "center" },
              padding:"20px",
              alignItems: { xs: "left", sm: "left", md: "center" },
            }}
          >
            <Grid
              sx={{
                marginTop: {
                  md:"60px",
                  xs:"30px",
                  sm:"30px"
                },
                marginBottom: {
                  md:"60px",
                  xs:"30px",
                  sm:"30px"
                },
                flexBasis: { xs: "80%", sm: "80%", md: "40%" },
                flexWrap: "wrap",
              }}
            >
              <Typography
                // variant="h4"
                md="6"
                sm="10"
                sx={{
                  textAlign: "left",
                  color: "black",
                  fontWeight: { sm: 60, md: 400 },
                  // marginLeft: { xs: "10px", sm: "10px", md:'0' },
                  marginBottom: "0",
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2rem" },
                }}
              >
                                5 Star Golden Logistics LLC
              </Typography>

              <Typography sx={{ fontSize: { xs: "1rem", md: "1rem" } }}>
              Experience seamless logistics with 5 Star Golden Logistics LLC! We connect carriers to opportunities, ensuring compliance, managing billing, and turning invoices into cash. Your reliable partner on the road!
              </Typography>
              <Button  sx={{color: 'white',
                  border: '2px solid white',
                  background: '#dd8d12',
                  marginTop: '40px',
                  padding: "15px 30px",
                  fontWeight: "bold",
                  borderRadius: "70px",
                  transition: 'red  0.3s ease-in-out', // Optional: Smooth transition for background change
                  '&:hover': {  // Hover state styles
                    background: '#ffa94d',  // Set the background to transparent on hover
                            }
            }}>206-486-7698</Button>
              <Button component="a" href="mailto:dispatching5stargoldenlogisticsllc.Com" sx={{
        color: 'black',
        // border: '2px solid white',
        border: '2px solid #dd8d12',
        marginTop: '40px',
        padding: "15px 30px",
        fontWeight: "bold",
        borderRadius: "70px",
        marginLeft:"10px",fontWeight:"bold"}}>send me  email</Button>
            </Grid>
            <Grid
              item
              md="6"
              sm="12"
              sx={{
                color: "#f7f7f7",
                marginTop: { xs: "0", sm: "0", md: "0px" },
              }}
            >
            <Box>
              <img src={bluetruck} style={{height:"300px",width:"100%"}}></img>
            </Box>

         

            </Grid>
          </Grid>
        </Container>
      </Box>
      <Service/>
      <About/>
      <Teams/>


      <ContactUs/>
    </Box>
  );
};

export default Home;