'use strict';

var url = require('url');


var PersonalAlbum = require('./PersonalAlbumService');


module.exports.approveReview = function approveReview (req, res, next) {
  PersonalAlbum.approveReview(req.swagger.params, res, next);
};

module.exports.createAlbum = function createAlbum (req, res, next) {
  PersonalAlbum.createAlbum(req.swagger.params, res, next);
};

module.exports.deleteAlbum = function deleteAlbum (req, res, next) {
  PersonalAlbum.deleteAlbum(req.swagger.params, res, next);
};

module.exports.deleteAlbumTag = function deleteAlbumTag (req, res, next) {
  PersonalAlbum.deleteAlbumTag(req.swagger.params, res, next);
};

module.exports.followAlbum = function followAlbum (req, res, next) {
  PersonalAlbum.followAlbum(req.swagger.params, res, next);
};

module.exports.getAlbum = function getAlbum (req, res, next) {
  PersonalAlbum.getAlbum(req.swagger.params, res, next);
};

module.exports.getSuggestList = function getSuggestList (req, res, next) {
  PersonalAlbum.getSuggestList(req.swagger.params, res, next);
};

module.exports.queryAlbum = function queryAlbum (req, res, next) {
  PersonalAlbum.queryAlbum(req.swagger.params, res, next);
};

module.exports.queryMyAllAlbum = function queryMyAllAlbum (req, res, next) {
  PersonalAlbum.queryMyAllAlbum(req.swagger.params, res, next);
};

module.exports.rejectReview = function rejectReview (req, res, next) {
  PersonalAlbum.rejectReview(req.swagger.params, res, next);
};

module.exports.shareAlbum = function shareAlbum (req, res, next) {
  PersonalAlbum.shareAlbum(req.swagger.params, res, next);
};

module.exports.tagAlbum = function tagAlbum (req, res, next) {
  PersonalAlbum.tagAlbum(req.swagger.params, res, next);
};

module.exports.unfollowAlbum = function unfollowAlbum (req, res, next) {
  PersonalAlbum.unfollowAlbum(req.swagger.params, res, next);
};

module.exports.updateAlbum = function updateAlbum (req, res, next) {
  PersonalAlbum.updateAlbum(req.swagger.params, res, next);
};
