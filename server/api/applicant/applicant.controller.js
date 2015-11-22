'use strict';

var _ = require('lodash');
var Applicant = require('./applicant.model');

// Get list of applicants
exports.index = function(req, res) {
  Applicant.find(function (err, applicants) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(applicants);
  });
};

// Get a single applicant
exports.show = function(req, res) {
  Applicant.findOne({email : req.params.id}, function (err, applicant) {
    if(err) { return handleError(res, err); }
    if(!applicant) { return res.status(404).send('Not Found'); }
    return res.json(applicant);
  });
};

// Creates a new applicant in the DB.
exports.create = function(req, res) {
  Applicant.findOne({email:req.body.email}, function (err, applicant) {
    if(!applicant) {
      Applicant.create(req.body, function(err, applicant) {
        if(err) { return handleError(res, err); }
        return res.status(201).json(applicant);
      });
    }else{
      res.status(400).send('User with email ' + req.body.email + ' already exists');
    }
  })
};

// Adds a new applicant in the DB.
exports.createApplicant = function(req, res) {
if (!req.body.invitation || !req.body.invitation.valid) {
    return res.status(400).send('Invalid');
  }
  var applicantGenerated = {
    email : req.body.invitation.email,
    firstName : req.body.firstName,
    lastName: req.body.lastName,
    invitedBy: req.body.invitation.createdBy,
    test : {
      testId : req.body.invitation.testId,
      // get the cookie and add it to the applicant
      cookie: req.cookies.uuid,
      language : req.body.test.language,
      valid: req.body.invitation.valid
      },
    };
  Applicant.create(applicantGenerated, function(err, applicant) {
    if(err) { return handleError(res, err); }
      return res.status(201).json(applicant);
    });
};
  

// Updates an existing applicant in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Applicant.findOne({email : req.params.id}, function (err, applicant) {
    if (err) { return handleError(res, err); }
    if(!applicant) { return res.status(404).send('Not Found'); }
    var updated = _.merge(applicant, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(applicant);
    });
  });
};

// Deletes a applicant from the DB.
exports.destroy = function(req, res) {
  Applicant.findOne({email : req.params.id}, function (err, applicant) {
    if(err) { return handleError(res, err); }
    if(!applicant) { return res.status(404).send('Not Found'); }
    applicant.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(200).send('Deleted');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}