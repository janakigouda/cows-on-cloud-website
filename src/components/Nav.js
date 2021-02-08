import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
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
    const [navbar, setNavbar] = useState(false);

    const changeBackgrounfcolor= () =>{
        if(window.scrollY >= 1){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',changeBackgrounfcolor)


    return (
        <Router>
                <div className="navigation-container">
                    <nav className={navbar ? "active" : ""}>
                        <div id="menuToggle" className="logo2" onClick={() => setActive(!active)}><i className="fa fa-bars"></i></div>
                        <div className="logo1"><Link to="/cows-on-cloud-website">CowsOnCloud</Link></div>
                        <div className={active ? "navigation open" : "navigation"}>
                            <ul onClick={() => setActive(!active)} className="navbar">
                                <li>
                                    <NavLink to="/cows-on-cloud-website" activeClassName="navbar__link--active" className="navbar__link" exact={true} >Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" activeClassName="navbar__link--active" className="navbar__link">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services" activeClassName="navbar__link--active" className="navbar__link">Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/team" activeClassName="navbar__link--active" className="navbar__link">Team</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" activeClassName="navbar__link--active" className="navbar__link">Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login" activeClassName="navbar__link--active" className="navbar__link">Login</NavLink>
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
                    <Route path="/cows-on-cloud-website" exact={true}>
                        <Home />
                    </Route>
                </Switch>
        </Router>
    );
}

export default Nav;