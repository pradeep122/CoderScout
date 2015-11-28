/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Interviewer = require('../api/interviewer/interviewer.model');
var Invitation = require('../api/invitation/invitation.model');
var Test = require('../api/test/test.model');
var Applicant = require('../api/applicant/applicant.model');


Interviewer.find({}).remove(function() {
    Interviewer.create({
        email: 'pradeep122@gmail.com',
        password: 'pa88w0rd',
        firstName: 'Pradeep',
        lastName: 'Dantuluri'
    }, {
        email: 'bhavyalatha26@gmail.com',
        password: 'pa88w0rd',
        firstName: 'BhavyaLatha',
        lastName: 'Bhandaru'
    }, {
        email: 'iswetha522@gmail.com',
        password: 'pa88w0rd',
        firstName: 'Swetha',
        lastName: 'Kalidindi'
    }, {
        email: 'camal4u@gmail.com',
        password: 'pa88w0rd',
        firstName: 'Kamal',
        lastName: 'Konisi'
    });
});

var Question = require('../api/question/question.model');

Question.find({}).remove(function() {
    Question.create({
        description: 'C Program to Check Whether a Number is Even or Odd',
        solution: '#include <stdio.h>' +
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
        testCases: [{
            input: '25',
            output: 'Enter an integer you want to check: 25' +
                '25 is odd.',
            weightage: 50
        }],
        createdBy: 'iswetha522@gmail.com'
    }, {
        description: 'C Program to Check Whether a Number is Palindrome or Not',
        solution: '#include <stdio.h>' +
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
        testCases: [{
            input: '12321',
            output: 'Enter an integer: 12321' +
                '12321 is a palindrome.',
            weightage: 50
        }],
        createdBy: 'pradeep122@gmail.com',
        score: 100
    }, function(err, question1, question2) {
        Test.find({}).remove(function() {
            Test.create({
                invitations: [],
                questions: [{
                    questionId: question1._id
                }, {
                    questionId: question2._id
                }],
                startTime: Date.now(),
                endTime: Date.now() + (2 * 24 * 60 * 60000),
                duration: 120,
                createdBy: 'bhavyalatha26@gmail.com'
            }, {
                invitations: [],
                questions: [{
                    questionId: question1._id
                }, {
                    questionId: question2._id
                }],
                startTime: Date.now(),
                endTime: Date.now() + (2 * 24 * 60 * 60000),
                duration: 60,
                createdBy: 'pradeep122@gmail.com'
            }, {
                invitations: [],
                questions: [{
                    questionId: question1._id
                }, {
                    questionId: question2._id
                }],
                startTime: Date.now(),
                endTime: Date.now() + (2 * 24 * 60 * 60000),
                duration: 120,
                createdBy: 'camal4u@gmail.com'
            }, function(err, test1, test2, test3) {

                Invitation.find({}).remove(function() {
                    Invitation.create({
                        email: 'saruk58@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'sar89@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test1._id
                    },{
                        email: 'k589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test3._id
                    },{
                        email: 'ruk589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test1._id
                    },{
                        email: 'aruk589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'sruk589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    },{
                        email: 'sauk589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruk89@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test3._id
                    },{
                        email: 'saruk5889@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    },{
                        email: 'saruk58999@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruk56689@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test2._id
                    },{
                        email: 'sarudffk589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'sarukttt21589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    },{
                        email: 'sarukttt57589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'sarukttt@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test3._id
                    },{
                        email: 'sarukttt58309@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'sarukttt431589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test3._id
                    },{
                        email: 'saruktttswe589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'swek589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test2._id
                    },{
                        email: 'sprak589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruvek589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test2._id
                    },{
                        email: 'saruwek589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruk1122589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test3._id
                    },{
                        email: 'saruk587689@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruk5gr589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test2._id
                    },{
                        email: 'saruk589gdgg@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruk58945g@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruk589gdt5h6@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruk5891234@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    },{
                        email: 'saruk5895678@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test3._id
                    },{
                        email: 'saruk5891357@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruk589swe@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    },{
                        email: 'sarukwe9@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruk58921@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    },{
                        email: 'saruk589367@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    },{
                        email: 'saruk5890001@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test3._id
                    },{
                        email: 'saruk589dfff34d@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruk58912345@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruk589swertha@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruk589pra@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'saruk589roh@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    },{
                        email: 'abc123kam@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    }, function(err, invitation1, invitation2) {
                        Applicant.find({}).remove(function() {
                            Applicant.create({
                                email: invitation1.email,
                                firstName: 'Bhavya',
                                lastName: 'Latha',
                                test: {
                                    testId: invitation1.testId,
                                    language: 10,
                                    startTime: Date.now(),
                                    endTime: Date.now() + (test1.duration * 60000),
                                    questions: [{
                                        questionId: test1.questions[0].questionId,
                                        score: 45,
                                        solution: ''
                                    }]
                                },
                                invitedBy: invitation1.createdBy
                            }, function(err, invitation) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log(invitation);
                                }
                            });
                        });
                    });
                });
            });
        });
    });
});