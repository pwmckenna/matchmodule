/*
 * matchmodule
 * https://github.com/pwmckenna/matchmodule
 *
 * Copyright (c) 2013 Patrick Williams
 * Licensed under the MIT license.
 */

'use strict';

var globule = require('globule');
var fs = require('fs');
var path = require('path');

// export object
var matchmodule = module.exports = {};

function loadModuleList() {
  var modules = [];

  var nodeDir = 'node_modules';
  fs.readdirSync(nodeDir).forEach(function (module) {
    var moduleDir = path.join(nodeDir, module);
    var packagePath = path.join(moduleDir, 'package.json');
    if(fs.statSync(moduleDir).isDirectory() && fs.existsSync(packagePath)) {
      modules.push(module);
    }
  });

  return modules;
}

// filter all installed modules
matchmodule.filter = function(pattern) {
  var modules = loadModuleList();
  return globule.match(modules, pattern, {});
};
