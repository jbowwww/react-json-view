
const fs = require("fs");
const { inspect } = require('util');

const PATHS = require('../paths.js');

module.exports = router;

function router(app, server, compiler) {
  console.log(`router: app=${inspect(app)}\nrouter: server=${inspect(server)}\nrouter: compiler=${inspect(compiler)}`);
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
