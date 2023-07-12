import React from 'react';
import {Grid} from "@mui/material";
import './banner-section.css'
import CardSwiper from "./CardSwiper";

const BannerSection = () => {
    return (
        <Grid container className='banner-section'>
            <Grid item xs={6}>
                <CardSwiper/>
            </Grid>
            <Grid item xs={6}>
                <Grid container justifyContent='left' alignContent='center' height='100%' pl={4} pr={4}>
                    <div className='banner-header'>
                        The home page is the first thing visitors
                    </div>
                    <div className='banner-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer aliquet, tortor
                        at bibendum aliquet, felis tellus ultrices.
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default BannerSection;