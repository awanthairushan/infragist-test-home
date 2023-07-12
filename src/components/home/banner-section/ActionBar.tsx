import React from 'react';
import {Stack} from "@mui/material";
import {Search, User, Heart} from 'react-feather'

const ActionBar = () => {
    return (
        <Stack
            direction={{xs: 'column', sm: 'row'}}
            spacing={{xs: 1, sm: 2, md: 4}}
            justifyContent="center"
            alignItems="center"
        >
            <Search className='action-bar-icon-button'/>
            <Heart className='action-bar-icon-button'/>
            <User className='action-bar-icon-button'/>
        </Stack>
    );
};

export default ActionBar;