import React from 'react';
import {Grid} from "@mui/material";
import Logo from './../assets/images/Logo.png';
import './header.css'
import NavBar from "../components/common/NavBar";
import ActionBar from "../components/common/ActionBar";

const Header = () => {
    return (
        <Grid container className='navbar-section'>
            <Grid item xs={5} className='header-navbar'>
                <NavBar/>
            </Grid>
            <Grid item xs={2} className='header-logo'>
                <img src={Logo} alt="LOGO" width={136} height={70}/>
            </Grid>
            <Grid item xs={5} className='header-action-bar'>
                <ActionBar/>
            </Grid>
        </Grid>
    );
};

export default Header;