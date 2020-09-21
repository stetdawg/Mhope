import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import './scss/App.scss'
import './scss/Home.scss'
import App from './App.js'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


AOS.init({
  offset: 200,
  deslay: 3,
  once: false,
  duration: 900,
  easing: "ease-in-cubic"
})
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  
  <App />

  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
