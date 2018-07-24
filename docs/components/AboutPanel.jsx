import React from 'react';
import load from 'particles.js'

class AboutPanel extends React.Component {
    
    componentDidMount(){
        particlesJS.load('particles-js', 'https://raw.githubusercontent.com/mvaleriani/personalSite/master/docs/components/particles.json', function () {
            console.log('callback - particles.js config loaded');
        });
    }
    
    render() {
        return (
            <div id='react-about-panel'>
                {/* <div id="profile-img">
                    <img id="inside-img" src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" alt=""/>
                </div> */}
                <div id="particles-js">
                    <img id="inside-img" src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" alt="" />
                </div>

                <script src="particles.js"></script>
            </div>
        );
    }
}

export default AboutPanel;

