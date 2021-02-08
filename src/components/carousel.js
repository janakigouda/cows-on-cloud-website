import React from 'react';
import owl1 from '../assets/ddd.png';
import owl2 from '../assets/pr.jpg';
import owl3 from '../assets/team.jpg';
//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const option = {
    nav:false,
    items: 2,
    loop: true,
    dots:true,
    center: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 3,
        },
        600: {
            items: 3,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 3,
        }
    },
};

export default function Carousel() {
    return (
        <div className="about-down-container">
            <div className="ab-head-name">Gallery</div>
            <OwlCarousel className="slider-items owl-carousel" {...option}>
                <div className="item">
                    <div className="img"><img src={owl1} alt="owl1"/></div>
                    <div className="i-name"><p>Our Achievement</p></div>
                </div>
                <div className="item">
                    <div className="img"><img src={owl2} alt="owl2"/></div>
                    <div className="i-name"><p>Our Achievement</p></div>
                </div>
                <div className="item">
                    <div className="img"><img src={owl3} alt="owl3"/></div>
                    <div className="i-name"><p>Our Team</p></div>
                </div>
            </OwlCarousel>
        </div>
    );
}