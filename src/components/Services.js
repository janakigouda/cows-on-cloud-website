import React from 'react';

function Services() {
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
                    <div className="ser-card">
                        <div className="ser-icon">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div className="ser-desc">
                            <h4>Cow Recognition</h4>
                            <p>Find the Breed of Cow</p>
                        </div>
                    </div>
                    <div className="ser-card">
                        <div className="ser-icon">
                            <i className="fa fa-laptop" aria-hidden="true"></i>
                        </div>
                        <div className="ser-desc">
                            <h4>Record Maintanance</h4>
                            <p>We Maintain Pedigree Records</p>
                        </div>
                    </div>
                    <div className="ser-card">
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
export default Services;