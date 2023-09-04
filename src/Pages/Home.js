import { Box, Button, Container, Grid, Typography } from "@mui/material";


import About from "./About";
import Service from "./Service";
import ContactUs from "./ContactUs";
import WhyUs from "./WhyUs";
// import redtruck from "../assets/redtruck.jpg";
const imageURL = "https://images.pexels.com/photos/9895973/pexels-photo-9895973.jpeg?auto=compress&cs=tinysrgb&w=600";

// import pages 


const Home = () => {
  return (
    <Box>
     
      <Box
        sx={{
          // backgroundColor: "blue",
          minHeight: "70vh",
          width: "100%",
          marginTop: "-60px",
          // backgroundImage:  `url(${redtruck})`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${imageURL})`,

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "fit",
          minHeight: {
            md:"80vh",
            xs:"50vh",
            sm:"60vh"
          },
        }}
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
              paddingTop:"50px",
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
                  color: "#fff",
                  fontWeight: { sm: 60, md: 200 },
                  // marginLeft: { xs: "10px", sm: "10px", md:'0' },
                  marginBottom: "0",
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "3.5rem" },
                }}
              >
                                Five Star Golden Logistics LLC
              </Typography>
            </Grid>
            <Grid
              item
              md="6"
              sm="12"
              sx={{
                color: "#f7f7f7",
                marginTop: { xs: "0", sm: "0", md: "80px" },
              }}
            >
              <Typography sx={{ fontSize: { xs: "1rem", md: "1.8rem" } }}>
                Improve fleet management with truck dispatch service by
                partnering with a freight dispatcher, navigating the numerous
                companies available.
              </Typography>
              <Button  sx={{color:'white',border:'2px solid white',background:'#dd8d12',marginTop:'40px',padding:"20px 20px",fontWeight:"bold"}}>916-224-3988</Button>
<Button component="a" href="https://wa.me/254740333023" sx={{color:'white',border:'2px solid white',background:'#dd8d12',marginTop:'40px',padding:"20px 20px ",marginLeft:"10px",fontWeight:"bold"}}>whatsApp me</Button>
<Button>

</Button>

            </Grid>
          </Grid>
        </Container>
      </Box>
      <About/>
      <Service/>

      <ContactUs/>
    </Box>
  );
};

export default Home;