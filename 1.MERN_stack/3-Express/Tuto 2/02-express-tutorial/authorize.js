const authorize = (req, res, next) => {
    const { user } = req.query;
    user === 'mohammed' ? req.user = { name: 'mohammed', id: 3 } && next() : res.status(401).send('Unauthorized')
    console.log('authorize');
    next()
}

module.exports = authorize