const API_URL = 'http://localhost:5000'; // Replace with your backend API URL

const api = {
  async fetchInitialPrice(stock) {
    try {
      const response = await fetch(`${API_URL}/api/stocks/${stock}`);
      const data = await response.json();
      return data.price;
    } catch (error) {
      throw new Error('Error fetching initial price');
    }
  },

  async fetchUpdatedPrice(stock) {
    try {
      const response = await fetch(`${API_URL}/api/stocks/${stock}`);
      const data = await response.json();
      return data.price;
    } catch (error) {
      throw new Error('Error fetching updated price');
    }
  },

  async fetchStocks() {
    try {
      const response = await fetch(`${API_URL}/api/stocks`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching stocks');
    }
  },
};

export default api;
