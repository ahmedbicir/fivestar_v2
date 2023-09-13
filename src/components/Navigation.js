import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import star from '../images/fivestar.png'
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
      <Typography variant="h6" sx={{ my: 2 }}>
        FIVE STAR
      </Typography>
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
      <AppBar component="nav" sx={{ background: "#FDBC18" }}>
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
            <li>
              <NavLink to="/">FIVE STAR</NavLink>
            </li>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
           
            <ul className="ul">
              <li>
                {" "}
                <NavLink to="/" style={{color:"white"}}>Home</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/About" style={{color:"white"}}>About </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/Service" style={{color:"white"}}>Service</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/ContactUs" style={{color:"white"}}>Contact</NavLink>{" "}
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
