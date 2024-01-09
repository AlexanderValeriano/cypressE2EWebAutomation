describe("handling frames", () => {
  it("approach 1", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);
    //  Select all the text
    iframe.clear().type("Welcome Alexander VALERIANO {ctrl+a}");
    cy.get("button[aria-label='Bold']").click();
  });
});
