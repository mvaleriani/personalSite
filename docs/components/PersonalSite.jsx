import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './Navigation';
import AboutPanel from './AboutPanel';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(
        <div>
            <Navigation/>
        </div>
        , root);
});

document.addEventListener('DOMContentLoaded', () => {
    const aboutPanel = document.getElementById('about-panel');
    ReactDOM.render(
        <AboutPanel/>
        , aboutPanel);
});
