var express = require('express');
var router = express.Router();
var Hotel = require('../models').Hotel
var Restaurant = require('../models').Restaurant
var Activity = require('../models').Activity
/* GET home page. */
router.get('/', function(req, res, next) {
	Hotel.find({}).exec().then(function(hotels) {
    Restaurant.find({}).exec().then(function(restaurants) {
        Activity.find({}).exec().then(function(activities) {
            res.render('index', {
                all_hotels: hotels,
                all_restaurants: restaurants,
                all_activities: activities
            });
        }).then(null, console.log);
    }).then(null, console.log);
}).then(null, console.log);



  // res.render('index', { title: 'Express' });
});

module.exports = router;
