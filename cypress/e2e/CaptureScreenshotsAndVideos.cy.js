describe("mysuite", () => {
  it("Capture screenshots & Videos", () => {
    cy.visit("https://demo.opencart.com/");
    /* cy.screenshot("homepage");
    cy.wait(5000);
    cy.get("#logo").screenshot("logo"); */

    // ** Autolatically capture screenshot & video on failure - only when on execute through terminal

    cy.get("li:nth-child(7) a:nth-child(1)").click(); // cameras
    cy.get("div[id='content'] h2").should("have.text", "Tablets");
  });
});
