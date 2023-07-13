import React, {useState} from 'react';
import {Card, CardContent, Grid, CardMedia, Typography} from '@mui/material';
import {CarouselDetailType} from "../../../types/types";
import Card1Image from "../../../assets/images/Card 1.png";
import Card2Image from "../../../assets/images/Card 2.png";
import Card3Image from "../../../assets/images/Card 3.png";
import Card4Image from "../../../assets/images/Card 4.png";
import './card-carousel.css'
import {ArrowLeft, ArrowRight} from "react-feather";

const CardCarousel = () => {

    const swiperDetails: CarouselDetailType[] = [
        {
            index: 1,
            imageLink: Card1Image,
            body: "Lorem ipsum dolor sit amet",
            price: "LKR 3,650.00"
        },
        {
            index: 2,
            imageLink: Card2Image,
            body: "consectetur adipiscing elit",
            price: "LKR 2,150.00",
        },
        {
            index: 3,
            imageLink: Card3Image,
            body: "Nulla facilisi. Integer aliquet",
            price: "LKR 1,650.00",
        },
        {
            index: 4,
            imageLink: Card4Image,
            body: "fermentum augue risus",
            price: "LKR 3,650.00"
        },
        {
            index: 5,
            imageLink: Card1Image,
            body: "Lorem ipsum dolor sit amet",
            price: "LKR 3,650.00"
        }
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImages = () => {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex >= swiperDetails.length - 3 ? 0 : newIndex);
    };

    const previousImages = () => {
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex < 0 ? swiperDetails.length - 4 : newIndex);
    };

    return (
        <div className="carousel">
            <Grid container direction='row' className="card-container">
                {
                    swiperDetails.slice(currentIndex, currentIndex + 4).map((cardDetail: CarouselDetailType, index) => (
                        <Card key={cardDetail.index} sx={{maxWidth: 376, marginBottom: 0}}>
                            <CardMedia
                                component='img'
                                image={cardDetail.imageLink}
                                alt={`Image ${index}`}
                                width='376px'
                            />
                            <CardContent>
                                <Typography gutterBottom className='carousel-card-body' component="div">
                                    {cardDetail.body}
                                </Typography>
                                <Typography variant="body2" className='carousel-card-price'>
                                    {cardDetail.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </Grid>
            <Grid container className="controls" justifyContent='center'>
                <button onClick={previousImages} className='control-button control-button-prew'>
                    <ArrowLeft
                        width='40px'
                        height='40px'
                        strokeWidth='1px'
                    />
                </button>
                <button  onClick={nextImages} className='control-button'>
                    <ArrowRight
                        width='40px'
                        height='40px'
                        strokeWidth='1px'
                    />
                </button>
            </Grid>
        </div>
    );
};

export default CardCarousel;
