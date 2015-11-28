'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TestSchema = new Schema({
        id: String,
        invitations: [{
        	invitationId : { type : Schema.Types.ObjectId,ref : 'Invitation' }
        }],
        questions: [{
        	questionId : {type : Schema.Types.ObjectId,ref : 'Question' }
        }],
        startTime: Date,
        endTime: Date,
        duration: Number,
        createdBy: String
    });

module.exports = mongoose.model('Test', TestSchema);