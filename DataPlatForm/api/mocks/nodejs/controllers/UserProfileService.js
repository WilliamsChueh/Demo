'use strict';

exports.addFollower = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getUserProfile = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "md_date" : "2000-01-23T04:56:07.000+00:00",
  "album_review" : [ {
    "album_items" : "aeiou",
    "album_follower" : "aeiou",
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "album_owner" : "aeiou",
    "album_name" : "aeiou",
    "album_shared" : "aeiou",
    "album_desc" : "aeiou",
    "album_id" : "aeiou",
    "by_user" : "aeiou"
  } ],
  "name" : "aeiou",
  "follows" : [ "aeiou" ],
  "share" : {
    "list" : [ {
      "to_user" : [ "aeiou" ],
      "md_date" : "2000-01-23T04:56:07.000+00:00",
      "id" : "aeiou"
    } ]
  },
  "department" : "aeiou",
  "user" : "aeiou",
  "fans" : [ "aeiou" ],
  "ali" : {
    "id" : "aeiou",
    "user" : "aeiou"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.queryUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * q (String)
  * offset (Long)
  * limit (Integer)
  * sort (String)
  * order (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "total_size" : 123,
  "hasNext" : true,
  "list" : [ {
    "albums" : 123,
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "name" : "aeiou",
    "follows" : [ "aeiou" ],
    "department" : "aeiou",
    "user" : "aeiou",
    "ali" : {
      "id" : "aeiou",
      "user" : "aeiou"
    },
    "fans" : [ "aeiou" ]
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

exports.removeFollower = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.updateUserProfile = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userProfile (SimpleUser)
  **/
  // no response value expected for this operation
  res.end();
}

