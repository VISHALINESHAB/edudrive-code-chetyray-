// PaymentCard.js (React Component)

import React from 'react';
import auto from '../assets/auto.jpg'

const PaymentCard = () => {
    const handlePayment = async () => {
        try {
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // Include any necessary payment data
                })
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Payment successful:', data);
                // Generate ticket with user's name
                generateTicket('MyName');
            } else {
                throw new Error('Payment failed');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const generateTicket = (userName) => {
        // Code to generate ticket with the user's name
    };

    return (
        <div className='paycard'>
            <div style={{color:'black'}}>
                <img src={auto} alt="Auto1"/>
                <h1>Auto1</h1>
                <p>Auto no:1</p>
                <p>phno:1234567770</p>
            </div>
            <div>
                <h3>MyName</h3>
                <h4>Rollno</h4>
                <p>myPhone no</p>
                <button onClick={handlePayment}>Pay with Google Pay</button>
            </div>
        </div>
    );
};

export default PaymentCard;
