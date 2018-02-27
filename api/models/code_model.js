'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CodeSchema = new Schema({
  Language: {
    type: String,
    required: 'Kindly enter the name of the code'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  code: {
    type: String,
    required:'Kindly enter some code first.'
  }
});
module.exports = mongoose.model('Code', CodeSchema);