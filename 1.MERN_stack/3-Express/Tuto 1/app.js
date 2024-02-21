var http = require('http')
var fs = require('fs')

http.createServer((req, res) => {
    //const txt = fs.readFileSync('./content/big.txt', 'utf-8')
    //res.end(txt)

    const filestream = fs.createReadStream('./content/big.txt', 'utf-8')
    filestream.on('open', (txt) => {
        filestream.pipe(res) // DevTools -> Network -> localhost -> Transfer-Encoding : chunked
    })
    filestream.on('error', (err) => {
        res.end(err)
    })

}).listen(5000)