import React,{ Component } from 'react'
import ResponsiveGallery from 'react-responsive-gallery'
import importAll from 'import-all.macro'
import '../scss/Events.scss'
    
const photoArray = Object.values(importAll.sync('../assets/flyers/*.jpg'))

const innerViewportHeight = window.innerHeight
const innerViewportWidth = window.innerWidth


const Posters = (params) => photoArray.map((item, index) =><img className={"posterBoy"+index} id="Poster" src={item} alt="Flyer">
  </img>)


export default class Events extends Component {
    render() {
        return (
           <div className="Events"
           >
            <Posters/>

   
           </div>
          
        )
    }

}


