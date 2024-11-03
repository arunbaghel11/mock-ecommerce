import React, { useState } from 'react';
import axios from 'axios';

function CheckoutPage() {
    const [status, setStatus] = useState(null);

    const handleCheckout = () => {
        axios.post('http://localhost:5000/api/checkout', { items: [/* cart items */] })
            .then(res => setStatus(res.data.status))
            .catch(err => setStatus('failure'));
    };

    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={handleCheckout}>Confirm Purchase</button>
            {status && <p>{status === 'success' ? 'Purchase Successful!' : 'Purchase Failed'}</p>}
        </div>
    );
}

export default CheckoutPage;
