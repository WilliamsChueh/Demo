'use strict';

exports.getVersionInfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "msg" : "aeiou",
  "searchLink" : "aeiou",
  "ver" : "aeiou",
  "docLink" : "aeiou",
  "datetime" : "2000-01-23T04:56:07.000+00:00",
  "tagLink" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.login = function(args, res, next) {
  /**
   * parameters expected in the args:
  * loginInfo (LoginReq)
  **/
    var examples = {};
  examples['application/json'] = {
  "legacy_token" : "aeiou",
  "me" : {
    "domain" : "aeiou",
    "name" : "aeiou",
    "userId" : "aeiou",
    "workId" : "aeiou"
  },
  "token" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

