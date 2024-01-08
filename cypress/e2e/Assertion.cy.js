describe("Assertions demo", () => {
  it("Implicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    //** Should And  */
    /*     cy.url().should("include", "orangehrmlive.com");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.url().should("contain", "orangehrm"); */

    /*    cy.url()
      .should("include", "orangehrmlive.com")
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .should("contain", "orangehrm"); */

    cy.url()
      .should("include", "orangehrmlive.com")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrm")
      .and("not.contain", "alexander");

    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("include", "HRM");

    cy.get('img[alt="company-branding"]')
      .should("be.visible") // logo previsible
      .and("exist"); //logo exist;

    //**  Capture all the links in the website  **//

    cy.xpath("//a").should("have.length", "5"); // Number of links;
    cy.get("input[placeholder='Username']").type("Admin"); // Provide the value into the box
    cy.get("input[placeholder='Username']").should("have.value", "Admin"); // value
  });

  it("Explicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("input[placeholder='Username']").type("Admin"); // Provide the value into the box
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();

    //***  BDD Assertions using Javascript **//
    let expectedName = "a v";

    cy.get(".oxd-userdropdown-tab").then((el) => {
      let actualName = el.text();

      // BDD Style
      /* expect(actualName).to.equal(expectedName);
      expect(actualName).to.not.equal(expectedName);
 */
      // TDD Style

      assert.equal(actualName, expectedName);
      //   assert.notEqual(actualName, expectedName);
    });
  });
});
