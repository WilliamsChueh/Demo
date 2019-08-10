'use strict';

exports.deleteGlossary = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getGlossary = function(args, res, next) {
  /**
   * parameters expected in the args:
  * key (String)
  * offset (Long)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "hasNext" : true,
  "list" : [ {
    "id" : "aeiou",
    "key" : "aeiou",
    "desc" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.upsertGlossary = function(args, res, next) {
  /**
   * parameters expected in the args:
  * glossary (Glossary)
  **/
    var examples = {};
  examples['application/json'] = {
  "id" : "aeiou",
  "key" : "aeiou",
  "desc" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

