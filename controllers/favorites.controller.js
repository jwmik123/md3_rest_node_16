/**
 * Controller for user methods
 */
var config = require('../config/config');

/**
 * Create JSON response with the found user (req.user)
 */
exports.read = function(req, res) {
    res.json(req.user);
};

/**
 * Create JSON response with all users
 */
exports.list = function(req, res) {

    console.log("voor nu geven we altijd dezelfde lijst terug met favorieten");

    var favorites = [
        {name: "Leslie"},
        {name: "Donovan"},
        {name: "Mike"}
    ];

    res.json(favorites);
};

/**
 * Function to lookup a particular user and store it in the request object
 * @param req - the request object
 * @param res - our response to the request
 * @param next - the next function that needs to be executed
 * @param favoriteID - the favoriteID from the URL
 */
exports.getFavoritesByID = function(req, res, next, favoriteID) {

    /** als we mongodb gebruiken dan gaan we in deze functie de user opzoeken */

    console.log("je zoekt de user met id: " + favoriteID);

    console.log("voor nu geef k je een standaard object terug");
    req.favorites = {
        name: "Joël",
        age: 19
    };

    /** de volgende Middleware/functie mag aan de slag */
    next();

};