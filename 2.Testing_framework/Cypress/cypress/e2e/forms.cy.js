describe("form tests", () => {
    beforeEach(() => {
        cy.visit("/forms");
    });
    it("Test subscribe form", () => {
        cy.contains(/testing forms/i);
        // will search for input and put the text on it
        // method 1
        // cy.getDataTest("subscribe-form").find("input").type("mohammedxhrima@gmail.com");
        /// method 2
        cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
        cy.get("@subscribe-input").type("mohammedxhrima@gmail.com");
        //////////////////////////////////////////////////////////////////////////////////////
        cy.contains("Successfully subbed: mohammedxhrima@gmail.com!").should("not.exist");
        cy.getDataTest("subscribe-button").click();
        cy.contains("Successfully subbed: mohammedxhrima@gmail.com!").should("exist");
        //////////////////////////////////////////////////////////////////////////////////////
        cy.wait(3000);
        cy.contains("Successfully subbed: mohammedxhrima@gmail.com!").should("not.exist")
        //////////////////////////////////////////////////////////////////////////////////////
        cy.get("@subscribe-input").type("mohammedxhrima@gmail.com")
        cy.getDataTest("subscribe-button").click()
    });
});
