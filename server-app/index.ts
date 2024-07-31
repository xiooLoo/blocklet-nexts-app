const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD.PUT,PATCH,POST,DELETE'
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Initialize Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});

// Define User model
const User = sequelize.define('User', {
  userName: {
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
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: true
  },
  message: {
    type: DataTypes.STRING,
    allowNull: true
  },
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
  const { userName, email, phone, subject, message } = req.body;
  let user = await User.findOne();
  if (user) {
    user.userName = userName;
    user.email = email;
    user.phone = phone;
    user.subject = subject;
    user.message = message;
    await user.save();
  } else {
    user = await User.create({ userName, email, phone, subject, message });
  }
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
