/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
var Invitation = require('../api/invitation/invitation.model');

Invitation.find({}).remove(function() {
  Invitation.create({
    email : 'saruk589@gmail.com',
    accessKey : 'saruk',
    createdBy : 'iswetha522@gmail.com'
  }, {
    email : 'abc123@gmail.com',
    accessKey : 'abc123',
    createdBy : 'pradeep122@gmail.com'
  });
});

var Thing = require('../api/thing/thing.model');


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

var Interviewer = require('../api/interviewer/interviewer.model');

Interviewer.find({}).remove(function () {
  Interviewer.create({
    email: 'pradeep122@gmail.com',
    password: 'pa88w0rd',
    firstName: 'Pradeep',
    lastName: 'Dantuluri'
  },{
    email: 'bhavyalatha26@gmail.com',
    password: 'pa88w0rd',
    firstName: 'BhavyaLatha',
    lastName: 'Bhandaru'
  },{
    email: 'iswetha522@gmail.com',
    password: 'pa88w0rd',
    firstName: 'Swetha',
    lastName: 'Kalidindi'
  },{
    email: 'camal4u@gmail.com',
    password: 'pa88w0rd',
    firstName: 'Kamal',
    lastName: 'Konisi'
  });
});