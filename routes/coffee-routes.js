const express = require('express');
const { getCoffees } = require('../controllers/coffees-controller');

const router = express.Router();

router.get('/coffees', getCoffees);

module.exports = router;