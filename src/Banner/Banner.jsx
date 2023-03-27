import React from 'react';
import './Banner.css'
import Hero from '../assets/Group 12.jpg'

const Banner = () => {
    return (
        <div className='container'>
            <div className='inner_hero'>
                <div className='hero_text'>
                <strong>Sale up to 70% Off</strong>
                <h1>New Collection For Fall</h1>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <button>Shop Now</button>
            </div>
            <div className='img_area'>
                <img src={Hero} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;