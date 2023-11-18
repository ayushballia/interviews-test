import React, { useState, useEffect } from 'react';
import StockSelector from './components/StockSelector';
import PriceDisplay from './components/PriceDisplay';
import api from './utils/api';


function App() {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState('');

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const data = await api.fetchStocks();
        setStocks(data);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div className="App">
      <StockSelector stocks={stocks} onChange={setSelectedStock} />
      <PriceDisplay selectedStock={selectedStock} />
    </div>
  );
}

export default App;
