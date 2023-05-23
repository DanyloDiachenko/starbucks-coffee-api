const express = require('express');
const { getCoffees, getCoffee } = require('../controllers/coffees-controller');

const router = express.Router();

router.get('/coffees', getCoffees);
router.get('/coffees/:id', getCoffee)

module.exports = router;