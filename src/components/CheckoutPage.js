import React, {useState} from 'react'
import Button from './DonateButton'
import '../scss/stripe.scss'
import img1 from '../assets/hero/saa.webp'
import img2 from '../assets/hero/CC.webp'


class CheckoutPage extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
   }
  


render(){  

  return(
    
  <div data-aos="fade-in-up" data-aos-duration="100" data-aos-easing="ease-in-quart" id='Checkout' >
    <img src={img1} id='award1' alt=""/>
    <img src={img2} id='award2' alt=""/>

    <h1 >Donate Today</h1>



    <div id="donate-wrapper">


<div id="button-holder">
    <Button
      priceSKU={'price_1HUSZ3AthQ6lCmK1htqdj0Hd'}
      price={5}
    />
        <Button
      priceSKU={'price_1HUSZ3AthQ6lCmK1I7QGdPBr'}
      price={15}
    />
        <Button
      priceSKU={'price_1HUSZ3AthQ6lCmK1cS8RAbLc'}
      price={25}
    />
        <Button
      priceSKU={'price_1HUSZ4AthQ6lCmK1hKcztoBy'}
      price={50}      
    />
     <Button
      priceSKU={'price_1HUSZ3AthQ6lCmK1JhfhlFLQ'}
      price={100}      
    />
         <Button
      priceSKU={'price_1HUgbXAthQ6lCmK1Dnyu9xAK'}
      price={250}      
    />
         <Button
      priceSKU={'price_1HUgbhAthQ6lCmK1VUJmpDE0'}
      price={500}      
    />
    </div>
    
<div data-aos="fade-in-up" data-aos-once="true" data-aos-duration="550" data-aos-easing="ease-in-quart" id="copy1">
      <h2>Every. Cent. Helps.</h2>
      <p> Mastering Hope exists soley due to the generosity we have seen by our community. Today with the help of you and many others we can continue to make the world a better place. The author Mark Grey said a team is only as strong as its weakest link. We say, our communities, societies, and world, are as good as we make them. You are the key. We need monetary, food, school supply, and technology donations to help further our goals of strengthening communities as we chart the path to a better world. We need you to help us, help others. After all, teamwork is the foundation of hope. Thank you for your consideration.</p>
    </div>
    <div id="error-message">

    </div>
  </div>
  </div>)
}
}


export default CheckoutPage
