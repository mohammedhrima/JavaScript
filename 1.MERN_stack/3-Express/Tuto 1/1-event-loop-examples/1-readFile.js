const { readFile, writeFile, readFileSync } = require('fs')

readFile('./content/first.txt', 'utf8', (err1, res1) => {
    !err1 ? 1 && console.log("hey") : console.log(err1) && null;
    readFile('./content/second.txt', 'utf8', (err2, res2) => {
        !err2 ? 1 : console.log(err2) && null;
        writeFile('./content/result-sync.txt', `Here is teh result of ${res1} && ${res2}`, { flag: 'a' }, (err3, res3) => {
            !err3 ? 1 : console.log(err3) && null;
        })
    })
})

