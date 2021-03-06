'use strict';

var express = require('express');
var controller = require('./invitation.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);


router.get('/validate/:id', controller.validate);
router.post('/invite', controller.invite);
router.put('/resend/:id', controller.resend);
router.put('/cancel/:id', controller.cancel);

module.exports = router;
