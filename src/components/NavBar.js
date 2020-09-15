import React from 'react'
import  '../scss/Nav.scss'
import logo from '../assets/Logo_MasteringHope_Plain.png'
import '../scss/Gallery.scss'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const NavBar = () => <> 
    <div className="navBar">
    <img src={logo} alt="LOGO" id="logo"/>
        <nav>
            <ul>
            <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/AboutUs">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/Gallery">Gallery</NavLink>
                </li>
                {/* <ui>
                    <NavLink to="/"></NavLink>
                </ui>
                <ui>
                    <NavLink to="/"></NavLink>
                </ui>*/}
            </ul> 
        </nav>
    </div>
 

</>

export default NavBar