import React from 'react';
import Download from './Download';

export default function Footer() {
    return (
        <div className="footer">
            <div className="f-container">
                <div className="part1">
                    <div className="div1">
                        <div className="heading">
                            Our Mission
                        </div>
                        <div className="brand-name">CowsOnCloud</div>
                        <div className="brand-tag">Animals Digital Information System</div>
                    </div>
                    <div className="div2">
                        <div className="heading">
                        Contact Details
                        </div>
                        <div className="details">
                            <h4>Adis Technologies</h4>
                            <p>Hanuman nagar, Hindwadi</p>
                            <p>Belgaum</p>
                            <p>Karnataka</p>
                            <p><a href="mailto:cowsoncloud@gmail.com">Email: cowsoncloud@gmail.com</a></p>
                            <a href="tel:+91 876543210"> <i className="fa fa-phone" aria-hidden="true"></i> +91 876543210</a>
                        </div>
                    </div>
                    <div className="div3">
                        <Download />
                    </div>
                </div>
                <div className="part2">
                    <div className="division1">
                        <div className="privacy">
                            <a href="/">Privacy Policy</a>
                        </div>
                        <div className="vl"></div>
                        <div className="terms">
                            <a href="/">Terms of Use</a>
                        </div>
                    </div>
                    <div className="division2">
                        <div className="copyright">
                            <h4>©2021 <a href="/">CowsOnCloud.com </a>. All Rights Reserved.</h4>
                            <h3>Managed by Adis Technologies | Belagavi</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}