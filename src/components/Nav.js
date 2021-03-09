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
import { TitleComponent } from './TitleComponent';

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

    // setting title
    const withTitle = ({ component: Component, title }) => {
        return class Title extends Component {
            render() {
                return (
                    <React.Fragment>
                        <TitleComponent title={title} />
                        <Component {...this.props} />
                    </React.Fragment>
                );
            }
        };
    };
    // const HomeComponent = withTitle({ component: Home, title: 'Home' });
    const AboutComponent = withTitle({ component: About, title: 'About' });
    const ContactComponent = withTitle({ component: Contact, title: 'Contact' });
    const ServicesComponent = withTitle({ component: Services, title: 'Services' });
    const TeamComponent = withTitle({ component: Team, title: 'Team' });
    const LoginComponent = withTitle({ component: Login, title: 'Login' });



    return (
        <Router>
                <div className="navigation-container">
                    <nav className={navbar ? "active" : ""}>
                        <div id="menuToggle" className="logo2" onClick={() => setActive(!active)}><i className="fa fa-bars"></i></div>
                        <div className="logo1"><Link to="/">CowsOnCloud</Link></div>
                        <div className={active ? "navigation open" : "navigation"}>
                            <ul onClick={() => setActive(!active)} className="navbar">
                                <li>
                                    <NavLink to="/" activeClassName="navbar__link--active" className="navbar__link" exact={true} >Home</NavLink>
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
                    <Route path="/about" component={AboutComponent}>
                        <About />
                    </Route>
                    <Route path="/services" component={ServicesComponent}>
                        <Services />
                    </Route>
                    <Route path="/team" component={TeamComponent}>
                        <Team />
                    </Route>
                    <Route path="/contact" component={ContactComponent}>
                        <Contact />
                    </Route>
                    <Route path="/login" component={LoginComponent}>
                        <Login />
                    </Route>
                    <Route path="/" exact={true}>
                        <Home />
                    </Route>
                </Switch>
        </Router>
    );
}

export default Nav;