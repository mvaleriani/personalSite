import React from 'react';

class Navigation extends React.Component{
    render(){
        return(
            <div className="col-lg-2 pd-left">
                <div className="mobile-nav">
                    <i className="fa ion-navicon" aria-hidden="true"></i>
                    <span>Menu</span>
                </div>
                <nav className="nav-menu">
                    <div className="header-menu">
                        <a className="menu-logo" href=""><img src="assets/images/personalIcon.png" alt="logo"/></a>
                    </div>
                        <ul className="menu-text clk">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <ul className="social-links">
                            <li><a href=""><i className="fa ion-social-twitter" aria-hidden="true"></i></a></li>
                            <li><a href=""><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                            <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;