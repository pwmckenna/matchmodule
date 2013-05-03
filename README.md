# matchmodule [![Build Status](https://secure.travis-ci.org/pwmckenna/matchmodule.png?branch=master)](http://travis-ci.org/pwmckenna/matchmodule)

Inspired by Tyler Kellen's [matchdep](https://github.com/tkellen/node-matchdep).

> Use minimatch to filter installed npm modules by name.

## Examples

```js
var matchmodule = require('matchmodule');
matchmodule.filter('grunt-contrib*');
```

## Usage

```js
filter(pattern)
```

### pattern
Type: `String`
Default: none

[minimatch](/isaacs/minimatch) compatible pattern to filter installed modules.
## Difference from Matchdep

I wanted to run grunt tasks from npm without adding them as dependencies, or without adding them to `Gruntfile.js`. By adding the following line to `Gruntfile.js`:
```js
module.exports = function (grunt) {
    // load all installed grunt tasks
    require('matchmodule').filter('grunt-*').forEach(grunt.loadNpmTasks);
};
```
I can now do something like the following if I want to run a one time grunt task:
```
npm install grunt-contrib-jshint
grunt jshint
```

---
Copyright (c) 2013 Patrick Williams. See LICENSE for further details.
