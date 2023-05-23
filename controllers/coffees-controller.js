const { Coffee } = require('../models/coffee');

const printError = (res, error) => {
	res
		.status(500)
		.json({ success: false, error: error })
};

const getCoffees = (req, res) => {
	Coffee
		.find()
		.then((coffees) => {
			res
				.status(200)
				.json({ success: true, data: coffees })
		})
		.catch((err) => printError(res, err));
};

const getCoffee = (req, res) => {
	const coffeeId = req.params.id;
	Coffee
		.findById(coffeeId)
		.then(coffee => {
			res
				.status(200)
				.json({ success: true, data: coffee })
		})
		.catch((err) => printError(res, err))
};

module.exports = {
	getCoffees,
	getCoffee
};