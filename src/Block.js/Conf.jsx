import React from 'react'
import './Conf.css'

const Conf = () => {
  return (
    <div className="container">
        <h1>PAYMENT CONFIRMATION✅</h1>
        <p>Thank you for choosing our membership plan!</p>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p>Membership Plan: Premium</p>
          <p>Price: $99.99/month</p>
        </div>
        <div className="payment-details">
          <h2>Payment Details</h2>
          <p>Payment Method: Credit Card</p>
          <p>Card Number: XXXX-XXXX-XXXX-1234</p>
          
        </div>
        <div className="next-steps">
          <h2>Next Steps</h2>
          <p>Your membership plan is now active!</p>
          <p>You can start enjoying the premium features immediately.</p>
        </div>
        
        <button className="ton"><a style={{color:"white"}} href="/MainD">Continue</a></button>
      </div>
  )
}

export default Conf;