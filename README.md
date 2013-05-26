# Matchmodule
> ###is a node module for matching strings against currently installed modules.

Inspired by Tyler Kellen's [matchdep](https://github.com/tkellen/node-matchdep).

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

Looks for install node modules in `node_modules`, rather than parsing your package.json.

## Why?

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
