describe("mySuite", () => {
  it("NavigationsTest", () => {
    cy.visit("https://demo.opencart.com/");
    cy.title().should("eq", "Your Store"); // Home page
    cy.get(":nth-child(7) > .nav-link").click();
    cy.get("div[id='content'] h2").should("have.text", "Cameras"); // cameras page
    cy.go("back");
    cy.title().should("eq", "Your Store"); // go back to home

    cy.go("forward");
    cy.get("div[id='content'] h2").should("have.text", "Cameras"); //cameras

    cy.go(-1);
    cy.title().should("eq", "Your Store"); // Home page

    cy.go(1); // cameras
    cy.get("div[id='content'] h2").should("have.text", "Cameras"); //cameras

    cy.reload();
  });
});
