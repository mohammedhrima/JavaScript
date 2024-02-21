const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(`method -> ${method}\nurl -> ${url}\ntime -> ${time}\n-----------------`);
    //res.send('Testing')
    next()
}

module.exports = logger