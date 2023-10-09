import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import shan from '../images/shan.svg'
import { Container } from '@mui/material';

import { AppBar, Toolbar, Box, CssBaseline, Divider, Drawer, IconButton, Typography, Button} from '@mui/material';
// list imports 
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
// icons 
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth = 400;
const navItems = ['Home', 'About', 'Contact', 'Trucks'];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
// drawer 
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      
      <img src={shan} alt="5 STAR" style={{maxWidth:'100px' }} />

      <Divider />
      <List>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/About">About </NavLink>
        </li>
        <li>
          <NavLink to="/Service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/ContactUs">Contact</NavLink>
        </li>
       
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "white" }}>
        {/* navbar  */}
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block", textAlign: "left" },
            }}
          >
                           <img src={shan} alt="5 STAR" style={{maxWidth:'100px'}} />

          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{color:"#dd8d12"}} />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
           
            <ul className="ul">
              <li>
                {" "}
                <NavLink to="/" style={{color:"#363435"}}>Home</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/About" style={{color:"#363435"}}>About </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/Service" style={{color:"#363435"}}>Service</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/ContactUs" style={{color:"#363435"}}>Contact</NavLink>{" "}
              </li>
              {/* <li>
              
              <Button component="a" href="tel:0740333023" sx={{fontSize:"30px"}}><BsFillTelephoneFill style={{background:"green"}}/></Button></li> */}
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:"white"
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navigation;
