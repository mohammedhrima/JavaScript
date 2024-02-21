const http = require('http')

const server = http.createServer((req, res) => {
    req.url === '/' ? res.end('Welcome to our home page') :
        req.url === '/about' ? res.end("welcome to about") :
            res.end(`<h1>Oops!</h1></br> <a href="/">Back home</a>`)
})

console.log("heey");

server.listen(5000)