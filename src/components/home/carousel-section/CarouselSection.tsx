import React from 'react';
import {Grid} from "@mui/material";
import './carousel-section.css'
import CardCarousel from "./CardCarousel";

const CarouselSection = () => {
    return (
        <Grid container direction='row' justifyContent='center' className='carousel-section'>
            <Grid item xs={12} className='carousel-section-header'>Top Picks from Our Collection</Grid>
            <Grid item xs={12} className='carousel-section-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nulla facilisi. Integer aliquet, tortor at bibendum aliquet, felis tellus ultrices nisl, ac
                fermentum augue risus id nulla. Phasellus convallis hendrerit enim.</Grid>
            <Grid item xs={12} className='carousel-section-carousel'><CardCarousel/></Grid>
        </Grid>
    );
};

export default CarouselSection;