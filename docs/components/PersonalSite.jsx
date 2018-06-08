import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(
        <div>
            <Navigation/>
        </div>
        , root);
});