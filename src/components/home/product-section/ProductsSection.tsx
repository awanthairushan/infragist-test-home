import React from 'react';
import {Grid} from "@mui/material";
import './product-section.css'
import {Link} from "react-router-dom";

const ProductsSection = () => {
    return (
        <Grid container className='product-section' justifyContent='space-between' spacing={4}>
            <Grid item xs={6} className='main-product'>
                <div className='main-product-header'>Main Product</div>
                <Link to=''>
                    <button className='main-product-button'>Go to main page</button>
                </Link>
            </Grid>

            <Grid container item xs={6} className='sub-product' alignContent='space-between'>
                <Grid item xs={12} className='upper-sub-product'>
                    <div className='sub-product-header'>sub Product 01</div>
                    <Link className='sub-product-link' to=''>Go to sub product</Link>
                </Grid>
                <Grid item xs={12} className='lower-sub-product'>
                    <div className='sub-product-header'>sub Product 02</div>
                    <Link className='sub-product-link' to=''>Go to sub product</Link>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProductsSection;