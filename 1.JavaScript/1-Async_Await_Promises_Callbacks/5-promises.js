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

order(2000, () => console.log(`${stock.Fruits[0]}`))