'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InterviewerSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    info: {}
});

module.exports = mongoose.model('Interviewer', InterviewerSchema);
