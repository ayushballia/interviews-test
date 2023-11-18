import React from 'react';

const StockSelector = ({ stocks, onChange }) => {
  return (
    <div>
      <label>Select a Stock: </label>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="">Select a stock</option>
        {stocks.map((stock) => (
          <option key={stock.symbol} value={stock.symbol}>
            {stock.companyName} ({stock.symbol})
          </option>
        ))}
      </select>
    </div>
  );
};

export default StockSelector;
