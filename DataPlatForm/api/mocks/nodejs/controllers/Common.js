'use strict';

var url = require('url');


var Common = require('./CommonService');


module.exports.getVersionInfo = function getVersionInfo (req, res, next) {
  Common.getVersionInfo(req.swagger.params, res, next);
};

module.exports.login = function login (req, res, next) {
  Common.login(req.swagger.params, res, next);
};
