var favorites = require('../controllers/favorites.controller.js');

module.exports = function(app) {

    app.route('/favorites')
        .get(favorites.list);

    app.route('/favorites/:favoriteID')
        .get(favorites.read);

    app.param('favoriteID', favorites.getFavoritesByID);

};


