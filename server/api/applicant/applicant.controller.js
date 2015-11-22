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



// Updates an existing applicant in the DB.
exports.valid = function(req, res) {
  Applicant.findOne({email : req.params.id}, function (err, applicant) {
    if (err) { return handleError(res, err); }
    if(!applicant) { return res.status(404).send('Not Found'); }
    var updated = _.merge(applicant, {valid : req.params.value});
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      if(!applicant.valid){
        sendPubNub(false, applicant._id);
      }
      return res.status(200).json(applicant);
    });
  });
};


function sendPubNub (valid, id) {
  var pubnub = require("pubnub")({
    ssl           : true,  
    publish_key   : "pub-c-8bf7cb75-e27c-4488-80db-9314413d7a26",
    subscribe_key : "sub-c-a4657126-90ff-11e5-b829-02ee2ddab7fe"
  });

  var message = { valid : valid };
  pubnub.publish({ 
      channel   : 'coderscout/'+ id,
      message   : message,
      callback  : function(e) { console.log( "SUCCESS!", e ); },
      error     : function(e) { console.log( "FAILED! RETRY PUBLISH!", e ); }
  });

}