describe("Handle tabs", () => {
  it("Approach 1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); // Parent tab
    cy.get(".example>a").invoke("removeAttr", "target").click(); // clicking on link
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.wait(3000);
    // operations
    cy.go("back"); // back to the parent tab
  });

  //** There is a limit when you work with different domaines or sub domaines */
  it.only("Approach 2", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); // Parent tab
    cy.get(".example>a").then((el) => {
      const url = el.prop("href");
      cy.visit(url);
    });
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.wait(1000);
    // operations
    cy.go("back"); // back to the parent tab
  });
});
