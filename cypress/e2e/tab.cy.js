describe("Handle tabs", () => {
  it.only("Approach 1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example>a").invoke("removeAttr", "target").click();
  });
});
