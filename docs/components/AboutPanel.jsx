import React from 'react';
import load from 'particles.js'

class AboutPanel extends React.Component {
    
    componentDidMount(){
        particlesJS.load('particles-js', './particles.json', function () {
            console.log('callback - particles.js config loaded');
        });
    }
    
    render() {
        return (
            <div id='react-about-panel'>
                <div id="particles-js"></div>

                <script src="particles.js"></script>
            </div>
        );
    }
}

export default AboutPanel;

