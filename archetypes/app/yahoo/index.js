
/*jslint nomen:true, node:true*/

var http = require('http'),
    app = require('./app');

/**
 * @token given by manhattan and used to emit that the app is ready
 */
module.exports = function(config, token) {
    // send the application to Manhattan along with the token
    process.emit("application-ready", token, http.createServer(app));
};

