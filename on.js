/**
 * $(canvaas).on("mouseleave",function(){...})
 * example
 * server.on('close', function(){
     
 }
 **/
 
 var http = require("http");
 
//  var server = http.createServer(function(req, res){
//      res.writeHead(200);
//      res.end("Hello World");
     
//  });
 //diiffer way to wirte server on.
 var server = http.createServer();
 server.on('request',function(req, res){ 
     res.writeHead(200);
     res.end("This is different function\n Hello world");
 });
 //Do something when the server is stopped
 //
 server.on('close', function(){
     console.log('Goodbay');
 });
 
server.listen(process.env.PORT);

//if i close server by Ctrl + c the close function will not show.
//set 20 secound to close down the server..
setTimeout(function(){
     server.close();
 },20000);
 
 //server.close;