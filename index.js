const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./db/connectDB');
require('dotenv').config()
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});



app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on port ${PORT}`);
});
