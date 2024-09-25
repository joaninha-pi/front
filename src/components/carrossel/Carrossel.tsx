// src/components/carrossel/Carrossel.tsx
import React from 'react';
import Slider from 'react-slick';

const Carrossel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src="https://source.unsplash.com/random/800x400/?nature" alt="Nature" className="w-full rounded-lg" />
                </div>
                <div>
                    <img src="https://source.unsplash.com/random/800x400/?farm" alt="Farm" className="w-full rounded-lg" />
                </div>
                <div>
                    <img src="https://source.unsplash.com/random/800x400/?vegetables" alt="Vegetables" className="w-full rounded-lg" />
                </div>
                <div>
                    <img src="https://source.unsplash.com/random/800x400/?sustainability" alt="Sustainability" className="w-full rounded-lg" />
                </div>
            </Slider>
        </div>
    );
};

export default Carrossel;