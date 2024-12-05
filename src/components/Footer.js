import React from 'react'
import '../scss/Footer.scss'
import Twitter from '../assets/icons/Twitter.svg'
import Facebook from '../assets/icons/Facebook.svg'
import Instagram from '../assets/icons/Instagram.svg'

const Footer = () => <div className="footer">

<div id="social-media-links">
    <h4>Social Media</h4>
    <div id="link-container">
        <span id="Facebook-Logo">
            <a href="https://www.facebook.com/mastering.hope.9"> 
                <img className="social-icons"  src={Facebook} alt="Facebook Logo" /> 
                Facebook
            </a>
           </span>
        <span id="Twitter-Logo">      
            <a href="#">
                 <img className="social-icons" src={Twitter} alt="Twitter Logo"  />  
                 Twitter
            </a>    
        </span>
        <span id="Instagram-Logo"> 
            <a href="https://www.instagram.com/masteringhope/">
            <img className="social-icons" src={Instagram} alt="Instagram Logo" /> Instagram
            </a>
        </span>
       
    </div>
</div>

<div id="contact-us">
    <h4>Contact Us </h4>
    <span>(310) 433-8556</span>
    <br/>
    <span>angelababer@masteringhope.com</span>
</div>

<div id="Copyright">
    (c) 2020 Mastering Hope. All Rights Reserved.
</div>


</div> 


export default Footer
