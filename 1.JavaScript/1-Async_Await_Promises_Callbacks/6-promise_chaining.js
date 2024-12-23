let stock = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    Liquid: ["water", "ice"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) { setTimeout(() => resolve(work()), time) }
        else { reject(console.log("the shope is close")); }
    })
}

order(2000, () => console.log(`${stock.Fruits[0]} was selected`))
    .then(() => {
        return order(0, () => console.log("Production has started"))
    })
    .then(() => {
        return order(2000, () => console.log("the food was shopped"))
    })
    .then(() => {
        return order(1000, () => console.log(`${stock.Liquid[0]} and ${stock.Liquid[1]} was selected`))
    }
    )
    .then(() => {
        return order(1000, () => console.log("start the machining"))
    })
    .then(() => {
        return order(2000, () => console.log(`ice cream placed on ${stock.Holder[0]}`))
    })
    .then(() => {
        return order(3000, () => console.log(`${stock.Toppings[0]} was selected`))
    })
    .then(() => {
        return order(2000, () => console.log(`Ice cream was served`))
    })
    .catch(() => {
        console.log("Costumer left");
    })
    .finally(() => { //this line it will run wether the function execute or not
        console.log("day ended shop is closed");
    })