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
                startTime: '21-11-2015 10:00:00',
                endTime: '21-11-2015 12:00:00',
                duration: 120,
                createdBy: 'bhavyalatha26@gmail.com'
            }, {
                invitations: [],
                questions: [{
                    questionId: question1._id
                }, {
                    questionId: question2._id
                }],
                startTime: '21-11-2015 14:00:00',
                endTime: '21-11-2015 15:00:00',
                duration: 60,
                createdBy: 'pradeep122@gmail.com'
            }, {
                invitations: [],
                questions: [{
                    questionId: question1._id
                }, {
                    questionId: question2._id
                }],
                startTime: '22-11-2015 09:00:00',
                endTime: '22-11-2015 11:00:00',
                duration: 120,
                createdBy: 'camal4u@gmail.com'
            }, function(err, test1, test2, test3) {

                Invitation.find({}).remove(function() {
                    Invitation.create({
                        email: 'saruk589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'abc123@gmail.com',
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
                                    language: 'Java',
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