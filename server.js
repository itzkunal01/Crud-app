const express = require("express");
const cors = require("cors"); // Import cors middleware
const app = express();
const PORT = process.env.PORT || 5000;

// Use cors middleware
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Dummy data for testing
let users = [];

//Route to get all users
app.get("/users", (req, res) => {
  res.json(users);
});

//Route to add a new user
app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
