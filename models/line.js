require('../db/schema');
var mongoose = require('mongoose');

var Line = mongoose.model('Line');
module.exports = Line;
