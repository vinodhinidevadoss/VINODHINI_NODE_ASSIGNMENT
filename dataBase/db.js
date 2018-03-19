const mongoose = require('mongoose');
const config = require('../configModel.json');

exports.app = function() {
    mongoose.connect('mongodb://' + config.database.host + ':' + config.database.port + '/' + config.database.db)
    let db = mongoose.connection;
    // has error
    db.on('error', console.error.bind(console, 'connection error:'));
}
