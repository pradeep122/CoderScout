'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var InvitationSchema = new Schema({
  testId: { type : Schema.Types.ObjectId,ref : 'Test' },
  email: String,
  cookie: String,
  createdBy: String
});

module.exports = mongoose.model('Invitation', InvitationSchema);