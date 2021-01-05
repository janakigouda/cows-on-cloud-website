import React , {useState} from 'react';
import screenshot from '../assets/screenshot.jpeg';
import playstore from '../assets/playstore.svg';
import apple from '../assets/apple.svg';

function Header() {
    const [active, setActive] = useState(false);
    return (
        <header>
            <nav>
                <div id="menuToggle" className="logo2" onClick={() => setActive(!active)}><i className="fa fa-bars"></i></div>
                <div className="logo1"><a href="/">CowsOnCloud</a></div>
                <div className={active ? "navigation open" : "navigation"}>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Team</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
            </nav>
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
        </header>
    );
}

export default Header;