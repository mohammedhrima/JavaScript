+ generative function
+ regular expression

+ cypress:
    + npx cypress open
    + visit url:
        - cy.visit("http://localhost:3000/fundamentals")
    + get dom element: (by className)
        - cy.get('[data="container"]')
    + check if that dom has value:
        - cy.get('[data="container"]').shoulds("contains.text", "a value");
        - cy.get('[data="container"]').contains("a value");
    + set base url:
        - go to cypress.config.js
        - in e2e: add  baseUrl: "http://localhost:3000",
    + to use json files:
        - put them in fixtures folder
