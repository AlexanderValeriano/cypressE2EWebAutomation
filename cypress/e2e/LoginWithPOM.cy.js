import Login from "../support/PagoObjects/LoginPageSeparateElements";

describe("POM", () => {
  it("LoginTest", () => {
    // General approach
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      "Dashboard"
    );
  });

  it.only("LoginTestWithPOM", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    const login = new Login();

    login.setUsername("Admin");
    login.setPassword("admin123");
    login.clickSubmit();
    login.verifyLogin();
  });
});
