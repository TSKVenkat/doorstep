import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Feature from './Feature.jsx'
import Footer from './Footer.jsx'
import Products from './Products.jsx'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root1')).render(
  <React.StrictMode>
    <Feature />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root2')).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root3')).render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();