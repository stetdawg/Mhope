import React, { Fragment, Component } from 'react'
import '../scss/HomeItem.scss'




export class HomeItem extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }
 
    render() {
        return (
            <Fragment> 
            <div class="" id={this.props.id}>
                <div id="img-holder">
                    <img src={this.props.image} alt=""/>
                    </div>

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
