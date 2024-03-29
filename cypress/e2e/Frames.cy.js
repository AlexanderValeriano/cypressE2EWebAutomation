import "cypress-iframe";

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
  it("approach 2 - by using custom command", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.getIframe("#mce_0_ifr")
      .clear()
      .type("Welcome Alexander VALERIANO {ctrl+a}");
    cy.get("button[aria-label='Bold']").click();
  });

  it("approach 3 - by using cypress plugin", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.frameLoaded("#mce_0_ifr"); // Load the frame
    cy.iframe("#mce_0_ifr")
      .clear()
      .type("Excelente cabezon Pablito hijito {ctrl+a}");
    cy.get("button[aria-label='Bold']").click();
  });
});
