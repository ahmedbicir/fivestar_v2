import React from 'react'
import { FaWhatsapp  } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import { Box, Button, Container, Grid, Typography } from "@mui/material";

function Fixed() {
  return (
    <div  style={{
        // position: "fixed",
        // right: 0,
        // bottom: 0,
       
        // marginRight:"20px",
      }}>
         <Button component="a" href="https://wa.me/2064867698" sx={{fontSize:"50px", width: "70px",
        height:"70px",
        position: "fixed",
        right: "0px",
        bottom:"100px",
       
        marginRight:"20px",color:"#25d366"}}><FaWhatsapp/></Button>

         <Button component="a" href="tel:2064867698" sx={{fontSize:"30px",position: "fixed",
        right: 0,
        top: "90px",
       
        marginRight:"20px",color:"#25d366"}}><BsFillTelephoneFill/></Button>
    </div>
  )
}

export default Fixed