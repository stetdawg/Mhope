import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HeroImage from '../assets/hero/MHFB-opt.webp'
import HeroMobileImage from '../assets/hero/MHFB-opti-mobile.webp'
import HeroXL from '../assets/hero/mhfbjumbo.webp'

import '../scss/Hero.scss'

const innerViewportHeight = window.innerHeight

const innderViewportWidth = window.innerWidth



export default class Hero extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount() {
        
    }
    imgRotate = () => {
        
    }

    render() {
        return (
            <>
                {/* <img loading="eager" id="desktop-hero" src={HeroImage} alt=""/> */}
                <img loading="eager" id="mobile-hero" src={HeroMobileImage} width={innderViewportWidth}  alt=""/>
                <img loading="eager" id="desktop-hero" height={innerViewportHeight-84} width={innderViewportWidth} src={HeroXL} alt="" />
            </>
        )
    }
}
