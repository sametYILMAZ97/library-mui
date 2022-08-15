import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div
    style={{
      backgroundImage: `url(${require('./assets/images/siteBack.png')})`,
      // backgroundImage: `url(${require('./assets/images/siteBack2.jpg')})`,
      // backgroundImage: `url(${require('./assets/images/siteBack3.jpg')})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

      // backgroundColor: 'gray',
    }}
  >
    <App />
  </div>
);
