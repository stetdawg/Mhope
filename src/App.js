import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import {Route, Switch } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'



AOS.init({
  offset: 200,
  deslay: 3,
  once: true,
  duration: 900,
  easing: "ease-in-cubic"
})


function App() { 

  return (
    <div className="App">

      <NavBar />
      
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        
        <Route exact path="/AboutUs">
          <AboutUs/>
        </Route>

        <Route exact path="/Gallery">
          <Gallery/>
        </Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
