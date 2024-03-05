
import React, { useState } from 'react';
import './PaymentPage.css'; 
function PaymentPage() { 
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [billingAddress, setBillingAddress] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [validationError, setValidationError] = useState('');

  const handlePayment = () => {
    if (!cardNumber && !expiryDate && !cvv && !nameOnCard && !email && !billingAddress && !agreeToTerms) {
      setValidationError('All fields are required');
      return;
    }

    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };

  return (
    <div className="payment-container" style={{backgroundImage:"url('https://img.freepik.com/free-vector/green-curve-abstract-background_53876-99569.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709193600&semt=ais')", backgroundSize:"cover"}}>
      <h2 style={{color:"green",fontSize:"40px"}}>PAYMENT <span style={{color:"black"}}>PAGE</span></h2>
      <div className="payment-form" tyle={{backgroundClip:"black",color:"white"}}>
        <div className="input-group">
          <label>Payment Method:</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="googlePay">Google Pay</option>
            <option value="applePay">Apple Pay</option>
            
          </select>
        </div>
        {paymentMethod === 'creditCard' && (
          <div className="payment-method-info">
            <p>Pay securely using your credit card.</p>
            <p>We accept Visa, MasterCard, and American Express.</p>
          </div>
        )}
        {paymentMethod === 'paypal' && (
          <div className="payment-method-info">
            <p>Pay with PayPal for fast and secure checkout.</p>
          </div>
        )}
        {paymentMethod === 'googlePay' && (
          <div className="payment-method-info">
            <p>Use Google Pay for a convenient and quick payment experience.</p>
          </div>
        )}
        {paymentMethod === 'applePay' && (
          <div className="payment-method-info">
            <p>Pay easily and securely with Apple Pay on your devices.</p>
          </div>
        )}
        <div className="input-group">
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
          />
        </div>
        <div className="input-group">
          <label>Expiry Date:</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YYYY"
          />
        </div>
        <div className="input-group">
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="Enter CVV"
          />
        </div>
        <div className="input-group">
          <label>Name on Card:</label>
          <input
            type="text"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            placeholder="Enter name on card"
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="input-group">
          <label>Billing Address:</label>
          <textarea
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            placeholder="Enter billing address"
          />
        </div>
        <div className="input-group">
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
          />
          <label>Agree to Terms and Conditions</label>
        </div>
        <button className="tton" onClick={handlePayment}><a style={{color:"GREEN"}} href="/Conf">P R O C E E D </a></button>
      </div>
      {validationError && <div className="error-message">{validationError}</div>}
    
    </div>
  );
}

export default PaymentPage;