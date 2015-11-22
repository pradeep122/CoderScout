/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';


var Question = require('../api/question/question.model');

Question.find({}).remove(function() {
  Question.create({
    description : 'C Program to Check Whether a Number is Even or Odd',
    solution :  '#include <stdio.h>' + 
                'int main(){' + 
                '      int num;' + 
                '      printf("Enter an integer you want to check: ");' + 
                '      scanf("%d",&num);' + 
                '      if((num%2)==0)      /* Checking whether remainder is 0 or not. */' + 
                '           printf("%d is even.",num);' + 
                '      else' + 
                '           printf("%d is odd.",num);' + 
                '      return 0;' + 
                '}',
    testCases : [{
      input : '25',
      output : 'Enter an integer you want to check: 25' +
                '25 is odd.',
      weightage : 50
    }],
    createdBy : 'iswetha522@gmail.com'
  }, {
    description : 'C Program to Check Whether a Number is Palindrome or Not',
    solution :  '#include <stdio.h>' + 
                'int main()' + 
                '{' + 
                '  int n, reverse=0, rem,temp;' + 
                '  printf("Enter an integer: ");' + 
                '  scanf("%d", &n);' + 
                '  temp=n;' + 
                '  while(temp!=0)' + 
                '  {' + 
                '     rem=temp%10;' + 
                '     reverse=reverse*10+rem;' + 
                '     temp/=10;' + 
                '  }  ' + 
                '  if(reverse==n)  ' + 
                '      printf("%d is a palindrome.",n);' + 
                '  else' + 
                '      printf("%d is not a palindrome.",n);' + 
                '  return 0;' + 
                '}',
    testCases : [{
      input : '12321',
      output : 'Enter an integer: 12321' + 
                '12321 is a palindrome.',
      weightage : 50
    }],
    createdBy : 'pradeep122@gmail.com',
    score: 100
  });
});

var Invitation = require('../api/invitation/invitation.model');

Invitation.find({}).remove(function() {
  Invitation.create({
    email : 'saruk589@gmail.com',
    cookie : 'saru',
    createdBy : 'iswetha522@gmail.com',
    valid : true
  }, {
    email : 'abc123@gmail.com',
    cookie : 'abc123',
    createdBy : 'pradeep122@gmail.com',
    valid : true
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

var Test = require('../api/test/test.model');

Test.find({}).remove(function () {
  Test.create({
    invitations: [],
    questions: [],
    startTime: '21-11-2015 10:00:00',
    endTime: '21-11-2015 12:00:00',
    duration: 120 ,
    createdBy: 'bhavyalatha26@gmail.com'
  },{
    invitations: [],
    questions: [],
    startTime: '21-11-2015 14:00:00',
    endTime: '21-11-2015 15:00:00',
    duration: 60 ,
    createdBy: 'pradeep122@gmail.com'
  },
  {
    invitations: [],
    questions: [],
    startTime: '22-11-2015 09:00:00',
    endTime: '22-11-2015 11:00:00',
    duration: 120 ,
    createdBy: 'camal4u@gmail.com'
  });
});

var Applicant = require('../api/applicant/applicant.model');

Applicant.find({}).remove(function () {
  Applicant.create({
        email: 'bhavyalatha26@gmail.com',
        firstName: 'Bhavya',
        lastName: 'Latha',
        info: {
        },
        test: {
            testId : '56514f0e67ae3c3833611a27',
            language: 'Java',
            startTime: '22-11-2015 10:30:00',
            submitTime: '22-11-2015 11:45:00',
            endTime: '22-11-2015 12:30:00',
            questions: [{
                question_id: '56514f0e67ae3c3833611a27',
                score: 45,
                solution: ''
            }],
            feedback: 'pass',
            valid: 'true'
        },
        invitedBy: 'pradeep122@gmail.com'
    });
});