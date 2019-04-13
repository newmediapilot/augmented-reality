let secret = "your_secret_here";
let repo = "/home/bitnami/htdocs";
let http = require('http');
let crypto = require('crypto');
const exec = require('child_process').exec;
http.createServer(function (req, res) {
    req.on('data', function (chunk) {
        if (req.headers['x-hub-signature'] === secret) {
            exec('cd ' + repo + ' && npm run update');
        }
    });
    res.end();
}).listen(8080);