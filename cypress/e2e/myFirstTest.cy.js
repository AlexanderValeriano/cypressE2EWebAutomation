/// <reference types="cypress" />

//** describe comes from mocha  **//

describe("first test suite", () => {
  it("test1", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("eq", "OrangeHRM");
  });
  it("test2", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("eq", "OrangeHRM123");
  });
  it("test3", () => {
    expect(true).to.equal(true);
  });
});
