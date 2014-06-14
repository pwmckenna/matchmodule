'use strict';
var npm = require('npm');
var assert = require('assert');

describe('matchmodule test suite', function () {
    it('detects an installed npm package not listed as a dependency in package.json', function (done) {
        this.timeout(25000);

        assert(require('matchdep').filterAll('testNpmModule').length === 0);

        var testNpmModule = 'grunt-contrib-watch';
        npm.load({}, function (err) {
            if (err) {
                return done(new Error(err));
            } else {
                npm.commands.install([testNpmModule], function (er, data) {
                    if (err) {
                        return done(new Error(err));
                    } else {
                        var modules = require('../lib/matchmodule').filter(testNpmModule);
                        assert(modules.length === 1);
                        assert(modules[0] === testNpmModule);
                        done();
                    }
                });
            }
        });
    });
    it('detects an installed npm package not listed as a dependency in package.json using arrays', function (done) {
        this.timeout(25000);

        assert(require('matchdep').filterAll('testNpmModule').length === 0);

        var testNpmModule = 'grunt-contrib-watch';
        npm.load({}, function (err) {
            if (err) {
                return done(new Error(err));
            } else {
                npm.commands.install([testNpmModule], function (er, data) {
                    if (err) {
                        return done(new Error(err));
                    } else {
                        var modules = require('../lib/matchmodule').filter([testNpmModule]);
                        assert(modules.length === 1);
                        assert(modules[0] === testNpmModule);
                        done();
                    }
                });
            }
        });
    });
});