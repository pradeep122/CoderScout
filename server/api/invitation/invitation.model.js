'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InvitationSchema = new Schema({
  email: String,
  accessKey: String,
  createdBy: String
});

module.exports = mongoose.model('Invitation', InvitationSchema);