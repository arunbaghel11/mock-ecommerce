import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to Mock eCommerce</h1>
            <Link to="/products">Go to Product Listing</Link>
        </div>
    );
}

export default HomePage;
