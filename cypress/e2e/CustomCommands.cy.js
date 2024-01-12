//click on link using label
//over write existing contains() command
//re-usable custom command

describe("Custom commands", () => {
  it("handling links", () => {
    cy.visit("https://demo.nopcommerce.com/");

    // ** Direct approach ** /
    /* cy.get(
      "div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)"
    ).click(); */
    // Using custom command
    cy.clicklink("Apple MacBook Pro 13-inch");
    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro 13-inch"
    );
  });
  it("overwriting existing command", () => {
    cy.visit("https://demo.nopcommerce.com/");

    // Using custom command
    cy.clicklink("APPLE MACBOOK PRO 13-inch");
    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro 13-inch"
    );
  });
  it.only("Login command", () => {
    cy.visit("https://demo.nopcommerce.com/");

    // Login
    cy.clicklink("Log in"); // custom command
    cy.wait(3000);
    cy.loginapp("perou.hexagone@gmail.com", "test123"); // custom command

    cy.get(".ico-account").should("have.text", "My account");
    // Search product
  });
});
