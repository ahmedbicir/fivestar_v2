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
         <Button component="a" href="https://wa.me/254740333023" sx={{fontSize:"50px",background:"#e18012", width: "70px",
        height:"70px",
        border:"2px solid green",
        borderRadius:"50%",
        position: "fixed",
        right: 0,
        bottom: 0,
       
        marginRight:"20px",}}><FaWhatsapp/></Button>
         <Button component="a" href="tel:0740333023" sx={{fontSize:"30px", background:"#e18012",position: "fixed",
        right: 0,
        top: "90px",
       
        marginRight:"20px",}}><BsFillTelephoneFill/></Button>
    </div>
  )
}

export default Fixed