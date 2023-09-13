import React, { useState ,useRef} from "react";

import { Grid, TextField, Button, Typography, Container,Box,Snackbar } from "@mui/material";
import emailjs from '@emailjs/browser';
import { Form } from "react-router-dom";


const ContactUs = () => {
  const form = useRef();


  // emailjs

  const [contact, setContact] = useState({
    F_name: "",
    phone: "",
    email: "",
    locate: "",
    message: ""
  
  });
 // feedback state
 const [feedbackMessage, setFeedbackMessage] = useState('');
 const [openSnackbar, setOpenSnackbar] = useState(false);


  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7j8q68i', 'template_6pbyox6', form.current, 'Lj7uWlMPc99oVlYHR')
      .then((result) => {
          console.log(result.text);
          setFeedbackMessage('Your message is received, we will respond to you.');
          setOpenSnackbar(true);
      }, (error) => {
          console.log(error.text);
          setFeedbackMessage('Error sending message. Please try again.');
          setOpenSnackbar(true);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  }

  // Render component

  return (
    <Container  maxWidth="xl" sx={{marginTop:"30px"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{marginTop:"30px"}}>
            <Typography variant="h3" sx={{ color: "#FDBC18" }}>
              Main Branch
            </Typography>
            <Typography variant="h6" sx={{marginTop:"10px"}}>
              <i
                class="fa fa-phone"
                aria-hidden="true"
                style={{ color: "#FDBC18" }}
              ></i>{" "}
              <span style={{ marginLeft:"20px" }}> 206-486-7698</span>
            </Typography>
            <Typography sx={{marginTop:"10px"}}>
              <i class="fa fa-envelope" style={{ color: "#FDBC18" }}></i>
              <span style={{ marginLeft:"20px" }}>dispatching5stargoldenlogisticsllc.Com</span>   
            </Typography>
            <Typography sx={{marginTop:"10px"}}>
              <i
                class="fa fa-map-marker"
                aria-hidden="true"
                style={{ color: "#FDBC18" }}
              ></i>
              <span style={{ marginLeft:"20px" }}>3524 SILVERSIDE RD STE 35B3524 SILVERSIDE RD STE 35B WILMINGTON</span>
                   
            </Typography>
          </Box>
          
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <form  ref={form} onSubmit={handleSubmit} sx={{ padding: "20px" }}>
            <Typography variant="h4" sx={{ color: "#FDBC18" }}>
              Send a Message
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} >
                <TextField
                  style={{ width: "100%" }}
                  name="F_name"
                  label="Your Name"
                  variant="outlined"
                  value={contact.F_name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ width: "100%" }}
                  name="phone"
                  label="Your Phone"
                  variant="outlined"
                  value={contact.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ width: "100%" }}
                  name="email"
                  label="Your Email"
                  variant="outlined"
                  value={contact.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ width: "100%" }}
                  name="locate"
                  label="location"
                  variant="outlined"
                  value={contact.locate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "100%" }}
                  name="message"
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={contact.message}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              style={{ marginTop: "16px", background: "#fdbc18" }}
            >
              Submit
            </Button>
          </form>
          <Snackbar 
      open={openSnackbar} 
      autoHideDuration={6000} 
      onClose={handleCloseSnackbar}
      message={feedbackMessage}
      action={
        <Button color="secondary" size="small" onClick={handleCloseSnackbar} sx={{background:"#fdbc18"}}>
          Close
        </Button>
      }
   sx={{position:"relative",bottom:"-3px" ,marginLeft:"70px"}} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
