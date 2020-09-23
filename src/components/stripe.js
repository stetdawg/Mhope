import React,{ Button } from 'react'
import ReactDOM from 'react-dom'
import CheckoutPage from './CheckoutPage.js'
import { Elements, } from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import '../scss/stripe.scss';







const stripe = (params) =><Elements stripe={stripePromise} > 
        <CheckoutPage myPromise={stripePromise} />
     
</Elements> 

export default stripe