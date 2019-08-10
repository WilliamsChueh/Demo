'use strict';

var url = require('url');


var Statistic = require('./StatisticService');


module.exports.recordHits = function recordHits (req, res, next) {
  Statistic.recordHits(req.swagger.params, res, next);
};
