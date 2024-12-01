// const express = require("express");
// const cors = require('cors');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// // Middleware to parse JSON bodies
// app.use(express.json());

// // In-memory data store
// let items = [
//   {
//     id: 1,
//     name: "T-Shirt",
//     description: "Comfortable cotton t-shirt",
//     price: 19.99,
//   },
//   { id: 2, name: "Jeans", description: "Stylish blue jeans", price: 39.99 },
// ];

// app.get("/msg", (req, res) => {
//   res.send("Hello World from Express API!");
// });

// // API endpoint to get all items
// app.get("/items", (req, res) => {
//   res.json(items);
// });

// // API endpoint to get an item by ID
// app.get("/items/:id", (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   const item = items.find((i) => i.id === id);
//   if (!item) {
//     return res.status(404).json({ error: "Item not found" });
//   }
//   res.json(item);
// });

// // API endpoint to add a new item
// app.post("/items", (req, res) => {
//   const { name, description, price } = req.body;
//   const newItem = {
//     id: items.length + 1,
//     name,
//     description,
//     price,
//   };
//   items.push(newItem);
//   res.status(201).json(newItem);
// });

// // API endpoint to update an existing item
// app.put("/items/:id", (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   const { name, description, price } = req.body;
//   let item = items.find((i) => i.id === id);
//   if (!item) {
//     return res.status(404).json({ error: "Item not found" });
//   }
//   item = { id, name, description, price };
//   items = items.map((i) => (i.id === id ? item : i));
//   res.json(item);
// });

// // API endpoint to delete an item
// app.delete("/items/:id", (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   items = items.filter((i) => i.id !== id);
//   res.status(204).end();
// });

// // Catch-all route for unsupported paths
// app.use((req, res) => {
//   res.status(404).send("Not Found");
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());

// // In-memory data
// let products = [
//   { id: 1, name: 'Laptop', price: 1000 },
//   { id: 2, name: 'Phone', price: 500 },
// ];

// let users = [
//   { id: 1, name: 'John Doe', email: 'john@example.com' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
// ];

// // API Endpoints
// // Get all products
// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// // Get a single product by ID
// app.get('/products/:id', (req, res) => {
//   const product = products.find(p => p.id === parseInt(req.params.id));
//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ message: 'Product not found' });
//   }
// });

// // Get all users
// app.get('/users', (req, res) => {
//   res.json(users);
// });

// // Get a single user by ID
// app.get('/users/:id', (req, res) => {
//   const user = users.find(u => u.id === parseInt(req.params.id));
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });






// const express = require("express");
// const cors = require('cors');
// const mysql = require('mysql2');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// // MySQL connection setup
// // const db = mysql.createConnection({
// //   host: 'localhost', // Replace with your MySQL host
// //   user: 'root',      // Replace with your MySQL user
// //   password: 'your_password', // Replace with your MySQL password
// //   database: 'mydatabase' // Replace with your MySQL database name
// // });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL');
// });

// // API endpoint to get all items
// app.get("/items", (req, res) => {
//   db.query('SELECT * FROM items', (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.json(results);
//   });
// });

// // API endpoint to get an item by ID
// app.get("/items/:id", (req, res) => {
//   const id = req.params.id;
//   db.query('SELECT * FROM items WHERE id = ?', [id], (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     if (results.length === 0) {
//       return res.status(404).json({ error: "Item not found" });
//     }
//     res.json(results[0]);
//   });
// });

// // API endpoint to add a new item
// app.post("/items", (req, res) => {
//   const { name, description, price } = req.body;
//   db.query(
//     'INSERT INTO items (name, description, price) VALUES (?, ?, ?)',
//     [name, description, price],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: err.message });
//       }
//       res.status(201).json({ id: result.insertId, name, description, price });
//     }
//   );
// });

// // API endpoint to update an existing item
// app.put("/items/:id", (req, res) => {
//   const id = req.params.id;
//   const { name, description, price } = req.body;
//   db.query(
//     'UPDATE items SET name = ?, description = ?, price = ? WHERE id = ?',
//     [name, description, price, id],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: err.message });
//       }
//       if (result.affectedRows === 0) {
//         return res.status(404).json({ error: "Item not found" });
//       }
//       res.json({ id, name, description, price });
//     }
//   );
// });

// // API endpoint to delete an item
// app.delete("/items/:id", (req, res) => {
//   const id = req.params.id;
//   db.query('DELETE FROM items WHERE id = ?', [id], (err, result) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     if (result.affectedRows === 0) {
//       return res.status(404).json({ error: "Item not found" });
//     }
//     res.status(204).end();
//   });
// });

// // API endpoint to delete an item
// app.delete("/items", (req, res) => {
//   const id = req.params.id;
//   db.query('DELETE FROM items', (err, result) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     if (result.affectedRows === 0) {
//       return res.status(404).json({ error: "Item not found" });
//     }
//     res.status(204).end();
//   });
// });

// // Catch-all route for unsupported paths
// app.use((req, res) => {
//   res.status(404).send("Not Found");
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const winston = require("winston");
const morgan = require("morgan");
const promClient = require('prom-client');
require("dotenv").config();




const app = express();
const port = process.env.PORT || 3000;



const register = new promClient.Registry();
const httpRequestDurationMicroseconds = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Histogram of HTTP request durations',
  labelNames: ['method', 'status'],
});

register.registerMetric(httpRequestDurationMicroseconds);

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});


// Middleware to track request duration
app.use((req, res, next) => {
  const end = httpRequestDurationMicroseconds.startTimer();
  res.on('finish', () => {
    end({ method: req.method, status: res.statusCode });
  });
  next();
});


// Create a custom logger using winston
const logger = winston.createLogger({
  level: "info", // You can adjust the logging level to "debug", "info", "warn", or "error"
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Logs to the console
    new winston.transports.File({ filename: "app.log" }) // Optionally logs to a file
  ]
});

// Middleware
app.use(cors());
app.use(express.json());

// HTTP request logging using morgan (logs all incoming HTTP requests)
app.use(morgan("combined", { stream: { write: message => logger.info(message.trim()) } }));

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL and log status
db.connect((err) => {
  if (err) {
    logger.error(`Error connecting to MySQL: ${err.message}`);
    return;
  }
  logger.info("Connected to MySQL");
});

// API endpoints

// API endpoint to get all items
app.get("/items", (req, res) => {
  db.query("SELECT * FROM items", (err, results) => {
    if (err) {
      logger.error(`Error querying database: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
    logger.info(`Fetched ${results.length} items from the database`);
    res.json(results);
  });
});

// API endpoint to get an item by ID
app.get("/items/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM items WHERE id = ?", [id], (err, results) => {
    if (err) {
      logger.error(`Error querying database: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      logger.warn(`Item with id ${id} not found`);
      return res.status(404).json({ error: "Item not found" });
    }
    logger.info(`Fetched item with id ${id}`);
    res.json(results[0]);
  });
});

// API endpoint to add a new item
app.post("/items", (req, res) => {
  const { name, description, price } = req.body;
  db.query(
    "INSERT INTO items (name, description, price) VALUES (?, ?, ?)",
    [name, description, price],
    (err, result) => {
      if (err) {
        logger.error(`Error inserting item: ${err.message}`);
        return res.status(500).json({ error: err.message });
      }
      logger.info(`Item created with id ${result.insertId}`);
      res.status(201).json({ id: result.insertId, name, description, price });
    }
  );
});

// API endpoint to update an existing item
app.put("/items/:id", (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;
  db.query(
    "UPDATE items SET name = ?, description = ?, price = ? WHERE id = ?",
    [name, description, price, id],
    (err, result) => {
      if (err) {
        logger.error(`Error updating item: ${err.message}`);
        return res.status(500).json({ error: err.message });
      }
      if (result.affectedRows === 0) {
        logger.warn(`Item with id ${id} not found`);
        return res.status(404).json({ error: "Item not found" });
      }
      logger.info(`Item with id ${id} updated`);
      res.json({ id, name, description, price });
    }
  );
});

// API endpoint to delete an item
app.delete("/items/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM items WHERE id = ?", [id], (err, result) => {
    if (err) {
      logger.error(`Error deleting item: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      logger.warn(`Item with id ${id} not found`);
      return res.status(404).json({ error: "Item not found" });
    }
    logger.info(`Item with id ${id} deleted`);
    res.status(204).end();
  });
});

// API endpoint to delete an item
app.delete("/items", (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM items', (err, result) => {
    if (err) {
      logger.error(`Error deleting item: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      logger.warn(`No Item not found`);
      return res.status(404).json({ error: "Item not found" });
    }
    logger.info(`All Item deleted`);
    res.status(204).end();
  });
});


// Catch-all route for unsupported paths
app.use((req, res) => {
  logger.warn(`Requested unsupported path: ${req.originalUrl}`);
  res.status(404).send("Not Found");
});

// Start the server
app.listen(port, () => {
  logger.info(`Server running at http://localhost:${port}`);
});

