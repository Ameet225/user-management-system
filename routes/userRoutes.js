const express = require('express');
const router = express.Router();

let users = [];
let currentId = 1;

// CREATE
router.post('/users', (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name and message are required'
    });
  }

  const newUser = {
    id: currentId++,
    name,
    message
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: 'User created successfully'
  });
});

// READ ALL
router.get('/users', (req, res) => {
  res.status(200).json({
    success: true,
    data: users
  });
});

// UPDATE
router.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, message } = req.body;

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      error: 'User not found'
    });
  }

  user.name = name;
  user.message = message;

  res.status(200).json({
    success: true,
    message: 'User updated successfully'
  });
});

// DELETE
router.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);

  users = users.filter(u => u.id !== id);

  res.status(200).json({
    success: true,
    message: 'User deleted successfully'
  });
});

module.exports = router;
