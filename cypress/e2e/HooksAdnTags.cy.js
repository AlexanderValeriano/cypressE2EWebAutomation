describe("MyTestSuite", () => {
  before(() => {
    cy.log("*** Launch App ***");
  });
  after(() => {
    cy.log("*** Close App ***");
  });
  beforeEach(() => {
    cy.log("*** Login ***");
  });
  afterEach(() => {
    cy.log("*** Logout ***");
  });

  it("search", () => {
    cy.log("*** Searching ***");
  });

  it.skip("advanced search", () => {
    cy.log("*** advanced search ***");
  });

  it.only("listing products", () => {
    cy.log("*** listing products ***");
  });
});
