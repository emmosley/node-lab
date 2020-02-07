"use strict";

const http = require("http");

const facts = require("./facts");


function getRandom(line) {
    return line[Math.floor(Math.random()*line.length)];
}
http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain"});
    res.write(getRandom(facts.facts))
    res.end();
}).listen(3000);