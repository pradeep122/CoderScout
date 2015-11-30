'use strict';

var express = require('express');
var controller = require('./applicant.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);


router.put('/invalidate/:id', controller.invalidate);
router.get('/validate/:id', controller.validate);
router.post('/create', controller.createApplicant);
router.put('/:id/save', controller.saveSolutions);
router.put('/:id/submit', controller.submit);


router.post('/:id/compile/:questionId', controller.compile);
router.post('/:id/status', controller.getSubmission);

router.post('/:id/score', controller.calculateScore);

module.exports = router;
