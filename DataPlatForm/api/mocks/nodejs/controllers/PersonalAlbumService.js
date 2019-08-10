'use strict';

exports.approveReview = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * by_user (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.createAlbum = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * desc (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "owner" : "aeiou",
  "shared" : [ {
    "by_user_name" : "aeiou",
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "by_user" : "aeiou",
    "who" : "aeiou"
  } ],
  "like_by_me" : true,
  "owner_name" : "aeiou",
  "md_date" : "2000-01-23T04:56:07.000+00:00",
  "del" : true,
  "follow" : [ {
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "who" : "aeiou"
  } ],
  "tags" : [ {
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "name" : "aeiou",
    "md_id" : "aeiou"
  } ],
  "popularity" : "aeiou",
  "name" : "aeiou",
  "shared_to_me" : "",
  "id" : "aeiou",
  "items" : [ {
    "popularity" : "aeiou",
    "name" : "aeiou",
    "project" : "aeiou",
    "url" : "aeiou",
    "desc" : "aeiou"
  } ],
  "desc" : "aeiou",
  "follow_by_me" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteAlbum = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteAlbumTag = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * name (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.followAlbum = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getAlbum = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "owner" : "aeiou",
  "shared" : [ {
    "by_user_name" : "aeiou",
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "by_user" : "aeiou",
    "who" : "aeiou"
  } ],
  "like_by_me" : true,
  "owner_name" : "aeiou",
  "md_date" : "2000-01-23T04:56:07.000+00:00",
  "del" : true,
  "follow" : [ {
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "who" : "aeiou"
  } ],
  "tags" : [ {
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "name" : "aeiou",
    "md_id" : "aeiou"
  } ],
  "popularity" : "aeiou",
  "name" : "aeiou",
  "shared_to_me" : "",
  "id" : "aeiou",
  "items" : [ {
    "popularity" : "aeiou",
    "name" : "aeiou",
    "project" : "aeiou",
    "url" : "aeiou",
    "desc" : "aeiou"
  } ],
  "desc" : "aeiou",
  "follow_by_me" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getSuggestList = function(args, res, next) {
  /**
   * parameters expected in the args:
  * oid (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "hasNext" : true,
  "list" : [ {
    "prject_name" : "aeiou",
    "album_name" : [ "aeiou" ],
    "id" : "aeiou",
    "table_name" : "aeiou",
    "table_desc" : "aeiou"
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

exports.queryAlbum = function(args, res, next) {
  /**
   * parameters expected in the args:
  * owner (String)
  * q (String)
  * type (String)
  * sort (String)
  * order (String)
  * offset (Long)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "total_size" : 123,
  "hasNext" : true,
  "list" : [ {
    "owner" : "aeiou",
    "shared" : [ {
      "by_user_name" : "aeiou",
      "md_date" : "2000-01-23T04:56:07.000+00:00",
      "by_user" : "aeiou",
      "who" : "aeiou"
    } ],
    "like_by_me" : true,
    "owner_name" : "aeiou",
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "del" : true,
    "follow" : [ {
      "md_date" : "2000-01-23T04:56:07.000+00:00",
      "who" : "aeiou"
    } ],
    "tags" : [ {
      "md_date" : "2000-01-23T04:56:07.000+00:00",
      "name" : "aeiou",
      "md_id" : "aeiou"
    } ],
    "popularity" : "aeiou",
    "name" : "aeiou",
    "shared_to_me" : "",
    "id" : "aeiou",
    "items" : [ {
      "popularity" : "aeiou",
      "name" : "aeiou",
      "project" : "aeiou",
      "url" : "aeiou",
      "desc" : "aeiou"
    } ],
    "desc" : "aeiou",
    "follow_by_me" : ""
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

exports.queryMyAllAlbum = function(args, res, next) {
  /**
   * parameters expected in the args:
  * q (String)
  * sort (String)
  * order (String)
  * offset (Long)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "total_size" : 123,
  "hasNext" : true,
  "list" : [ {
    "owner" : "aeiou",
    "shared" : [ {
      "by_user_name" : "aeiou",
      "md_date" : "2000-01-23T04:56:07.000+00:00",
      "by_user" : "aeiou",
      "who" : "aeiou"
    } ],
    "like_by_me" : true,
    "owner_name" : "aeiou",
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "del" : true,
    "follow" : [ {
      "md_date" : "2000-01-23T04:56:07.000+00:00",
      "who" : "aeiou"
    } ],
    "tags" : [ {
      "md_date" : "2000-01-23T04:56:07.000+00:00",
      "name" : "aeiou",
      "md_id" : "aeiou"
    } ],
    "popularity" : "aeiou",
    "name" : "aeiou",
    "shared_to_me" : "",
    "id" : "aeiou",
    "items" : [ {
      "popularity" : "aeiou",
      "name" : "aeiou",
      "project" : "aeiou",
      "url" : "aeiou",
      "desc" : "aeiou"
    } ],
    "desc" : "aeiou",
    "follow_by_me" : ""
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

exports.rejectReview = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * by_user (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.shareAlbum = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * share (ShareHistory)
  **/
  // no response value expected for this operation
  res.end();
}

exports.tagAlbum = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * name (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.unfollowAlbum = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.updateAlbum = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * name (String)
  * desc (String)
  **/
  // no response value expected for this operation
  res.end();
}

