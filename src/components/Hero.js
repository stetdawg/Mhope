import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MHFB from '../assets/MHFB.jpg'
import '../scss/Hero.scss'





export default class Hero extends Component {
    imgRotate = () => {
        
    }
    
    render() {
        return (
            <div id='hero-container'>
                <img src={MHFB} alt="Hero-Image"/>
            </div>
        )
    }
}
