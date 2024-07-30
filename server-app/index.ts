const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Initialize Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});

// Define User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sync database
sequelize.sync();

// Get user profile
app.get('/api/profile', async (req, res) => {
  const user = await User.findOne();
  res.json(user);
});

// Update user profile
app.post('/api/profile', async (req, res) => {
  const { username, email, phone } = req.body;
  let user = await User.findOne();
  if (user) {
    user.username = username;
    user.email = email;
    user.phone = phone;
    await user.save();
  } else {
    user = await User.create({ username, email, phone });
  }
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
