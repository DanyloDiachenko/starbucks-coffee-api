const { Coffee } = require('../models/coffee');

const printError = (res, error) => {
	res
		.statusCode(500)
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

module.exports = {
	getCoffees,
};