'use strict';

var url = require('url');


var GoldenStrategy = require('./GoldenStrategyService');


module.exports.createColumnCategory = function createColumnCategory (req, res, next) {
  GoldenStrategy.createColumnCategory(req.swagger.params, res, next);
};

module.exports.deleteTemplate = function deleteTemplate (req, res, next) {
  GoldenStrategy.deleteTemplate(req.swagger.params, res, next);
};

module.exports.downloadTemplate = function downloadTemplate (req, res, next) {
  GoldenStrategy.downloadTemplate(req.swagger.params, res, next);
};

module.exports.execQuery = function execQuery (req, res, next) {
  GoldenStrategy.execQuery(req.swagger.params, res, next);
};

module.exports.export = function (req, res, next) {
  GoldenStrategy.export(req.swagger.params, res, next);
};

module.exports.findByRegion = function findByRegion (req, res, next) {
  GoldenStrategy.findByRegion(req.swagger.params, res, next);
};

module.exports.followHistory = function followHistory (req, res, next) {
  GoldenStrategy.followHistory(req.swagger.params, res, next);
};

module.exports.getColumnValue = function getColumnValue (req, res, next) {
  GoldenStrategy.getColumnValue(req.swagger.params, res, next);
};

module.exports.getHistory = function getHistory (req, res, next) {
  GoldenStrategy.getHistory(req.swagger.params, res, next);
};

module.exports.getTemplateList = function getTemplateList (req, res, next) {
  GoldenStrategy.getTemplateList(req.swagger.params, res, next);
};

module.exports.moveColumnCategory = function moveColumnCategory (req, res, next) {
  GoldenStrategy.moveColumnCategory(req.swagger.params, res, next);
};

module.exports.updateColumnName = function updateColumnName (req, res, next) {
  GoldenStrategy.updateColumnName(req.swagger.params, res, next);
};

module.exports.uploadTemplate = function uploadTemplate (req, res, next) {
  GoldenStrategy.uploadTemplate(req.swagger.params, res, next);
};

module.exports.upsertRegion = function upsertRegion (req, res, next) {
  GoldenStrategy.upsertRegion(req.swagger.params, res, next);
};
