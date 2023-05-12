const express = require('express');
const mongoose = require('mongoose');
const coffeeRoutes = require('./routes/coffee-routes');
require('dotenv').config();

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(coffeeRoutes);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

mongoose
	.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Successfully connected to database'))
	.catch(error => console.log('Connection error: ', error));