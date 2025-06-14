const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const dbPath = path.join(__dirname, 'db.json');

// Helper to read dishes from db.json
function readDishes() {
  const data = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data).dishes;
}

// Helper to write dishes to db.json
function writeDishes(dishes) {
  fs.writeFileSync(dbPath, JSON.stringify({ dishes }, null, 2));
}

// POST /dishes → Add a new dish
app.post('/dishes', (req, res) => {
  try {
    const dishes = readDishes();
    const { id, name, price, category } = req.body;
    if (!id || !name || !price || !category) {
      return res.status(400).json({ message: 'All fields (id, name, price, category) are required.' });
    }
    if (dishes.some(dish => dish.id === id)) {
      return res.status(409).json({ message: 'Dish with this ID already exists.' });
    }
    const newDish = { id, name, price, category };
    dishes.push(newDish);
    writeDishes(dishes);
    res.status(201).json(newDish);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// GET /dishes → Retrieve all dishes
app.get('/dishes', (req, res) => {
  try {
    const dishes = readDishes();
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// GET /dishes/:id → Retrieve a dish by its ID
app.get('/dishes/:id', (req, res) => {
  try {
    const dishes = readDishes();
    const dish = dishes.find(d => d.id == req.params.id);
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found.' });
    }
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// PUT /dishes/:id → Update a dish by its ID
app.put('/dishes/:id', (req, res) => {
  try {
    const dishes = readDishes();
    const index = dishes.findIndex(d => d.id == req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: 'Dish not found.' });
    }
    const { name, price, category } = req.body;
    if (!name && !price && !category) {
      return res.status(400).json({ message: 'At least one field (name, price, category) is required.' });
    }
    if (name) dishes[index].name = name;
    if (price) dishes[index].price = price;
    if (category) dishes[index].category = category;
    writeDishes(dishes);
    res.status(200).json(dishes[index]);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// DELETE /dishes/:id → Delete a dish by its ID
app.delete('/dishes/:id', (req, res) => {
  try {
    let dishes = readDishes();
    const index = dishes.findIndex(d => d.id == req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: 'Dish not found.' });
    }
    const deleted = dishes.splice(index, 1);
    writeDishes(dishes);
    res.status(200).json({ message: 'Dish deleted successfully.', dish: deleted[0] });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// GET /dishes/get?name=<dish_name> → Search for dishes by name (partial match)
app.get('/dishes/get', (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ message: 'Name query parameter is required.' });
    }
    const dishes = readDishes();
    const matches = dishes.filter(dish => dish.name.toLowerCase().includes(name.toLowerCase()));
    if (matches.length === 0) {
      return res.status(404).json({ message: 'No dishes found' });
    }
    res.status(200).json(matches);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: '404 Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 