/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /interviewers              ->  index
 * POST    /interviewers              ->  create
 * GET     /interviewers/:id          ->  show
 * PUT     /interviewers/:id          ->  update
 * DELETE  /interviewers/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Interviewer = require('./interviewer.model');

// Get list of interviewers
exports.index = function(req, res) {
  Interviewer.find(function (err, interviewers) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(interviewers);
  });
};

// Get a single interviewer
exports.show = function(req, res) {
  Interviewer.findOne({email : req.params.id}, function (err, interviewer) {
    if(err) { return handleError(res, err); }
    if(!interviewer) { return res.status(404).send('Not Found'); }
    return res.json(interviewer);
  });
};

// Creates a new interviewer in the DB.
exports.create = function(req, res) {
  Interviewer.findOne({email:req.body.email}, function (err, interviewer) {
    if(!interviewer) {
      Interviewer.create(req.body, function(err, interviewer) {
        if(err) { return handleError(res, err); }
        return res.status(201).json(interviewer);
      });
    }else{
      res.status(400).send('User with email ' + req.body.email + ' already exists');
    }
  })
  
};

// Updates an existing interviewer in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Interviewer.findOne({email : req.params.id}, function (err, interviewer) {
    if (err) { return handleError(res, err); }
    if(!interviewer) { return res.status(404).send('Not Found'); }
    var updated = _.merge(interviewer, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(interviewer);
    });
  });
};

// Deletes a interviewer from the DB.
exports.destroy = function(req, res) {
  Interviewer.findOne({email : req.params.id}, function (err, interviewer) {
    if(err) { return handleError(res, err); }
    if(!interviewer) { return res.status(404).send('Not Found'); }
    interviewer.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}