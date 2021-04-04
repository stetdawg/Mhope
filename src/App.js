import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Donate from './components/CheckoutPage'
import Success from './components/Success'

import {Route, Switch } from 'react-router-dom'



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

        <Route exact path="/Events">
          <Events/>
        </Route>

        <Route exact path="/Donate">
          <Donate/>
        </Route>

        <Route exact path="/Success">
          <Success/>
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
