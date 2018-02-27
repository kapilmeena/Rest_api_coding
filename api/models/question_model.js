'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var question_schema = new Schema({
    heading:{
      type: String,
      required: 'Question heading needed'    
    },
    body:{
      type: String,
      required:'Question body needed'
    },
    contraints:{
    //   small:[{body:String}],
      large:[{body:String}]
    }
  });
  
  module.exports = mongoose.model('question', question_schema	);
  