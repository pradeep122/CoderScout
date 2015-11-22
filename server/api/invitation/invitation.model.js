'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var InvitationSchema = new Schema({
  testId: { type : Schema.Types.ObjectId,ref : 'Test' },
  email: String,
  cookie: String,
  createdBy: String,
  valid : { type: Boolean, default: true}
});

module.exports = mongoose.model('Invitation', InvitationSchema);