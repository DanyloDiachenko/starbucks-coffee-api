const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	imgSrc: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true
	},
	details: [
		{
			id: {
				type: Number,
				required: true
			},
			size: {
				type: String,
				required: true
			},
			price: {
				type: Number,
				required: true
			},
			volume: {
				type: Number,
				required: true
			},
			calories: {
				type: Number,
				required: true
			},
			sugar: {
				type: String,
				required: true
			},
			totalFat19g: {
				type: String,
				required: true
			},
			saturatedFat3g: {
				type: String,
				required: true
			},
			transFat05g: {
				type: String,
				required: true
			}
		}
	]
});

module.exports.Coffee = mongoose.model('Coffee', coffeeSchema, 'coffees');
