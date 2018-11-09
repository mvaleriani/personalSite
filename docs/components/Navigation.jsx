import React from 'react';

class Navigation extends React.Component{
    constructor(){
        super();
        let opts = [];
    }

    render(){
        return(
            <div className="col-lg-2 pd-left">
                <div className="mobile-nav">
                    <i className="fa ion-navicon" aria-hidden="true">
                        <div className="mobile-nav-bg"></div>
                    </i>
                    <span>Menu</span>
                </div>
                <nav className="nav-menu">
                    <div className="header-menu">
                        <a className="menu-logo" href="#home"><img src="assets/images/personalIcon.png" alt="logo"/></a>
                    </div>
                        <ul className="menu-text clk">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <ul className="social-links">
                            <div>
                                <li>
                                    <a href="https://www.linkedin.com/in/michael-valeriani/" target="_blank"><img src="./assets/images/linkedinLogo.svg" style={{ width: '30px' }} /></a>
                                </li>
                                <li>
                                    <a href="https://github.com/mvaleriani/" target="_blank"><img src="./assets/images/githubLogo.svg" style={{ width: '32px' }} /></a>
                                </li>
                            </div>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                <li style={{marginTop: '2px'}}>
                                    <a href="https://codepen.io/mvaleriani/" target="_blank"><img src="./assets/images/codepenLogo.svg" style={{ width: '32px' }} /></a>
                                </li>
                            </div>
                        </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;