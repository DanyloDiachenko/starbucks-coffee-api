const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const coffeeRoutes = require('./routes/coffee-routes');

const app = express();

const PORT = process.env.PORT || '8080';

app.set('port', PORT);
app.listen(PORT, () => { console.log('Server started on port: ' + PORT) });

app.use(cors());
app.use(express.json());
app.use(coffeeRoutes);

mongoose
	.connect("mongodb+srv://Danil:danil11122@cluster0.sw0tsbd.mongodb.net/coffee-shop", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Successfully connected to database'))
	.catch(error => console.log('Connection error: ', error));

app.get('/favicon.ico', function (req, res) {
	res.writeHead(204);
	res.end();
});