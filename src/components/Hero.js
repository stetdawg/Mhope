import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HeroImage from '../assets/hero/MHFB-opt.webp'
import HeroMobileImage from '../assets/hero/MHFB-opti-mobile.webp'

import '../scss/Hero.scss'





export default class Hero extends Component {
    imgRotate = () => {
        
    }
    
    render() {
        return (
            <>
                <img loading="eager" id="desktop-hero" src={HeroImage} alt=""/>
                <img loading="eager" id="mobile-hero" src={HeroMobileImage} alt=""/>
            </>
        )
    }
}
