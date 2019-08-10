'use strict';

var url = require('url');


var UserProfile = require('./UserProfileService');


module.exports.addFollower = function addFollower (req, res, next) {
  UserProfile.addFollower(req.swagger.params, res, next);
};

module.exports.getUserProfile = function getUserProfile (req, res, next) {
  UserProfile.getUserProfile(req.swagger.params, res, next);
};

module.exports.queryUser = function queryUser (req, res, next) {
  UserProfile.queryUser(req.swagger.params, res, next);
};

module.exports.removeFollower = function removeFollower (req, res, next) {
  UserProfile.removeFollower(req.swagger.params, res, next);
};

module.exports.updateUserProfile = function updateUserProfile (req, res, next) {
  UserProfile.updateUserProfile(req.swagger.params, res, next);
};
