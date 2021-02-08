import React from 'react';
import back from '../assets/unnamed.png';
import back1 from '../assets/unnamed (1).png';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <div className="c-name">
                    <div>ADIS</div>
                </div>
                <div className="c-desc">
                    <div>ANIMALS DIGITAL INFORMATION SYSTEM</div>
                </div>
                <div className="unnamed">
                    <img className="unnamed-img" src={back1} alt="background-img1" />
                </div>
            </div>
            <div className="bac-img">
                <img src={back} alt="bacground-img" className="back-img1"/>
            </div>
        </div>
    );
}
export default Home;