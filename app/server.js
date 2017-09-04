/*

Starts the server process.

*/

const app = require('./app');
const config = require('../config');

app.listen(config.server.port, function(err) {
  if (err) { return console.log(err); }

  console.log(config.name + ' listening on port ' + config.server.port + '!');
});
