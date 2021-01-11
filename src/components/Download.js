import React from 'react';
import screenshot from '../assets/screenshot.jpeg';
import playstore from '../assets/playstore.svg';
import apple from '../assets/apple.svg';

function Download(){
    return(
        <div className="download">
                <div className="dow-container">
                    <div className="download-btn">
                        <p className="download-name">Click To Download</p>
                        <div className="btns">
                            <div className="google">
                                <img src={playstore} alt="playstore"/>
                                <div className="btn-name">
                                    <p className="btn-name-get">GET IT ON</p>
                                    <a className="btn-name-google" href="#download">Google play</a>
                                </div>
                            </div>
                            <div className="apple">
                                <img src={apple} alt="apple"/>
                                <div className="btn-name">
                                    <p className="btn-name-on">Download on the</p>
                                    <a className="btn-name-apple" href="#download">Apple Store</a>
                                </div>
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