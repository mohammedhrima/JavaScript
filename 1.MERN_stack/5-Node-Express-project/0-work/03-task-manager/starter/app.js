const express = require('express');
const app = express();
const port = 3000;
//for js and css
app.use(express.static('./public'))

//links
app.get(['/', "/home"], (req, res) => {
    res.render('index.html');
    // res.send('home page')
})

















//listening
app.listen(port, () => {
    console.log(`listening to port ${port}...`);
})