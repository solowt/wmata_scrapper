require('../db/schema');
var mongoose = require('mongoose');

var Metro = mongoose.model('Metro');
module.exports = Metro;
