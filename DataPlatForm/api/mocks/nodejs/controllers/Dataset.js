'use strict';

var url = require('url');


var Dataset = require('./DatasetService');


module.exports.deleteColumnDesc = function deleteColumnDesc (req, res, next) {
  Dataset.deleteColumnDesc(req.swagger.params, res, next);
};

module.exports.deleteColumnDetail = function deleteColumnDetail (req, res, next) {
  Dataset.deleteColumnDetail(req.swagger.params, res, next);
};

module.exports.deleteExpert = function deleteExpert (req, res, next) {
  Dataset.deleteExpert(req.swagger.params, res, next);
};

module.exports.deleteExtra = function deleteExtra (req, res, next) {
  Dataset.deleteExtra(req.swagger.params, res, next);
};

module.exports.deleteFile = function deleteFile (req, res, next) {
  Dataset.deleteFile(req.swagger.params, res, next);
};

module.exports.deleteMainCol = function deleteMainCol (req, res, next) {
  Dataset.deleteMainCol(req.swagger.params, res, next);
};

module.exports.deletePartitionDesc = function deletePartitionDesc (req, res, next) {
  Dataset.deletePartitionDesc(req.swagger.params, res, next);
};

module.exports.deleteTag = function deleteTag (req, res, next) {
  Dataset.deleteTag(req.swagger.params, res, next);
};

module.exports.downloadFile = function downloadFile (req, res, next) {
  Dataset.downloadFile(req.swagger.params, res, next);
};

module.exports.getColumnDescs = function getColumnDescs (req, res, next) {
  Dataset.getColumnDescs(req.swagger.params, res, next);
};

module.exports.getColumnDetails = function getColumnDetails (req, res, next) {
  Dataset.getColumnDetails(req.swagger.params, res, next);
};

module.exports.getColumnTypes = function getColumnTypes (req, res, next) {
  Dataset.getColumnTypes(req.swagger.params, res, next);
};

module.exports.getDataset = function getDataset (req, res, next) {
  Dataset.getDataset(req.swagger.params, res, next);
};

module.exports.getDatasets = function getDatasets (req, res, next) {
  Dataset.getDatasets(req.swagger.params, res, next);
};

module.exports.getExperts = function getExperts (req, res, next) {
  Dataset.getExperts(req.swagger.params, res, next);
};

module.exports.getExtras = function getExtras (req, res, next) {
  Dataset.getExtras(req.swagger.params, res, next);
};

module.exports.getFileList = function getFileList (req, res, next) {
  Dataset.getFileList(req.swagger.params, res, next);
};

module.exports.getMaincols = function getMaincols (req, res, next) {
  Dataset.getMaincols(req.swagger.params, res, next);
};

module.exports.getPartitionDescs = function getPartitionDescs (req, res, next) {
  Dataset.getPartitionDescs(req.swagger.params, res, next);
};

module.exports.getSqlStmt = function getSqlStmt (req, res, next) {
  Dataset.getSqlStmt(req.swagger.params, res, next);
};

module.exports.getTags = function getTags (req, res, next) {
  Dataset.getTags(req.swagger.params, res, next);
};

module.exports.getTraceList = function getTraceList (req, res, next) {
  Dataset.getTraceList(req.swagger.params, res, next);
};

module.exports.updateColumnDetail = function updateColumnDetail (req, res, next) {
  Dataset.updateColumnDetail(req.swagger.params, res, next);
};

module.exports.updateExpert = function updateExpert (req, res, next) {
  Dataset.updateExpert(req.swagger.params, res, next);
};

module.exports.updateMainCol = function updateMainCol (req, res, next) {
  Dataset.updateMainCol(req.swagger.params, res, next);
};

module.exports.uploadDoc = function uploadDoc (req, res, next) {
  Dataset.uploadDoc(req.swagger.params, res, next);
};

module.exports.upsertColumnDesc = function upsertColumnDesc (req, res, next) {
  Dataset.upsertColumnDesc(req.swagger.params, res, next);
};

module.exports.upsertExtra = function upsertExtra (req, res, next) {
  Dataset.upsertExtra(req.swagger.params, res, next);
};

module.exports.upsertFiled = function upsertFiled (req, res, next) {
  Dataset.upsertFiled(req.swagger.params, res, next);
};

module.exports.upsertParttionDesc = function upsertParttionDesc (req, res, next) {
  Dataset.upsertParttionDesc(req.swagger.params, res, next);
};

module.exports.upsertTag = function upsertTag (req, res, next) {
  Dataset.upsertTag(req.swagger.params, res, next);
};
