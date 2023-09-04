import { Box, Container, Typography, Grid, Card } from "@mui/material";
// import FaHandPointRight from "@mui/icons-material/FaHandPointRight";
// react icons
import { FaHandPointRight } from "react-icons/fa";
import { GiSevenPointedStar } from "react-icons/gi";

const About = () => {
  return (
      <Container maxWidth="xl">
     <Box sx={{marginTop: "20px"}}>
        <Typography variant="h3" 
        sx={{ color: "#FDBC18", fontSize:{
           md:"70px",
           xs:"50px",

           sm:"50px"
        } }}
       >About Us</Typography>
        <Box sx={{marginTop:"10px"}}>
          <Typography variant="h5">FiveStar Dispatch</Typography>
          <Box sx={{marginTop:"10px"}}>

          <Typography variant="body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. industrys standard dummy text ever since the 1500s, when
            an unknown and scrambled it to make a type specimen book. It has
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. industrys standard dummy text ever since the 1500s, when
            an unknown and scrambled it to make a type specimen book.
          </Typography>
          </Box>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "40px",
          }}
        >
          <Grid item md="5" xs="12">
            <Card
              sx={{
                padding: "20px 10px",
                background: "#363435",
                color: "#fff",
                margin: "10px",
              }}
            >
              <Typography variant="h5">Best for: Owner-operators</Typography>
              <Box>
                <Typography variant="h6">Trucks available</Typography>
                <Box sx={{ marginLeft: 5 }}>
                  <Typography variant="h6" sx={{
                    fontSize:{
                            xs:"0.9rem"
                    }
                  }}>
                    <GiSevenPointedStar className="icons" /> Dry Vans
                  </Typography>
                  <Typography variant="h6"
                  sx={{
                    fontSize:{
                            xs:"0.9rem"
                    }
                  }}
                  >
                    <GiSevenPointedStar className="icons" />
                    Reefer
                  </Typography>
                  <Typography variant="h6"
                  sx={{
                    fontSize:{
                            xs:"0.9rem"
                    }
                  }}>
                    <GiSevenPointedStar className="icons" />
                    Flatbeds
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Typography
                    variant="body"
                    className="icons"
                    sx={{ fontWeight: 500 ,
                      fontSize:{
                        xs:"0.9rem"
                }
                    }}
                  >
                    4% to 5% of load value based on the number of trucks
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body" 
                  sx={{
                    fontSize:{
                            xs:"0.9rem"
                    }
                  }}>
                    Dedicated dispatcher: Yes, for fleets with five or more
                    trucks
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body"
                  sx={{
                    fontSize:{
                            xs:"0.9rem"
                    }
                  }}
                  >
                    Broker credit check: Yes
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body"
                  sx={{
                    fontSize:{
                            xs:"0.9rem"
                    }
                  }}
                  >
                    Contract requirements: No
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body"
                  sx={{
                    fontSize:{
                            xs:"0.9rem"
                    }
                  }}
                  >
                    Special features and Benefits
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid md="5" xs="12">
            <Card
              sx={{
                padding: "20px 10px",
                background: "#363435",
                color: "#fff",
                margin: "10px",
              }}
            >
              <Typography variant="h5">
                Special features and Benefits
              </Typography>
              <Box sx={{ marginLeft: 5 }}>
                <Typography variant="h6">
                  Back office support for paperwork
                </Typography>
                <Typography variant="h6"
                sx={{
                  fontSize:{
                          xs:"0.9rem"
                  }
                }}>
                  <FaHandPointRight className="icons" /> Layovers
                </Typography>
                <Typography variant="h6" 
                sx={{
                  fontSize:{
                          xs:"0.9rem"
                  }
                }}>
                  <FaHandPointRight className="icons" /> Lumper fees
                </Typography>
                <Typography variant="h6" 
                sx={{
                  fontSize:{
                          xs:"0.9rem"
                  }
                }}>
                  <FaHandPointRight className="icons" /> Set-up features
                </Typography>
                <Typography variant="h6"
                sx={{
                  fontSize:{
                          xs:"0.9rem"
                  }
                }}>
                  <FaHandPointRight className="icons" /> Detentions
                </Typography>
                <Typography variant="h6"
                sx={{
                  fontSize:{
                          xs:"0.9rem"
                  }
                }}>
                  <FaHandPointRight className="icons" /> High paying loads
                </Typography>
                <Typography variant="h6"
                sx={{
                  fontSize:{
                          xs:"0.9rem"
                  }
                }}>
                  <FaHandPointRight className="icons" /> One of the most
                  affordable options
                </Typography>
                <Typography variant="h6"
                sx={{
                  fontSize:{
                          xs:"0.9rem"
                  }
                }}>
                  <FaHandPointRight className="icons" /> Fast, easy sign-up
                  process
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
    </Box>
      </Container>
  );
};

export default About;