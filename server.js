const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const dealerPrices = [
    { id: "d1", productId: "1", dealerName: "ABC Stationers", price: 15.50 },
    { id: "d2", productId: "1", dealerName: "Global Office", price: 14.99 },
    { id: "d3", productId: "2", dealerName: "Ink & Pen Co.", price: 2.50 },
    { id: "d4", productId: "3", dealerName: "Tech Hub", price: 45.00 }
];

app.get('/dealer-pricing/:productId', (req, res) => {
    const results = dealerPrices.filter(p => p.productId === req.params.productId);
    res.json(results);
});

app.listen(3000, () => console.log('Dealer service running on port 3000'));
