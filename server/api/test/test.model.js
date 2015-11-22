'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TestSchema = new Schema({
        id: String,
        invitations: [{ type : Schema.Types.ObjectId,ref : 'Invitation' }],
        questions: [{type : Schema.Types.ObjectId,ref : 'Question' }],
        startTime: String,
        endTime: String,
        duration: Number,
        createdBy: String
    });

module.exports = mongoose.model('Test', TestSchema);
