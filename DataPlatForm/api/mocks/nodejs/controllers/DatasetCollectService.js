'use strict';

exports.dislike = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * albumId (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getCollections = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "list" : [ {
    "album_owner_name" : "aeiou",
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "album_owner" : "aeiou",
    "album_name" : "aeiou",
    "album_desc" : "aeiou",
    "album_id" : "aeiou",
    "id" : "aeiou",
    "source" : "aeiou"
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

exports.getMyCollections = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "list" : [ {
    "album_owner_name" : "aeiou",
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "album_owner" : "aeiou",
    "album_name" : "aeiou",
    "album_desc" : "aeiou",
    "album_id" : "aeiou",
    "id" : "aeiou",
    "source" : "aeiou"
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

exports.like = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * albumId (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.moveCollection = function(args, res, next) {
  /**
   * parameters expected in the args:
  * data (MoveCollection)
  **/
  // no response value expected for this operation
  res.end();
}

