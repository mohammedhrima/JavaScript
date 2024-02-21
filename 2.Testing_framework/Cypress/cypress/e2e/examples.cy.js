describe("Various examples", () => {
    beforeEach(() => {
        cy.visit("/examples");
    });
    it("multi-page testing", () => {
        cy.getDataTest("nav-why-cypress").click();
        cy.location("pathname").should("equal", "/");

        cy.getDataTest("nav-overview").click();
        cy.location("pathname").should("equal", "/overview");
    });
    it("intercepts", () => {
        cy.intercept("POST", "http://localhost:3000/examples", {
            // get data from exmaple.json file
            // in fixture folder
            fixture: "example.json",
        });
        cy.getDataTest("post-button").click();
    });
    it("grudges", () => {
        // cy.pause();
        cy.contains("Add Some Grudges");

        cy.getDataTest("grudge-list").within(() => {
            cy.get("li").should("have.length", 0);
        });

        cy.getDataTest("clear-button").should("not.exist");

        cy.getDataTest("grudge-list-title").should("have.text", "Add Some Grudges");

        cy.getDataTest("grudge-input").within(() => {
            // print some grude in input field
            cy.get("input").type("some grude");
        });
        cy.getDataTest("add-grudge-button").click();

        cy.getDataTest("grudge-list").within(() => {
            cy.get("li").should("have.length", 1);
        });

        cy.getDataTest("grudge-list-title").should("have.text", "Grudges");


        cy.getDataTest("grudge-input").within(() => {
            // print some grude in input field
            cy.get("input").type("second grudge");
        });
        cy.getDataTest("add-grudge-button").click();

        cy.getDataTest("grudge-list").within(() => {
            cy.get("li").should("have.length", 2);
            cy.get("li").its(1).should("contains.text", "second grudgeX");
        });

        cy.getDataTest("grudge-list").within(() => {
            cy.get("li")
                .its(0)
                .within(() => {
                    cy.get("button").click();
                });
        });
        cy.getDataTest("grudge-list").within(() => {
            cy.get("li").should("have.length", 1);
        });

        cy.getDataTest("clear-button").click();
        cy.getDataTest("grudge-list").within(() => {
            cy.get("li").should("have.length", 0);
        });
    });
});
