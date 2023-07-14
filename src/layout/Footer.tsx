import React from 'react';
import {Grid, Stack} from "@mui/material";
import LogoDark from "../assets/images/Logo dark.png";
import FooterNavBar from "../components/common/FooterNavBar";
import SocialMediaBar from "../components/common/SocialMediaBar";
import './footer.css'
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <Grid container>
            <Grid container className='footer-upper-section'>
                <Grid item xs={2}>
                    <img src={LogoDark} alt="LOGO" width={136} height={70}/>
                </Grid>
                <Grid item xs={8} className='footer-navbar'>
                    <FooterNavBar/>
                </Grid>
                <Grid item xs={2} className='social-media-bar'>
                    <SocialMediaBar/>
                </Grid>
            </Grid>
            <Grid container className='footer-lower-section'>
                <Grid item xs={4} className='footer-copyright'>
                    Copyright © 2023, testdocument <br/>
                    Designed & Developed by Infragist
                </Grid>
                <Grid item xs={8} className='footer-lower-navbar'>
                    <Stack
                        direction={{xs: 'column', sm: 'row'}}
                        spacing={{xs: 1, sm: 2, md: 4}}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <NavLink to='' className='navbar-link'>Shipping</NavLink>
                        <NavLink to='' className='navbar-link'>Returns</NavLink>
                        <NavLink to='' className='navbar-link'>FAQs</NavLink>
                        <NavLink to='' className='navbar-link'>Guarantee</NavLink>
                        <NavLink to='' className='navbar-link'>Contact Us</NavLink>
                        <NavLink to='' className='navbar-link'>Policy & Terms</NavLink>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;