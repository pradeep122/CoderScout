'use strict';

var express = require('express');
var controller = require('./applicant.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/create', controller.createApplicant);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);


router.put('/valid/:id/:value', controller.valid);
module.exports = router;