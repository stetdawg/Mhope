import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import ResponsiveGallery from 'react-responsive-gallery'
import img from '../assets/DSC00434.jpg'
import img1 from '../assets/DSC00434.jpg'
import img2 from '../assets/DSC00434.jpg'
import img3 from '../assets/DSC00434.jpg'
import img4 from '../assets/DSC00434.jpg'
import img5 from '../assets/DSC00434.jpg'
import img6 from '../assets/DSC00434.jpg'
import img7 from '../assets/DSC00434.jpg'
import img8 from '../assets/DSC00434.jpg'
import img9 from '../assets/DSC00434.jpg'
    
const images = [
    {src:  img,
        width: 4,
        height: 3
    },
    {src:  img1,
        width: 4,
        height: 3},
    {src:  img2,
        width: 4,
        height: 3},
    {src:  img3,
        width: 4,
        height: 3},
    {src:  img4,
        width: 4,
        height: 3},
    {src:  img5,
        width: 4,
        height: 3}
]

export default class Gallery extends Component {


  
    
    render() {
        return (
            <ResponsiveGallery photos={images}/>

        )
    }
}


