const express = require('express');
const app = express()
let { people: peoples } = require('./data')

//Static assets (add path for static files)
app.use(express.static('./methods-public'))

//Parse form data
app.use(express.urlencoded({ extended: false }))

//parse json
app.use(express.json())

//Give permisson
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: peoples })
})

//Post to add deta
app.post('/api/people', (req, res) => {
    const { name } = req.body;
    !anme ? res.status(400).json({ success: false, msg: 'please provide name value' }) : res.status(201).json({ success: true, msg: 'name' })
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Crendentials')
})

/*
//login
app.post('/login', (req, res) => {
    //console.log(req.body);
    const { testing } = req.body
    console.log(testing);
    //testing ? res.status(200).send(`Welcome ${testing}`) : res.status(401).send("Provide a name please")
    let results = testing ? peoples.filter(people => people.name.startsWith(testing) && people) : 0;
    console.log(results);
    //res.status(200).json(result)
    if (results.length) {
        let result2 = ""
        results.map(elem => {
            result2 += `<h1>${elem.name}</h1>`
            //console.log(elem.name);
        })
        console.log(result2);
        res.status(200).send(result2)
    }
    else {
        res.status(401).send('<h1>user not found</h1>')
    }
    //res.send('POST')
})
*/

app.listen(5000, () => {
    console.log("server is listening on port 5000...\n----------------------------------------------");
})