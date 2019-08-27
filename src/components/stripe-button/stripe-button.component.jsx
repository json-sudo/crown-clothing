import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const stripePrice = price * 100,
          publishableKey = 'pk_test_6PfhpPsjDD8nmWlHQxqqLTma00LuhCeVOG';

    const onToken = token => console.log(token)

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