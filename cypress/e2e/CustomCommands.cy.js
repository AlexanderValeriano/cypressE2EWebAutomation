//click on link using label
//over write existing contains() command
//re-usable custom command

describe("Custom commands", () => {
  it.only("handling links", () => {
    cy.visit("https://demo.nopcommerce.com/");

    // ** Direct approach ** /
    /* cy.get(
      "div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)"
    ).click(); */
    // Using custom command
    cy.clickLink("Apple MacBook Pro 13-inch");
    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro 13-inch"
    );
  });
  it("oveerwriting existing command", () => {});
  it("Login command", () => {});
});
