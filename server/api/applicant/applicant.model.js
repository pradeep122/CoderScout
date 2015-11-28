'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ApplicantSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    info: {},
    test: {
        testId: {
            type: Schema.Types.ObjectId,
            ref: 'Test'
        },
        language: Number,
        startTime: Date,
        submitTime: Date,
        endTime: Date,
        questions: [{
            questionId: {
                type: Schema.Types.ObjectId,
                ref: 'Question'
            },
            score: Number,
            solution: String,
            submissionLink: String,
            submissionId: Number,
            submission: {}
        }],
        feedback: String,
        valid: Boolean,
        cookie: String
    },
    invitedBy: String
});

module.exports = mongoose.model('Applicant', ApplicantSchema);
