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
    <IconButton size='lg' edge='start' style={{color:"white",marginTop:"40px",marginLeft:"5px"}} onClick={()=>setIsDrawerOpen(true)}>
      <MenuIcon></MenuIcon>
    </IconButton>
    <Drawer anchor="left" onScroll="sticky" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
  <Box
   
    width="180vw" /* Adjust the width as needed */
    maxWidth="250px"
    textAlign="center"
    role="presentation"
    bgcolor="white" /* Adjust the transparency as needed */

  >
    <Typography variant="h4" color='black' style={{marginTop:"40px"}}>Menu</Typography>
    <nav style={{ backgroundColor:"royal blue",height:"10%" }}>
      <ul>
        <li>
          <Link to="/" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"black",fontSize:"20px"}}>
            Property Owner Details
          </Link>
        </li>
        <li>
          <Link to="/TenantDetails" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"black",fontSize:"20px"}}>
            Tenant's Details
          </Link>
        </li>

        <li>
          <Link to="/TenantWorkplace" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"black",fontSize:"20px"}}>
            Tenant's Workplace Details
          </Link>
        </li>
        <li>
          <Link to="/PersonKnowingTenant" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"black",fontSize:"20px"}}>
            Person Knowing Tenant
          </Link>
        </li>

        <li>
          <Link to="/tenantInfomation" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"black",fontSize:"20px"}}>
            Tenant Information
          </Link>
        </li>
        <li>
          <Link to="/complaints" onClick={() => setIsDrawerOpen(false)} style={{textDecoration:"none",color:"black",fontSize:"20px"}}>
           View Complaints
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

