const SayHi = (name) => {
    return new Promise((resolve, reject) => {
        name.startsWith("M") ? resolve("yes") : reject("no");
    })
}

SayHi("Mohammed").then(res => console.log(res)).catch(err => console.log(err))

async function AsyncWay() {
    try {
        let res = await (SayHi("Mohammed"));
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
AsyncWay()
