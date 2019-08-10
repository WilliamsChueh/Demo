'use strict';

exports.deleteColumnDesc = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * col (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteColumnDetail = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * head (String)
  * col (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteExpert = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * name (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteExtra = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * key (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteFile = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * fid (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteMainCol = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * col (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deletePartitionDesc = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * col (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteTag = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * name (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.downloadFile = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * fid (String)
  **/
    var examples = {};
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getColumnDescs = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "list" : [ {
    "col" : "aeiou",
    "mid" : "aeiou",
    "mdt" : "2000-01-23T04:56:07.000+00:00",
    "value" : "aeiou",
    "seq" : 123
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

exports.getColumnDetails = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "list" : [ {
    "head" : "aeiou",
    "col" : "aeiou",
    "mid" : "aeiou",
    "mdt" : "2000-01-23T04:56:07.000+00:00",
    "value" : "aeiou"
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

exports.getColumnTypes = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getDataset = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "endDate" : "aeiou",
  "docset" : [ "aeiou" ],
  "colExtra" : { },
  "project" : "aeiou",
  "maincols" : [ "aeiou" ],
  "maintainer" : "aeiou",
  "tags" : [ "aeiou" ],
  "important" : "aeiou",
  "colDesc" : { },
  "colType" : { },
  "aliMdt" : "2000-01-23T04:56:07.000+00:00",
  "popularity" : "aeiou",
  "extra" : "",
  "name" : "aeiou",
  "id" : "aeiou",
  "rowCount" : 123456789,
  "mdt" : "2000-01-23T04:56:07.000+00:00",
  "experts" : [ "aeiou" ],
  "startDate" : "aeiou",
  "desc" : "aeiou",
  "partColDesc" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getDatasets = function(args, res, next) {
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
    "endDate" : "aeiou",
    "docset" : [ "aeiou" ],
    "colExtra" : { },
    "project" : "aeiou",
    "maincols" : [ "aeiou" ],
    "maintainer" : "aeiou",
    "tags" : [ "aeiou" ],
    "important" : "aeiou",
    "colDesc" : { },
    "colType" : { },
    "aliMdt" : "2000-01-23T04:56:07.000+00:00",
    "popularity" : "aeiou",
    "extra" : "",
    "name" : "aeiou",
    "id" : "aeiou",
    "rowCount" : 123456789,
    "mdt" : "2000-01-23T04:56:07.000+00:00",
    "experts" : [ "aeiou" ],
    "startDate" : "aeiou",
    "desc" : "aeiou",
    "partColDesc" : ""
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

exports.getExperts = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "list" : [ {
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "name" : "aeiou",
    "md_id" : "aeiou"
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

exports.getExtras = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "list" : [ {
    "mid" : "aeiou",
    "mdt" : "2000-01-23T04:56:07.000+00:00",
    "value" : "aeiou",
    "key" : "aeiou"
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

exports.getFileList = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "size" : 123,
  "list" : [ {
    "filename" : "aeiou",
    "link" : "aeiou",
    "mid" : "aeiou",
    "id" : "aeiou",
    "mdt" : "2000-01-23T04:56:07.000+00:00",
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

exports.getMaincols = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "list" : [ {
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "name" : "aeiou",
    "md_id" : "aeiou"
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

exports.getPartitionDescs = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "list" : [ {
    "col" : "aeiou",
    "mid" : "aeiou",
    "mdt" : "2000-01-23T04:56:07.000+00:00",
    "value" : "aeiou"
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

exports.getSqlStmt = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "list" : [ "aeiou" ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getTags = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "list" : [ {
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "name" : "aeiou",
    "md_id" : "aeiou"
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

exports.getTraceList = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * type (String)
  * key (String)
  * offset (Long)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "list" : [ {
    "md_date" : "2000-01-23T04:56:07.000+00:00",
    "value" : "aeiou",
    "md_id" : "aeiou"
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

exports.updateColumnDetail = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * extra (Detail)
  **/
  // no response value expected for this operation
  res.end();
}

exports.updateExpert = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * expert (Expert)
  **/
  // no response value expected for this operation
  res.end();
}

exports.updateMainCol = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * extra (MainCol)
  **/
  // no response value expected for this operation
  res.end();
}

exports.uploadDoc = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * desc (String)
  * file (file)
  * fid (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "filename" : "aeiou",
  "link" : "aeiou",
  "mid" : "aeiou",
  "id" : "aeiou",
  "mdt" : "2000-01-23T04:56:07.000+00:00",
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

exports.upsertColumnDesc = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * desc (Desc)
  **/
  // no response value expected for this operation
  res.end();
}

exports.upsertExtra = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * extra (Extra)
  **/
  // no response value expected for this operation
  res.end();
}

exports.upsertFiled = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * param (FieldParam)
  **/
  // no response value expected for this operation
  res.end();
}

exports.upsertParttionDesc = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * desc (Partition)
  **/
  // no response value expected for this operation
  res.end();
}

exports.upsertTag = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * tag (Tag)
  **/
  // no response value expected for this operation
  res.end();
}

