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
        description: '<div class="qsn"><h1 class="qsn-header">Problem Statement</h1><p> Would you want to fight against bears who ride horses? Me neither. </p><p>Limak is a grizzly bear. He is a general of the dreadful army of Bearland. The most important part of the army is, of course, the cavalry.</p><p>The cavalry of Bearland consists of the same number of warriors and horses. Limak knows the strength of each warrior and also the strength of each horse. These are given in int[]s warriors and horses, respectively.</p><p>General Limak must assign exactly one horse to each warrior. Obviously, different warriors must be given different horses.</p><p>A warrior together with his assigned horse is called a unit. The strength of a unit is equal to the product of the strengths of the warrior and the horse that form the unit.</p><p>The warrior that corresponds to element 0 in warriors is called Bravebeart. He is always the first to charge the enemy. Limak decided that Bravebeart deserves some respect. Thus, his unit must be strictly stronger than any other unit. (Ties are not allowed.)</p><p>Given this constraint, let X be the number of valid ways in which Limak can create the units. A general must know everything about his army. Help Limak count the valid assignments. Compute and return the value (X modulo 1,000,000,007).</p> <h2>Definition<h2><table>  <tr>    <td>Class:</td> <td>BearCavalry</td>  </tr>  <tr>    <td>Method:</td> <td>countAssignments</td>  </tr>  <tr>    <td>Parameters:</td> <td>int[], int[]</td>  </tr>  <tr>    <td>Returns:</td> <td>int</td>  </tr>  <tr>    <td>Method signature:</td> <td>int countAssignments(int[] warriors, int[] horses)  (be sure your method is public)</td>  </tr></table>   <h2>Constraints</h2><ul> <li>warriors will contain between 2 and 50 elements, inclusive. </li><li>warriors and horses will contain the same number of elements.</li><li>Each element in warriors and in horses will be between 1 and 1000, inclusive. </li></ul><h2>Example </h2>        <p> {5,8,4,8} </p><p>{19,40,25,20}</p><p>Returns: 2</p><p></p><p>There are four warriors and four horses for them. Bravebeart\'s strength is warriors[0] = 5.</p><p></p><p>There are two valid ways to pair the warriors and horses into units. Below, each unit is presented as an ordered pair (warrior\'s strength, horse\'s strength). The warriors are presented in the same order as in warriors.</p><p></p><p>Valid assignment #1: (5,40), (8,19), (4,25), (8,20).</p><p></p><p>Valid assignment #2: (5,40), (8,20), (4,25), (8,19).</p><p></p><p>In assignment #1, the strength of Bravebeart\'s unit is 5 * 40 = 200. The other three units have strengths 8 * 19 = 152, 4 * 25 = 100, and 8 * 20 = 160. This is a valid assignment because the number 200 is strictly greater than each of the numbers 152, 100, and 160. < /p></div>',
        solutions: {
            '10': '/*package whatever; // don\'t place package name! */\n' +
                'import java.util.*;\n' +
                'import java.lang.*;\n' +
                'import java.io.*;\n' +
                '/* Name of the class has to be "Main" only if the class is public. */\n' +
                'class CoderScout\n' +
                '{\n' +
                ' public static void main (String[] args) throws java.lang.Exception\n' +
                ' {\n' +
                ' // your code goes here' +
                ' }\n' +
                '}\n',
            '56': 'process.stdin.resume();\n' +
                'process.stdin.setEncoding(\'utf8\');\n' +
                'var remainder = \'\'\n' +
                'process.stdin.on(\'data\', function (chunk) {\n' +
                ' var lines = chunk.toString().split(\'\n\');\n' +
                ' process.exit();\n' +
                '});\n',
            '11': '#include <stdio.h>\n' +
                'int main(void) {\n' +
                ' // your code goes here\n' +
                ' return 0;\n' +
                '}\n',
            '1': '#include <iostream>\n' +
                'using namespace std;\n' +
                'int main() {\n' +
                '// your code goes here\n' +
                'return 0;\n' +
                '}\n'
        },
        testCases: [{
            input: '{5,8,4,8}\n{19,40,25,20}',
            output: '2',
            weightage: 1
        }, {
            input: '{1,1}\n{1,1}',
            output: '0',
            weightage: 2
        }, {
            input: '{10,2,10}\n{100,150,200}',
            output: '3',
            weightage: 1
        }, {
            input: '{10,20}\n{1,3}',
            output: '1',
            weightage: 1
        }, {
            input: '{20,20,25,23,24,24,21}\n{20,25,25,20,25,23,20}',
            output: '0',
            weightage: 1
        }, {
            input: '{970,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800,800}\n{1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000}',
            output: '0',
            weightage: 3
        }],
        createdBy: 'pradeep@coderscout.co',
        score: 75
    }, {
        description: '<h1>Problem Statement</h1><p> Bear Limak has a rectangular grid that consist of H times W unit square cells. Limak also has N square stamps. The lengths of the stamps\' sides are 2^0, 2^1, ..., 2^(N-1). </p><p>A set of stamps is called good if it can be used to cover the entire grid. Each stamp must be placed along the grid lines. I.e., for each stamp each cell is either completely covered by the stamp or not covered at all. The stamps may overlap arbitrarily. The stamps may also cover areas outside of the grid. For example, you may use a 4x4 stamp just to cover a single cell in the corner of the grid. </p><p>You are given the int N and the longs H and W. Limak wants to choose a subset of his stamps that will be good. Return the number of ways in which he can do so.</p><h2>Definition<h2><table>  <tr>    <td>Class:</td> <td>BearFills</td>  </tr>  <tr>    <td>Method:</td> <td>countSets</td>  </tr>  <tr>    <td>Parameters:</td> <td>int, long, long</td>  </tr>  <tr>    <td>Returns:</td> <td>long</td>  </tr>  <tr>    <td>Method signature:</td> <td>long countSets(int N, long W, long H)    (be sure your method is public)</td>  </tr></table>   <h2>Constraints</h2><ul> <li>N will be between 1 and 60, inclusive. </li><li>H and W will be between 1 and 10^18, inclusive.</li></ul><h2>Example </h2><p>3 </p><p>1</p><p>3</p><p>Returns: 5</p><p></p><p>He has a 1x3 rectangle and 3 square stamps. The stamps\' sides are 1, 2, and 4. The good sets of stamps are the following ones: (1,2), (1,2,4), (1,4), (2,4), and (4).</p>',
        solution: {
            '10': '',
            '56': '',
            '11': '',
            '1': ''
        },
        testCases: [{
            input: '3\n1\n3',
            output: '5',
            weightage: 1
        }, {
            input: '3\n3\n5',
            output: '1',
            weightage: 1
        }, {
            input: '60\n3\n2',
            output: '1152921504606846972',
            weightage: 2
        }, {
            input: '6\n5\n4',
            output: '56',
            weightage: 1
        }],
        createdBy: 'pradeep@coderscout.co',
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
                    }, {
                        email: 'k589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test3._id
                    }, {
                        email: 'ruk589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'aruk589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'sruk589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    }, {
                        email: 'sauk589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruk89@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test3._id
                    }, {
                        email: 'saruk5889@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    }, {
                        email: 'saruk58999@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruk56689@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test2._id
                    }, {
                        email: 'sarudffk589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'sarukttt21589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    }, {
                        email: 'sarukttt57589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'sarukttt@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test3._id
                    }, {
                        email: 'sarukttt58309@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'sarukttt431589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test3._id
                    }, {
                        email: 'saruktttswe589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'swek589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test2._id
                    }, {
                        email: 'sprak589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruvek589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test2._id
                    }, {
                        email: 'saruwek589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruk1122589@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test3._id
                    }, {
                        email: 'saruk587689@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruk5gr589@gmail.com',
                        createdBy: 'iswetha522@gmail.com',
                        testId: test2._id
                    }, {
                        email: 'saruk589gdgg@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruk58945g@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruk589gdt5h6@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruk5891234@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    }, {
                        email: 'saruk5895678@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test3._id
                    }, {
                        email: 'saruk5891357@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruk589swe@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    }, {
                        email: 'sarukwe9@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruk58921@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    }, {
                        email: 'saruk589367@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test2._id
                    }, {
                        email: 'saruk5890001@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test3._id
                    }, {
                        email: 'saruk589dfff34d@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruk58912345@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruk589swertha@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruk589pra@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
                        email: 'saruk589roh@gmail.com',
                        createdBy: 'pradeep122@gmail.com',
                        testId: test1._id
                    }, {
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
