import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class DonateButton extends Component {

      
onClick =  (props) => {
      
      var checkoutButton = document.getElementById('checkout-button-price_1HUSZ3AthQ6lCmK1htqdj0Hd')
      const stripe = window.Stripe('pk_live_51HNlgkAthQ6lCmK1MR2oqUT7CA1IT1a9osdkNHrIL7cluue9R7dsCcH1hsj2sfyQ7OiKGlQGC4WKw4C9KCZKM5O500sernw1ww')
        // When the customer clicks on the button, redirect
        // them to Checkout.      checkoutButton.addEventListener('click',  function (props) { })
        stripe.redirectToCheckout({
          lineItems: [{
            price: this.props.priceSKU,
            quantity: 1}],
          mode: 'payment',
          successUrl: `${window.location.origin}/success`,
          cancelUrl: window.location.origin,
        })
        .then(function (result) {
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer.
            var displayError = document.getElementById('error-message');
            displayError.textContent = result.error.message;
          }
        })
     
    }

    render() {
        return (
            <button
                style={{
                backgroundColor: '#6772E5',
                color: '#FFF',
                padding: '8px 12px',
                border: 0,
                borderRadius: '4px',
                fontSize: '1em'
                }}
                id="checkout-button"
                role="link"
                type="button"
                onClick={() => this.onClick(this.props.priceSKU)}>
            Donate ${this.props.price}
            </button>  
    )}
}

DonateButton.propTypes = {
    priceSKU: PropTypes.string,
    price: PropTypes.number

}

export default DonateButton