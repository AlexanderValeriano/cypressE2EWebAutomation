describe("Handle Tabs", () => {
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get("button[type='submit']").click();

    // Customers main menu ==> Customers
    cy.get(".btn-close").click();
    cy.get("#menu-customer>a").click();
    cy.get("#menu-customer>ul>li:first-child").click();
  });

  it("Check Number Rows & Columns", () => {});

  it("Check cell data from specific row & Column", () => {});

  it("Read all the rows & Columns data in the first page", () => {});

  it("Pagination", () => {});
});
