const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

let stocksData = [
  { symbol: 'AAPL', companyName: 'Apple Inc.', price: getRandomPrice(100, 200) },
  { symbol: 'GOOGL', companyName: 'Alphabet Inc.', price: getRandomPrice(1500, 1800) },
  // Add more predefined stocks here
];

function getRandomPrice(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

app.get('/api/stocks', (req, res) => {
  res.json(stocksData);
});

app.get('/api/stocks/:symbol', (req, res) => {
  const { symbol } = req.params;
  const stock = stocksData.find((s) => s.symbol === symbol);

  if (stock) {
    res.json({ symbol: stock.symbol, companyName: stock.companyName, price: stock.price });
  } else {
    res.status(404).json({ message: 'Stock not found' });
  }
});

setInterval(() => {
  stocksData.forEach((stock) => {
    stock.price = getRandomPrice(stock.price * 0.95, stock.price * 1.05);
  });
}, 1000);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
