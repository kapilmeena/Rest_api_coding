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
var question_schema = new Schema({
  heading:{
    type: String,
    required: 'Question heading needed'    
  },
  body:{
    type: String,
    required:'Question body needed'
  }//,
  // contraints:{
  //   small:[{body:String}],
  //   large:[{body:String}]
  // }
});

module.exports = mongoose.model('Code', CodeSchema);
module.exports = mongoose.model('question', question_schema	);