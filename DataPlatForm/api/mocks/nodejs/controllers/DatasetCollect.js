'use strict';

var url = require('url');


var DatasetCollect = require('./DatasetCollectService');


module.exports.dislike = function dislike (req, res, next) {
  DatasetCollect.dislike(req.swagger.params, res, next);
};

module.exports.getCollections = function getCollections (req, res, next) {
  DatasetCollect.getCollections(req.swagger.params, res, next);
};

module.exports.getMyCollections = function getMyCollections (req, res, next) {
  DatasetCollect.getMyCollections(req.swagger.params, res, next);
};

module.exports.like = function like (req, res, next) {
  DatasetCollect.like(req.swagger.params, res, next);
};

module.exports.moveCollection = function moveCollection (req, res, next) {
  DatasetCollect.moveCollection(req.swagger.params, res, next);
};
