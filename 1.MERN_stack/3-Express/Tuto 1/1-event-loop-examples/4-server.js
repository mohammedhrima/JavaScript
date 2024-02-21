const http = require('http')


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('home page')
    }
    if (req.url === '/about') { res.end('About page') }
    res.end('Error Page')
})

server.listen(8000, () => {
    console.log("server is listening");
    //console.log([...Array(5).keys()]);
})
