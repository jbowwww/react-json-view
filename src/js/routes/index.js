
const fs = require("fs");
const debug = require('debug')('routes/index.js');
const { inspect } = require('util');

const PATHS = require('../paths.js');

module.exports = router;

function router(app, server, compiler) {
  debug(`router init`);//: app=${inspect(app)}\nrouter: server=${inspect(server)}\nrouter: compiler=${inspect(compiler)}`);
  app.use(function (req, res, next) {
    debug(`router`);//: req=${inspect(req)}`);
    next();
  });
  app.get('/data', function(req, res) {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.set("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
    res.json( fs.existsSync(PATHS.data + '/data.json')
     ?  require(PATHS.data + '/data.json')
     :  require(PATHS.data + '/default-data.json'));
    // res.end();
  });
}
