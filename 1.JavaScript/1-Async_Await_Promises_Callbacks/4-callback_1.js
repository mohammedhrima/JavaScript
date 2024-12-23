/*let stock = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    Liquid: ["water", "ice"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
}

let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stock.Fruits[Fruit_name]} was selected`)
    }, 2000);
    call_production();
}

let production = () => {
    setTimeout(() => {
        console.log("production has started");
        setTimeout(() => {
            console.log("the fruit has chopped");
            setTimeout(() => {
                console.log(`add ${stock.Liquid[0]} and ${stock.Liquid[1]}`);
                setTimeout(() => {
                    console.log("start the machine");
                    setTimeout(() => {
                        console.log("select Container");
                        setTimeout(() => {
                            console.log("select Toppings");
                            setTimeout(() => {
                                console.log("Serve Ice Cream");
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            })
        }, 1000)
    }, 2000)
};

order(0, production)*/
let func = (num) => {
    num > 0 ? setTimeout(() => func(num - 1), 3000) && console.log(num) : 0;
}

func(7)