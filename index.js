const express = require('express');
const mongoose = require('mongoose');
const coffeeRoutes = require('./routes/coffee-routes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(coffeeRoutes);

app.listen(5000, () => {
	console.log(`Server started on port ${5000}`);
});

mongoose
	.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Successfully connected to database'))
	.catch(error => console.log('Connection error: ', error));

app.get('/favicon.ico', function (req, res) {
	res.writeHead(204);
	res.end();
});