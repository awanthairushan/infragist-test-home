import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import {Box, Card, CardContent, CardMedia, Grid, Stack, Paper} from "@mui/material";
import Card1Image from './../../../assets/images/Card 1.png'
import Card2Image from './../../../assets/images/Card 2.png'
import Card3Image from './../../../assets/images/Card 3.png'
import './card-swiper.css'
import {SwiperDetailType} from "../../../types/types";

const Item = styled(Paper)(() => ({
    backgroundColor: '#ffffff',
    opacity: '0.5',
    height: '6px',
    width: '40px',
    transition: 'opacity 0.3s ease-in-out',
        cursor: 'pointer',
    '&:hover': {
        opacity: '1',
        width: '80px',
    },
}));

const CardSwiper = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);

    const swiperDetails: SwiperDetailType[] = [
        {
            index: 1,
            imageLink: Card1Image,
            header: "Change with slider 1",
            body: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia facilisi."
        },
        {
            index: 2,
            imageLink: Card2Image,
            header: "Change with slider 2",
            body: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia facilisi."
        },
        {
            index: 3,
            imageLink: Card3Image,
            header: "Change with slider 3",
            body: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia facilisi."
        }
    ];

    const handleItemHover = (index: number) => {
        setSelectedCardIndex(index);
    };

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' height='100%'>
            <Grid item xs={12}>
                <>
                    {swiperDetails.map((swiperDetail: SwiperDetailType, index) => (
                        <Card
                            key={swiperDetail.index}
                            sx={{display: selectedCardIndex === index ? 'flex' : 'none'}}
                            className='swiper-card'
                        >
                            <CardMedia
                                component="img"
                                image={swiperDetail.imageLink}
                                alt="Live from space album cover"
                                className='swiper-card-image'
                            />
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <CardContent sx={{flex: '1 0 auto'}}>
                                    <div className='swiper-card-header'>
                                        {swiperDetail.header}
                                    </div>
                                    <div className='swiper-card-body'>
                                        {swiperDetail.body}
                                    </div>
                                </CardContent>
                            </Box>
                        </Card>
                    ))}
                </>
                <Stack
                    direction={{xs: 'column', sm: 'row'}}
                    spacing={{xs: 1}}
                    alignItems='start'
                >
                    {swiperDetails.map((swiperDetail: SwiperDetailType, index) => (
                        <Item
                            key={swiperDetail.index}
                            onMouseEnter={() => handleItemHover(index)}
                            onMouseLeave={() => handleItemHover(0)}
                            style={{
                                opacity: selectedCardIndex === index ? '1' : '0.3',
                                width: selectedCardIndex === index ? '80px' : '40px',}}
                        />
                    ))}
                </Stack>
            </Grid>
        </Grid>
    );
}

export default CardSwiper;
