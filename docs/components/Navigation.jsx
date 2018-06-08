import React from 'react';

class Navigation extends React.Component{
    render(){
        return(
            <div class="col-lg-2 pd-left">
                <div class="mobile-nav">
                    <i class="fa ion-navicon" aria-hidden="true"></i>
                    <span>Menu</span>
                </div>
                <nav class="nav-menu">
                    <div class="header-menu">
                        <a class="menu-logo" href=""><img src="assets/images/personalIcon.png" alt="logo"/></a>
                    </div>
                        <ul class="menu-text clk">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <ul class="social-links">
                            <li><a href=""><i class="fa ion-social-twitter" aria-hidden="true"></i></a></li>
                            <li><a href=""><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
                            <li><a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;