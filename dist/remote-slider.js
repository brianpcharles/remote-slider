import React from 'react';
import ReactDOM from 'react-dom/client';
import Slider from '../src/Slider';

// Global attach
window.renderRemoteSlider = function (config, targetSelector = '#remote-slider') {
    const element = document.querySelector(targetSelector);
    if (!element) {
        console.error('renderRemoteSlider: target element not found:', targetSelector);
        return;
    }

    // Create a new root for every instance
    const root = ReactDOM.createRoot(element);
    root.render(<Slider config={config} />);
};
