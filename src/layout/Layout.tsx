import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {Grid} from "@mui/material";
import './layout.css';

const Layout = () => {
    return (
        <Grid className='layout'>
            <Header/>
            <Outlet/>
            <Footer/>
        </Grid>
    );
};

export default Layout;