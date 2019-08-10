'use strict';

var url = require('url');


var Glossary = require('./GlossaryService');


module.exports.deleteGlossary = function deleteGlossary (req, res, next) {
  Glossary.deleteGlossary(req.swagger.params, res, next);
};

module.exports.getGlossary = function getGlossary (req, res, next) {
  Glossary.getGlossary(req.swagger.params, res, next);
};

module.exports.upsertGlossary = function upsertGlossary (req, res, next) {
  Glossary.upsertGlossary(req.swagger.params, res, next);
};
