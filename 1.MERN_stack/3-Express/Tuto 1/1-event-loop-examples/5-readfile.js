const { readFile, writeFile } = require('fs').promises;
//const util = require('util');
//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)
/*
const getText = (Path) => {
    return new Promise((resolve, reject) => {
        readFile(Path, 'utf8', (err, data) => {
            err ? reject(err) : resolve(data);
        })
    })
}
getText('./content/first.txt').then(result => console.log(result)).catch((err) => console.log(err))
*/
const start = async () => {
    try {
        let first = await readFile('./content/first.txt', 'utf8');
        let second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result2.txt', `this is result ${first} ${second}`)
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }
}

start()

