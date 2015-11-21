/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /invitations              ->  index
 * POST    /invitations              ->  create
 * GET     /invitations/:id          ->  show
 * PUT     /invitations/:id          ->  update
 * DELETE  /invitations/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Invitation = require('./invitation.model');

// Get list of invitations
exports.index = function(req, res) {
  Invitation.find(function (err, invitations) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(invitations);
  });
};

// Get a single invitation
exports.show = function(req, res) {
  Invitation.findById(req.params.id, function (err, invitation) {
    if(err) { return handleError(res, err); }
    if(!invitation) { return res.status(404).send('Not Found'); }
    return res.json(invitation);
  });
};

// Creates a new invitation in the DB.
exports.create = function(req, res) {
  Invitation.create(req.body, function(err, invitation) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(invitation);
  });
};

// Updates an existing invitation in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Invitation.findById(req.params.id, function (err, invitation) {
    if (err) { return handleError(res, err); }
    if(!invitation) { return res.status(404).send('Not Found'); }
    var updated = _.merge(invitation, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(invitation);
    });
  });
};

// Deletes a invitation from the DB.
exports.destroy = function(req, res) {
  Invitation.findById(req.params.id, function (err, invitation) {
    if(err) { return handleError(res, err); }
    if(!invitation) { return res.status(404).send('Not Found'); }
    invitation.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}