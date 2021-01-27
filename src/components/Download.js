import React from 'react';
import screenshot from '../assets/screenshot.jpeg';
import playstore from '../assets/playstore.svg';
import apple from '../assets/apple.svg';

function Download() {
    return (
        <div className="download">
            <div className="dow-container">
                <div className="download-btn">
                    <p className="download-name">Click To Download</p>
                    <div className="btns">
                        <a href="https://play.google.com/store/apps/details?id=com.adis.cows" target="_blank" rel="noopener noreferrer">
                            <div className="google">
                                <img src={playstore} alt="playstore" />
                                <div className="btn-name">
                                    <p className="btn-name-get">GET IT ON</p>
                                    <p className="btn-name-google">Google play</p>
                                </div>
                            </div>
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer" className="apple-btn">
                            <div className="apple">
                                <img src={apple} alt="apple" />
                                <div className="btn-name">
                                    <p className="btn-name-on">Download on the</p>
                                    <p className="btn-name-apple">Apple Store</p>
                                </div>
                            </div>
                        </a>
                        <div className="hide">
                            <div>Coming soon</div>
                        </div>
                    </div>
                </div>
                <div className="mobile-img">
                    <img src={screenshot} alt="img" />
                </div>
            </div>
        </div>
    );
}

export default Download;