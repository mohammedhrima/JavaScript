var http = require('http')
var fs = require('fs')

http.createServer((req, res) => {
    const txt = fs.readFileSync('./content/big.txt', 'utf-8')
    res.end(txt)
}).listen(5000)