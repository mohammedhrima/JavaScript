let stock = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    Liquid: ["water", "ice"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        is_shop_open ? setTimeout(resolve, ms) : reject(console.log("shop is close"))
    })
}

async function kitchen() {
    try {
        await time(7000);
        console.log(`${stock.Fruits[0]}`);
        await time(5000);
        console.log("the task 2");;
        await time(8000);
        console.log("task 3");
        await time(6000);
        console.log("the task 4");
    }
    catch (err) {
        console.log("costumer left");
    }
    finally {
        console.log("day ended");
    }
}

kitchen();