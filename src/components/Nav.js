import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Services from './Services';
import Team from './Team';
import Contact from './Contact';
import Login from './Login';

function Nav() {
    const [active, setActive] = useState(false);
    return (
        <Router>
                <div className="navigation-container">
                    <nav>
                        <div id="menuToggle" className="logo2" onClick={() => setActive(!active)}><i className="fa fa-bars"></i></div>
                        <div className="logo1"><Link to="/">CowsOnCloud</Link></div>
                        <div className={active ? "navigation open" : "navigation"}>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/team">Team</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                    <Route path="/team">
                        <Team />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
        </Router>
    );
}

export default Nav;