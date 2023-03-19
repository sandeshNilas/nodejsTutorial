// console.log("This is the first app in node");


var http = require('http');

var dt = require('./date');


// this module break the url in readable file 
var url =  require('url');


// this is how we create the server in node
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'}); // this will say response the document as html type 



    // take the url as argument 
    res.write(req.url);


    var q = url.parse(req.url, true).query;
    var text =  q.month + " " + q.year;
    // console.log(q);

    // res.write("The dtae and time are currently:" + dt.myDateTime());
    
    
    res.end(text);// it ends the response 

}).listen(8080);