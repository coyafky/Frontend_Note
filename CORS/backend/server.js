const express = require('express');
const cors = require('cors');
const app = express();


const port =3000;


app.use(cors());

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the server!' });
  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });