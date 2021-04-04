import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HeroImage from '../assets/hero/MHFB-opt.webp'
import HeroMobileImage from '../assets/hero/b1.webp'
import HeroXL from '../assets/hero/mhfbjumbo.webp'

import '../scss/Hero.scss'

const innerViewportHeight = window.innerHeight

const innerViewportWidth = window.innerWidth



export default class Hero extends Component {


   
    imgRotate = () => {
        
    }

    render() {
        return (
            <>
                {/* <img loading="eager" id="desktop-hero" src={HeroImage} alt=""/> */}
                <img loading="eager" id="mobile-hero" src={HeroMobileImage} width={innerViewportWidth}  alt=""/>
                <img loading="eager" id="desktop-hero" width={innerViewportWidth} src={HeroXL} alt="" />
            </>
        )
    }
}
