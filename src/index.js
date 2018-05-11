import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
<BrowserRouter>
  <ParallaxProvider>
    <App />
  </ParallaxProvider>
</BrowserRouter>
, document.getElementById('root'));
