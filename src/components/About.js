import React from 'react';
import Carousel from './carousel';
import back1 from '../assets/unnamed (1).png';
import back from '../assets/unnamed.png';


function About() {
    return (
        <div className="about-main">
            <div className="about">
                <div className="about-container">
                    <div className="ab-name"><h3>About</h3></div>
                    <div className="ab-para"><p className="para1">Adis Technologies Pvt Ltd is an agri-tech company that combines extension and technology to provide service support to the farmers by managening Pedigree records, health records and providing breeding assitance to improve their cattle breeds hence saving the farmers and their cattle from issues of cattle management in a scientific way, arising out of delay in addressing them timely.</p>
                        <p className="para2">All the is done through a simple smart phone app.We leveraging  smartphone to generate Big data for cattle on cloud with animal biometrics and facial recognition features connected to Cattle Management Tool & Centralised Database. </p>
                        <p className="para3">Making technology an efficient tool to Milk Forecasting, Remote veterinary services, Linking with fintech and insuring cattle, Enabling farmers to increase their income,Rear desi cattle in situ by breed identifications. All these technologies will reach each and every small-holder farmer via App mobile based application at every Village level for all in situ management of indeginious farmers and their cattle.</p>
                    </div>
                </div>
                <div className="about-down">
                    <Carousel />
                </div>
            </div>
            <div className="pngimgs">
                <div className="png-img">
                    <img className="png-img1" src={back1} alt="background-img1" />
                </div>
                <div className="png">
                    <img src={back} alt="bacground-img" className="png1" />
                </div>
            </div>

        </div>
    );
}

export default About;