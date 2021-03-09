import React from 'react';
import back from '../assets/unnamed.png';
import back1 from '../assets/unnamed (1).png';
import { TitleComponent } from './TitleComponent';


export default function Login() {

    return (
        <React.Fragment>
            <TitleComponent title="Login" />
            <div className="home login">
                <div className="login-container">
                    <div className="btns">
                        <div className="btns1">
                            <div className="button-container" >
                                <div className="div">
                                    <a href="http://www.cowsoncloud.com/cowsoncloud/LOGIN" className="button button1" target="blank"> Sign In</a>
                                </div>
                            </div>
                            <div className="button-container">
                                <div className="div">
                                    <a href="http://www.cowsoncloud.com/cowsoncloud/signup.php" className="button button2" target="blank"> Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="unnamed">
                        <img className="unnamed-img" src={back1} alt="background-img1" />
                    </div>
                </div>
                <div className="bac-img">
                    <img src={back} alt="bacground-img" className="back-img1" />
                </div>
            </div>

        </React.Fragment>
    );
}