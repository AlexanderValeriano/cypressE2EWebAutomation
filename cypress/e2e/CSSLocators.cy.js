describe("CSSLocators", () => {
  it("cssLocators", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.get("input.search_query[name=search_query]")
      .type("t-shirts")
      .type("{Enter}");
    cy.get("span.lighter").contains("shirts"); // Assertion
  });
});
