describe("Fundamentals test", () => {
    // before each will execute the lines bellow befor each onr
    beforeEach(() => {
        cy.visit("/fundamentals");
    });
    it("Contains correct header text", () => {
        // cy.get('[data-test="fundamentals-header"]').should("contains.text", "Testing Fundamentals");
        // check /support/commands.js
        // getDataTest function
        cy.getDataTest("fundamentals-header").should("contains.text", "Testing Fundamentals");
    });
    // to run only one test do it.only
    it("Accordion works correctly", () => {
        cy.contains("Within your describe block, you will also have it blocks").should("not.be.visible");
        // cy.get('[data-test="accordion-item-2"]').click().pause(); // to pause
        cy.get('[data-test="accordion-item-2"] div[role="button"]').click();
        cy.contains("Within your describe block, you will also have it blocks").should("be.visible");
        cy.get('[data-test="accordion-item-2"] div[role="button"]').click();
        cy.contains("Within your describe block, you will also have it blocks").should("not.be.visible");
    });
});
