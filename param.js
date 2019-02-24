/* Hello World! program in Node.js */
console.log("Hello World!");

//
var http = require("http");
var url = require("url");
var querystring = require("querystring");
/**
 * url.parse(req.url).query
 * =string
 * is querystring.pars(url.parse(req.url).query)['string여기다가 아무거나']
**/
http.createServer(function (req,res) {
    
    
    res.writeHead(200,{'Content-Type': 'text/plain'});
    //in side url 
    var params = querystring.parse (url.parse(req.url).query);
    /** if there is String in url like end of address
        ?firstname=Hyun&lastname=Chun
        youy will see the what inside on if statement.
    **/
    if ('firstname' in params && 'lastname' in params){
        res.write('Your name is  ' +params['firstname'] + ' ' + params['lastname']);
    }
    //if there nothing it will print this.
    else{
        res.write('You do have a first name and last name, don\'t you?');
    }
    //send the HTTP header
    res.end();
    
}).listen(process.env.PORT);

console.log("Server running at local port");