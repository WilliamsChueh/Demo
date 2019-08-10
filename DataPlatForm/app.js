'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var path = require('path');
var fs = require('fs')
var yaml = require('js-yaml');
module.exports = app; // for testing

var config = {
  appRoot: __dirname, // required config
  swaggerSecurityHandlers: {
    apiKey: (req, def, scope, cb) => {
      cb();
    },
    basic: (req, def, scope, cb) => {
      cb();
    }
  }
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err; }

  app.use(require('express').static(path.join(__dirname, 'public')));

  app.use((req, res, nx) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    nx();
  });

  app.get('/myswagger', function (req, res, next) {
    let doc = yaml.safeLoad(fs.readFileSync('api/swagger/swagger.yaml', 'utf8'), { json: true });
    if (req.query && req.query.h) {
      doc.host = req.query.h;
    } else if (req.headers['host']) {
      doc.host = req.headers['host'];
    }
    if (req.query && req.query.p) {
      doc.basePath = req.query.p;
    }
    res.json(doc);
  });

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  console.log('started: http://127.0.0.1:' + port);
});
