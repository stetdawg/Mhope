import React from 'react'
import '../scss/Footer.scss'
import EmailCapture from './EmailCapture'
import Twitter from '../assets/icons/Twitter.svg'
import Facebook from '../assets/icons/Facebook.svg'
import Instagram from '../assets/icons/Instagram.svg'

const Footer = () => <div className="footer">

<div id="social-media-links">
    <h4>Social Media</h4>
    <div id="link-container">
        <span id="Facebook-Logo"> 
            <img className="social-icons"  src={Facebook} alt="Facebook Logo" /> Facebook</span>
        <span id="Twitter-Logo"> 
            <img className="social-icons" src={Twitter} alt="Twitter Logo"  />  Twitter</span>
        <span id="Instagram-Logo"> 
            <img className="social-icons" src={Instagram} alt="Instagram Logo" /> Instagram</span>
    </div>
</div>

<div id="contact-us">
    <h4>Contact Us </h4>
    <span>(424) 234-8865</span>
    <br/>
    <span>P.O. Box 10248 <br/> Marina Del Rey, CA 90295</span>
</div>

<div id="Copyright">
    (c) 2020 Mastering Hope. All Rights Reserved.
</div>

<div id="email-capture1">
            <p>Please join our mailing list today!<br/> 
            We'll keep in touch and keep you informed.</p>
               <div id="form">
                <label htmlFor="email">Email: </label>
                <input type="text" id=""/>
                <label htmlFor="name">Name: </label>
                <input type="text" id=""/>
               </div> 
            </div>
</div> 


export default Footer