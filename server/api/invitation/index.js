'use strict';

var express = require('express');
var controller = require('./invitation.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/inspect/:id', controller.inspect);
router.post('/', controller.create);
router.post('/invite', controller.invite);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;