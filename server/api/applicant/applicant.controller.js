'use strict';

var _ = require('lodash');
var util = require('util');
var async = require('async');
var Applicant = require('./applicant.model');
var Test = require('../test/test.model');
var Question = require('../question/question.model');
var Invitation = require('../invitation/invitation.model');
var sphere = require('../../components/sphere');

// Get list of applicants
exports.index = function(req, res) {
  Applicant.find(function(err, applicants) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).json(applicants);
  });
};

// Get a single applicant
exports.show = function(req, res) {
  Applicant.findOne({
    email: req.params.id
  }, function(err, applicant) {
    if (err) {
      return handleError(res, err);
    }
    if (!applicant) {
      return res.status(404).send('Not Found');
    }
    return res.json(applicant);
  });
};

// Get a single applicant
exports.validate = function(req, res) {
  Applicant.findOne({
    email: req.params.id
  }, function(err, applicant) {
    if (err) {
      return handleError(res, err);
    }
    if (!applicant) {
      return res.status(404).send('Not Found');
    }

    if (!applicant.test.valid) {
      return res.status(400).send('Applicant is invalidated');
    }

    if (_.isString(applicant.test.cookie)) {
      if (applicant.test.cookie === req.cookies.uuid) {
        return res.status(200).json(applicant);
      } else {
        return res.status(400).send('Applicant already appeared for the Test');
      }
    } else {
      applicant.test.cookie = req.cookies.uuid;
      applicant.save(function(err, applicant) {

        if (err) {
          return handleError(res, err);
        }
        return res.status(200).json(applicant);
      })
    }


  });

};

// Creates a new applicant in the DB.
exports.create = function(req, res) {
  Applicant.findOne({
    email: req.body.email
  }, function(err, applicant) {
    if (!applicant) {
      Applicant.create(req.body, function(err, applicant) {
        if (err) {
          return handleError(res, err);
        }
        return res.status(201).json(applicant);
      });
    } else {
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
    email: req.body.invitation.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    invitedBy: req.body.invitation.createdBy,
    test: {
      testId: req.body.invitation.testId,
      // get the cookie and add it to the applicant
      cookie: req.cookies.uuid,
      language: req.body.test.language,
      valid: req.body.invitation.valid
    },
  };
  Invitation.findById(req.body.invitation._id, function(err, invitation) {
    if (err) {
      return handleError(res, err);
    }

    if (!invitation) {
      return res.status(400).send('Invitation not found');
    }
    Test.findById(invitation.testId, function(err, test) {
      if (err) {
        return handleError(res, err);
      }

      if (!test) {
        return res.status(400).send('Test not found');
      }

      var questions = _.map(test.questions, function(ques) {
        return {
          questionId: ques.questionId,
          score: 0,
          solution: ''
        };
      });

      applicantGenerated.test.questions = questions;

      Applicant.create(applicantGenerated, function(err, applicant) {
        if (err) {
          return handleError(res, err);
        }
        return res.status(201).json(applicant);
      });

    })

  });
};

exports.saveSolutions = function(req, res) {

  Applicant.findOne({
    email: req.body.email
  }, function(err, applicant) {
    if (err) {
      return handleError(res, err);
    }
    if (!applicant) {
      return res.status(404).send('Applicant Not Found');
    }

    if (!applicant.test.valid) {
      return res.status(400).send('Applicant is invalidated');
    }

    if (_.isString(applicant.test.cookie)) {
      if (applicant.test.cookie == req.cookies.uuid) {
        _.each(req.body.test.questions, function(question) {
          var idx = _.findIndex(applicant.test.questions, function(item) {
            return item.questionId == question.questionId;
          });
          if (idx >= 0) {
            applicant.test.questions[idx].solution = question.solution;
          } else {
            applicant.test.questions.push(question);
          }
        });
        applicant.save(function(err) {
          if (err) {
            return handleError(res, err);
          }
          return res.status(200).json(applicant);
        })
      } else {
        return res.status(400).send('Applicant already appeared for the Test');
      }
    } else {
      applicant.test.valid = false;
      applicant.save(function(err) {
        if (err) {
          return handleError(res, err);
        }
        return res.status(400).send('No Cookie Found, Application is invalidated');
      });
    }


  });
};


exports.submit = function(req, res) {

  Applicant.findOne({
    email: req.body.email
  }, function(err, applicant) {
    if (err) {
      return handleError(res, err);
    }
    if (!applicant) {
      return res.status(404).send('Applicant Not Found');
    }

    if (!applicant.test.valid) {
      return res.status(400).send('Applicant is invalidated');
    }

    if (_.isString(applicant.test.cookie)) {
      if (applicant.test.cookie === req.cookies.uuid) {
        req.body.test.valid = false;
        var updatedApplicant = _.merge(applicant, req.body);
        updatedApplicant.save(function(err) {
          if (err) {
            return handleError(res, err);
          }
          return res.status(200).json(applicant);
        });
      } else {
        return res.status(400).send('Applicant already appeared for the Test');
      }
    } else {
      applicant.test.valid = false;
      applicant.save(function(err) {
        if (err) {
          return handleError(res, err);
        }
        return res.status(400).send('No Cookie Found, Application is invalidated');
      });
    }

  });
};


// Updates an existing applicant in the DB.
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Applicant.findOne({
    email: req.params.id
  }, function(err, applicant) {
    if (err) {
      return handleError(res, err);
    }
    if (!applicant) {
      return res.status(404).send('Not Found');
    }
    var updated = _.merge(applicant, req.body);
    updated.save(function(err) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(200).json(applicant);
    });
  });
};

// Deletes a applicant from the DB.
exports.destroy = function(req, res) {
  Applicant.findOne({
    email: req.params.id
  }, function(err, applicant) {
    if (err) {
      return handleError(res, err);
    }
    if (!applicant) {
      return res.status(404).send('Not Found');
    }
    applicant.remove(function(err) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(200).send('Deleted');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}



// Updates an existing applicant in the DB.
exports.invalidate = function(req, res) {
  Applicant.findOne({
    email: req.params.id
  }, function(err, applicant) {
    if (err) {
      return handleError(res, err);
    }
    if (!applicant) {
      return res.status(404).send('Applicant Not Found with id : ' + req.params.id);
    }
    applicant.test.valid = false;
    applicant.save(function(err) {
      if (err) {
        return handleError(res, err);
      }
      sendPubNub(false, applicant._id);
      return res.status(200).json(applicant);
    });
  });
};

exports.compile = function(req, res) {
  Applicant.findOne({
    email: req.params.id
  }, function(err, applicant) {

    if (err) {
      return handleError(res, err);
    }
    if (!applicant) {
      return res.status(404).send('Applicant Not Found with id : ' + req.params.id);
    }
    var source = req.body.source;
    var input = req.body.input;
    sphere.compile(source, applicant.test.language, input, function(err, result) {
      if (err) {
        return handleError(res, err);
      }
      if (!result) {
        return res.status(404).send('Unable to compile code on Sphere Engine');
      }
      // console.log(JSON.stringify(applicant));
      var parsedResult = parseSoapResult(result);

      var questionIndex = _.findIndex(applicant.test.questions, function(item) {
        return item.questionId == req.params.questionId;
      });
      applicant = _.set(applicant, 'test.questions[' + questionIndex + '].submissionLink', parsedResult.link);
      applicant = _.set(applicant, 'test.questions[' + questionIndex + '].submissionId', parsedResult.id);
      console.log('------------------------------');
      console.log(JSON.stringify(applicant));
      console.log('------------------------------');
      applicant.save(function(err) {
        if (err) {
          return handleError(res, err);
        };
        return res.status(200).json(parsedResult);
      });
    });
  });
}

exports.getSubmission = function(req, res) {
  Applicant.findOne({
    email: req.params.id
  }, function(err, applicant) {
    if (err) {
      return handleError(res, err);
    }
    if (!applicant) {
      return res.status(404).send('Applicant Not Found with id : ' + req.params.id);
    }
    var link = req.body.link;
    var id = req.body.id;
    sphere.getSubmission(id, link, function(err, result) {
      if (err) {
        return handleError(res, err);
      }
      if (!result) {
        return res.status(404).send('Unable to compile code on Sphere Engine');
      }
      var parsedResult = parseSoapResult(result);
      var questionIndex = _.findIndex(applicant.test.questions, function(item) {
        return item.submissionLink == link;
      });
      applicant = _.set(applicant, 'test.questions[' + questionIndex + '].submission', parsedResult);
      applicant.save(function(err) {
        if (err) {
          return handleError(res, err);
        };
        return res.status(200).json(parsedResult);
      });
    });
  });

}

exports.calculateScore = function(req, res) {
  Applicant.findOne({
    email: req.params.id
  }, function(err, applicant) {
    if (err) {
      return handleError(res, err);
    }
    if (!applicant) {
      return res.status(404).send('Applicant Not Found with id : ' + req.params.id);
    }
    computeScore(applicant, function(err, applicant) {
      if (err) {
        return handleError(res, err);
      }
      if (!applicant) {
        return res.status(404).send('Unable to compile code on Sphere Engine');
      }

      applicant.save(function(err) {
        if (err) {
          return handleError(res, err);
        };
        return res.status(200).json(applicant);
      });
    });
  });

}

function sendPubNub(valid, id) {
  var pubnub = require("pubnub")({
    ssl: true,
    publish_key: "pub-c-8bf7cb75-e27c-4488-80db-9314413d7a26",
    subscribe_key: "sub-c-a4657126-90ff-11e5-b829-02ee2ddab7fe"
  });

  var message = {
    valid: valid
  };
  pubnub.publish({
    channel: 'coderscout/' + id,
    message: message,
    callback: function(e) {
      console.log("SUCCESS!", e);
    },
    error: function(e) {
      console.log("FAILED! RETRY PUBLISH!", e);
    }
  });

}

function parseSoapResult(input) {
  var result = {};

  _.each(input.return.item, function(item) {
    if(_.result(item, 'key.$value')){
      result[item.key.$value] = item.value.$value;
    }
  });

  // console.log(util.inspect(result));
  return result;
}

function computeScore(applicant, callback) {

  var questions = Question.find({
    '_id': {
      '$in': _.pluck(applicant.test.questions, 'questionId')
    }
  }, function(err, questions) {
    if (_.isEmpty(questions)) {
      callback(new Error('No questions found for applicant\'s Test'));
      return;
    }
    console.log('Calculating final score for : ' + applicant.email);
    async.map(questions, function(question, asyncCallback1) {
      var totalWeightage = _.sum(question.testCases, 'weightage');

      var applicantQuestion = _.find(applicant.test.questions, function(item) {
        return item.questionId.equals(question._id);
      });
      console.log('  Question ' + applicantQuestion.questionId);
      async.map(question.testCases, function(testCase, asyncCallback) {
        console.log('    TestCase input: ' + testCase.input);
        sphere.compile(applicantQuestion.solution, applicant.test.language, testCase.input, function(err, result) {
          if (err) {
            asyncCallback(err);
            return
          }
          var parsedResult = parseSoapResult(result);
          setTimeout(function() {
            sphere.getSubmission(applicant.email, applicantQuestion.submissionLink, function(err, finalResult) {
              if (err) {
                asyncCallback(err);
                return
              }
              var parsedFinalResult = parseSoapResult(finalResult);
              console.log('    TestCase actual output: ' + parsedFinalResult.output);
              console.log('    TestCase expected output: ' + testCase.output);
              if (parsedFinalResult.output + '' === testCase.output + '') {
                var score = testCase.weightage * question.score / totalWeightage;
                console.log('    TestCase score: ' + score);
                asyncCallback(null, score);
              } else {
                console.log('    TestCase score: ' + 0);
                asyncCallback(null, 0);
              }
            });
          }, 4000)

        });
      }, function(err, scores) {
        if (err) {
          asyncCallback1(err);
          return
        }
        applicantQuestion.score = _.sum(scores);
        asyncCallback1(null, applicantQuestion)
      });
    }, function(err, questions) {
      if (err) {
        callback(err);
        return;
      }
      applicant.test.questions = questions;
      callback(null, applicant);

    });
  });
}
