/* Hello World! program in Node.js */
console.log("Hello World!");

//
var http = require("http");
var url = require("url");

/**
 * url.parse(req.url).pathname
**/
http.createServer(function (req,res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    
    //
    res.writeHead(200,{'Content-Type': 'text/plain'});
    /** If ther is page in end of url like
     *  http://localhost:8080"/"<----this one
    **/
    if(page == '/') {
        res.wirte('You\'re at the reception dest. How can I help you?');
    }
    // http://localhost:8080/basement<----this one
    else if (page == '/basement'){
        res.write('You\'re in the wine cellar. These bottles are mine!');
    }
    // http://localhost:8080/floor/1/bedroom<----this one
    else if (page == '/floor/1/bedroom'){
        res.write('Hey, this is a my private area!');
    }
    //send the HTTP header
    res.end();
    
}).listen(process.env.PORT);

console.log("Server running at http://127.0.0.1:8081");