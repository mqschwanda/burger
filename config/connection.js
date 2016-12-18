// require mysql and configuration function
var mysql = require('mysql');
var Configurable = require('configurable');
// object to be configured
var config = {};
// returns the object with new constructor prototypes
Configurable(config);
/****
  object now has the following prototypes:
    .get(name)
    .set(name, val) or .set(obj)
    .enable(name) or .disable(name)
    .enabled(name) & .disabled(name)
****/
// CONFIGURE HERE:
config.set('host','o61qijqeuqnj9chh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com')
      .set('user','ju3nkt2ayiqsgfgd')
      .set('password','qeziufb0xx8ai90g')
      .set('database','burgers_db');
// END: configuration
// configure the database with the object just created
var connection = mysql.createConnection(config.settings);
// connect to the database
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('\n==== mySQL ====\nCONNECTED TO DB: '+connection.config.database+'\n        ON PORT: '+connection.config.port+'\n        WITH ID: '+connection.threadId);
});
// export connection
module.exports = connection;
