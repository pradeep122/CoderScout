'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ApplicantSchema = new Schema({
        email: String,
        firstName: String,
        lastName: String,
        info: {
        },
        test: {
            testId: {type : Schema.Types.ObjectId,ref : 'Test' },
            language: String,
            startTime: String,
            submitTime: String,
            endTime: String,
            questions: [{
                question_id: {type : Schema.Types.ObjectId,ref : 'Question' },
                score: Number,
                solution: String
            }],
            feedback: String,
            valid: Boolean
        },
        invitedBy: String
    });

module.exports = mongoose.model('Applicant', ApplicantSchema);
