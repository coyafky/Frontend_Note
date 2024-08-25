
// async 捕获错误信息

// fetchData.js

async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching data');
    }
  }
  
  module.exports = fetchData;