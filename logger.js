var url ='http://';

function log(message) {
    // Send an HTTP request
    console.log(message)
}

module.exports.log = log;

require("./logger"); 