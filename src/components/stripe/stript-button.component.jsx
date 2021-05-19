import React from 'react';
import StripeCheckout  from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishKey = 'pk_test_51IsfN7SCryCJMHBvkt1bynKpplP7bf6Z5v9cRIgVty6tyNFp1o45xbLvs9GNazMtWzQxHzI3yChnsnHryvsqvQEM00NMSdXHW4';

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }
    return(
        <StripeCheckout 
            label='Pay Now' 
            name = "Crwn Clothing"
            billingAddress
            description ={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel= 'Pay Now'
            token = {onToken}
            stripeKey={publishKey}
        />
    )
}
export default StripeCheckoutButton