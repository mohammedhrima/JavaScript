let stock = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    Liquid: ["water", "ice"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true;

let choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                console.log("Which topping would you like ?")
            )
        }, 3000)
    })
}

async function kitchen() {
    console.log("A");
    console.log("B");
    console.log("C");
    await choice();
    console.log("D");
    console.log("E");
}

kitchen();

console.log("cleaning the dishes");
console.log("cleaning the tables");
console.log("taking others orders");