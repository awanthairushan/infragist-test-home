import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {Grid} from "@mui/material";

const Layout = () => {
    return (
        <Grid style={{padding: '40px 160px'}}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Grid>
    );
};

export default Layout;