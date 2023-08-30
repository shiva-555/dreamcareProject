import React,{useState} from 'react';

import Drawer from '@mui/material/Drawer';
import {Box,Typography,IconButton} from '@mui/material';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../Navbar/Navbar.css"
const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] =useState(false)
  return (
    <>
    <IconButton size='lg' edge='start' style={{color:"white",marginTop:"90px",marginLeft:"5px"}} onClick={()=>setIsDrawerOpen(true)}>
      <MenuIcon></MenuIcon>
    </IconButton>
    <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
  <Box
    p={2}
    width="80vw" /* Adjust the width as needed */
    maxWidth="250px"
    textAlign="center"
    role="presentation"
    bgcolor="rgba(255, 255, 255, 0.9)" /* Adjust the transparency as needed */
  >
    <Typography variant="h6">Menu</Typography>
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"black"}}>
            Property Owner Details
          </Link>
        </li>
        <li>
          <Link to="/TenantDetails" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"black"}}>
            Tenant's Details
          </Link>
        </li>

        <li>
          <Link to="/TenantWorkplace" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"black"}}>
            Tenant's Workplace Details
          </Link>
        </li>
        <li>
          <Link to="/PersonKnowingTenant" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"black"}}>
            Person Knowing Tenant
          </Link>
        </li>

        <li>
          <Link to="/tenantInfomation" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"black"}}>
            Tenant Information
          </Link>
        </li>
      </ul>
    </nav>
  </Box>
</Drawer>


    </>
  );
};

export default Navbar;

