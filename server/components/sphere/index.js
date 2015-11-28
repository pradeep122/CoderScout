/**
 * Sphere Engine Interface
 */

'use strict';

var soap = require('soap');

var url = 'http://api.compilers.sphere-engine.com/api/1/service.wsdl';
var user = 'c0bad7c1977d8fb88feb5b716b5275b1';
var pass = '992cb4e89dbc0e70ab67debf1b14b44b';

exports.compile = function(source, language, input, callback) {
    soap.createClient(url, function(err, client) {
        client.createSubmission({
            user: user,
            pass: pass,
            language: language,
            sourceCode: source,
            run: true,
            input: input
        }, function(err, result) {
            if (err) {
                console.log('[ERROR]' + err);
                callback(err);
            } else {
                console.log('SUCESS while compiling on Sphere Engine');
                callback(null, result);
            }
        });
    });
};

exports.getSubmission = function(id, callback) {
    var params = {
        user: user,
        pass: pass,
        // id: 40215729,
        link: id || 's8loLz',
        withSource: true,
        withInput: true,
        withOutput: true,
        withStderr: true,
        withCmpinfo: true
    };
    soap.createClient(url, function(err, client) {
        client.getSubmissionDetails(params, function(err, result) {
            if (err) {
                console.log('[ERROR]' + err);
                callback(err);
            } else {
                console.log('SUCESS while fetching Sphere Engine result');
                callback(null, result);
            }
        });
    });
};
