
const express = require('express');

const app = express();
const PORT = 3000;

// Allow the server to read JSON data sent by clients
app.use(express.json());

// Sample products stored in memory
const products = [
  { id: 1, name: 'Laptop', price: 800 },
  { id: 2, name: 'Headphones', price: 50 },
  { id: 3, name: 'Keyboard', price: 30 }
];

// HOME ROUTE
app.get('/', (req, res) => {
  res.json({ message: 'My REST API is running!' });
});

// GET ALL PRODUCTS
app.get('/products', (req, res) => {
  res.json(products);
});

// CREATE A NEW PRODUCT
app.post('/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
