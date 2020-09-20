import React, { Fragment, Component } from 'react'
import '../scss/HomeItem.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'



export class HomeItem extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }

    render() {

        return (
            <Fragment> 
            <div 
             data-aos="fade-in"
             class="gallery-box" 
             id={this.props.id}>
                    <img loading="lazy" id="hero-gallery-image" src={this.props.image} alt=""/>
                    <div id="text-holder">
                        <h1 class="title">{this.props.title}</h1>
                        <p class="copy">{this.props.copy}</p>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default HomeItem
