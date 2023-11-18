import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const PriceDisplay = ({ selectedStock }) => {
  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    const fetchInitialPrice = async () => {
      try {
        const price = await api.fetchInitialPrice(selectedStock);
        setCurrentPrice(price);
      } catch (error) {
        console.error('Error fetching initial price:', error);
      }
    };

    fetchInitialPrice();

    const priceUpdateInterval = setInterval(async () => {
      try {
        const updatedPrice = await api.fetchUpdatedPrice(selectedStock);
        setCurrentPrice(updatedPrice);

        console.log(`Price ${updatedPrice} updated for ${selectedStock} at ${new Date().toLocaleTimeString()}`);
      } catch (error) {
        console.error('Error fetching updated price:', error);
      }
    }, 10000); // 60000 milliseconds = 1 minute

    return () => clearInterval(priceUpdateInterval);
  }, [selectedStock]);

  return (
    <div>
      <h2>Stock Price Tracker</h2>
      <p>Selected Stock: {selectedStock}</p>
      <p>Current Price: {currentPrice}</p>
    </div>
  );
};

export default PriceDisplay;
