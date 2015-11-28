'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  description : String,
  solutions : {},
  testCases : [{
  	input : String,
  	output : String,
  	weightage : Number
  }],
  createdBy : String,
  score : {type : Number, default : 50},
  info : {}
});

module.exports = mongoose.model('Question', QuestionSchema);