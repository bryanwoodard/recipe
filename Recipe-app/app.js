// node Projects/Recipe-app/app.js
//http://bwteal.com:8080/

const http = require("http");
const fs = require('fs');
var htmlHeaders = {
    'Content-Type': 'text/html; charset=utf-8'
};
var jsHeaders = {
    'Content-Type': 'text/javascript; charset=utf-8'
};
var querystring = require("querystring");
var path = require("path");

//Testing Creation of server
http.createServer(function (req, res) {
    if (req.url == "/") {
        res.writeHead(200, htmlHeaders);
        var index_page = fs.readFileSync(path.resolve(__dirname, "./index.html"));
        res.write(index_page);
        res.end();
    } else if (req.url.includes("js/client/")) {
        res.writeHead(200, jsHeaders);
        var js = fs.readFileSync(path.resolve(__dirname, `./${req.url}`));
        console.log(req.url);
        res.write(js);
        res.end();
    } else if (req.url.split("/")[1] == "results.html" && req.method == "POST") {
        var body = "";
        var post = {};        
        
        req.on("data", (data)=> {
          body += data;
          ;
        });
        
        req.on("end", ()=> {
          post = querystring.parse(body);
          console.log(post);
          res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
          res.end(JSON.stringify(post));
        });
    }
}).listen("8080");

console.log("Server Running and listening, Bitch");