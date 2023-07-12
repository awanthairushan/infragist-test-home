import React from 'react';
import {Grid} from "@mui/material";
import BannerSection from "../components/home/banner-section/BannerSection";
import CarouselSection from "../components/home/carousel-section/CarouselSection";
import ProductsSection from "../components/home/product-section/ProductsSection";
import ContactSection from "../components/home/contact-section/ContactSection";

const HomePage = () => {
    return (
        <Grid container>
            <Grid item>
                <BannerSection/>
            </Grid>
            <Grid item>
                <CarouselSection/>
            </Grid>
            <Grid item>
                <ProductsSection/>
            </Grid>
            <Grid item>
                <ContactSection/>
            </Grid>
        </Grid>
    );
};

export default HomePage;