import React from 'react';
import cowMouth from '../assets/cow12.jpg'
//fontawesome
import 'font-awesome/css/font-awesome.min.css';

class Services extends React.Component {
    render() {
        // function Services() {
        return (
            <div className="services">
                <div className="services-container">
                    <div className="ser-head">
                        <div className="ser-name">
                            <h3>Our Services</h3>
                        </div>
                        <div className="ser-par">
                            <p>Get Started!!!</p>
                        </div>
                    </div>
                    <div className="ser-body">
                        <div className="ser-card1">
                            <div className="ser-icon">
                                <img src={cowMouth} alt="recognization" />
                            </div>
                            <div className="ser-desc">
                                <h4>Cow Recognition</h4>
                                <p>Find the Breed of Cow</p>
                            </div>
                        </div>
                        <div className="ser-card2">
                            <div className="ser-icon">
                                <i className="fa fa-laptop" aria-hidden="true"></i>
                            </div>
                            <div className="ser-desc">
                                <h4>Record Maintanance</h4>
                                <p>We Maintain Pedigree Records</p>
                            </div>
                        </div>
                        <div className="ser-card1">
                            <div className="ser-icon">
                                <i className="fa fa-registered" aria-hidden="true"></i>
                            </div>
                            <div className="ser-desc">
                                <h4>Cattle Management</h4>
                                <p>We Provide Cattale Management Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Services;