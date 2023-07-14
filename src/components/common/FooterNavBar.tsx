import React from 'react';
import {Stack} from "@mui/material";
import {NavLink} from "react-router-dom";

const FooterNavBar = () => {
    return (
        <Stack
            direction={{xs: 'column', sm: 'row'}}
            spacing={{xs: 1, sm: 2, md: 4}}
            justifyContent="center"
            alignItems="center"
        >
            <NavLink to='' className='navbar-link'>LINK 01</NavLink>
            <NavLink to='' className='navbar-link'>LINK 02</NavLink>
            <NavLink to='' className='navbar-link'>LINK 03</NavLink>
            <NavLink to='' className='navbar-link'>LINK 04</NavLink>
            <NavLink to='' className='navbar-link'>LINK 05</NavLink>
            <NavLink to='' className='navbar-link'>LINK 06</NavLink>
            <NavLink to='' className='navbar-link'>LINK 07</NavLink>
            <NavLink to='' className='navbar-link'>LINK 08</NavLink>
        </Stack>
    );
};

export default FooterNavBar;