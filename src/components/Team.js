import React from 'react';
import sujit from '../assets/sujit.jpg';
import prasad from '../assets/prasad.jpg';
import md from '../assets/md.jpg';
//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//Owl Carousel Settings
const options = {
    nav:false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
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
class Team extends React.Component {
    render() {
        return (
            <div className="team">
                <div className="team-container">
                    <div className="t-name">
                        <div>
                            Our Amazing Team
                    </div>
                    </div>
                    <div className="team-body">
                        <OwlCarousel className="slider-items owl-carousel" {...options}>
                            <div className="card card-1">
                                <div className="card-img">
                                    <img src={sujit} alt="sujit"></img>
                                </div>
                                <div className="desc">
                                    <div className="f-name">Sujit H</div>
                                    <div className="founder">Founder</div>
                                    <div className="social-media">
                                        <div>
                                            <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                        </div>
                                        <div>
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </div>
                                        <div>
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-2">
                                <div className="card-img">
                                    <img src={prasad} alt="prasad"></img>
                                </div>
                                <div className="desc">
                                    <div className="f-name">Prasad Desai</div>
                                    <div className="founder">Founder</div>
                                    <div className="social-media">
                                        <div>
                                            <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                        </div>
                                        <div>
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </div>
                                        <div>
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-3">
                                <div className="card-img">
                                    <img src={md} alt="md"></img>
                                </div>
                                <div className="desc">
                                    <div className="f-name">Madhav Hebbar</div>
                                    <div className="founder">Founder</div>
                                    <div className="social-media">
                                        <div>
                                            <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                        </div>
                                        <div>
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </div>
                                        <div>
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;