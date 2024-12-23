let stock = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    Liquid: ["water", "ice"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true;

async function order() {
    try {
        await abc; //fake function
    }
    catch (err) {
        console.log("this function doesn't exist\n", err);
    }
    finally {
        console.log("code ending");
    }
}

order()