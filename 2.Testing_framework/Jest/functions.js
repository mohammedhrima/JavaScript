const { default: axios } = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = {
            firstName: "Mohammed",
            lastName: "Hrima",
        };
        return user;
    },
    fetchUser: () =>
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => res.data)
            .catch((err) => "error"),
};

module.exports = functions;
