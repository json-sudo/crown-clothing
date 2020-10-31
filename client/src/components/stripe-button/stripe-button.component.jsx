import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const stripePrice = price * 100,
          publishableKey = 'pk_test_6PfhpPsjDD8nmWlHQxqqLTma00LuhCeVOG';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: stripePrice,
                token 
            }
        })
        .then(response => {
            console.log(token)
            alert('payment successful')
        })
        .catch(error => {
            alert('It seems there was somehing wrong with your transaction, please ensure you used the provided credit card correctly ')
            console.log('Payment error: ', JSON.parse(error))
        })
    }

    return (
        <StripeCheckout 
            label='Buy Now'
            name='Crown Clothing Inc.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total bill is $${price}`}
            amount={stripePrice}
            panelLabel='Buy Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;