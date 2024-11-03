const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 150, description: 'Description 2' },
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    res.json(product || {});
});

app.post('/api/checkout', (req, res) => {
    const { items } = req.body;
    if (items && items.length > 0) {
        res.json({ status: 'success', message: 'Checkout successful!' });
    } else {
        res.json({ status: 'failure', message: 'Checkout failed!' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
