import React from 'react';
import ReactDOM from 'react-dom/client';
import Slider from './Slider'; // make sure Slider.jsx is in /src

// Create root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Example config (replace slidesUrl with your JSON)
const exampleConfig = {
  loop: false,
  thumbnails: {
    desktop: { enabled: true, direction: 'vertical' },
    mobile: { enabled: false, direction: 'horizontal' },
    breakpoint: 768
  },
  desktopCrop: { width: 700, height: 700 },
  mobileCrop: { width: 400, height: 500 },
  imageProps: { blurEnabled: true, lazyLoad: true, objectFit: 'cover' },
  videoProps: { autoplay: true, muted: true, loop: true, playsInline: true, objectFit: 'cover' },
  slidesUrl: 'https://sharkninja-sfcc-prod-res.cloudinary.com/any/list/FS605-MASTER-9fbce4-large.json',
  resourcePath: {
    image: 'https://sharkninja-sfcc-prod-res.cloudinary.com/image/upload/',
    video: 'https://sharkninja-sfcc-prod-res.cloudinary.com/video/upload/'
  },
  transformations: {
    image: 'b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,g_north,h_700,q_auto,w_700/c_pad,h_700,w_700/',
    gif: 'c_limit,f_auto:animated,fl_lossy,q_auto:low,w_700/',
    video: 'b_rgb:FFFFFF,c_pad,dpr_2.0,du_30,g_north,h_700,w_700/c_pad,h_700,w_700/f_auto:video/',
    thumbnail: 'b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,g_north,h_100,q_auto,w_100/c_pad,h_100,w_100/'
  }
};

// Mount slider
root.render(<Slider config={exampleConfig} />);

// Optional: expose globally for remote use
window.renderRemoteSlider = (config) => {
  root.render(<Slider config={config} />);
};