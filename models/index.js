var mongoose = require('mongoose');
// Notice the `mongodb` protocol; Mongo is basically a kind of server,
// which handles database requests and sends responses. It's async!
mongoose.connect('mongodb://localhost/trip-planner-app');
mongoose.Promise = require('bluebird');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var placeSchema = new mongoose.Schema({
	address: String,
	city: String,
	state: String,
	phone: String,
	location: Array
});

var hotelSchema = new mongoose.Schema({
	name: String,
	place: String,
	num_stars: Number,
	amenities: String
});

var activitySchema = new mongoose.Schema({
	name: String,
	place: String,
	age_range: String
});

var restaurantSchema = new mongoose.Schema({
	name: String,
	place: String,
	cuisines: String,
	price: Number
});

var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);


module.exports = {
	Place: Place,
	Hotel: Hotel,
	Activity: Activity,
	Restaurant: Restaurant
};