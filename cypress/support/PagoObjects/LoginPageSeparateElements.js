export default class Login {
  // Second approach separating elements from the methods
  txtUserName = "input[placeholder='Username']";
  txtPassword = "input[placeholder='Password']";
  btnSubmit = "button[type='submit']";
  labelMessage = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
  setUsername(username) {
    cy.get(this.txtUserName).type(username);
  }
  setPassword(password) {
    cy.get(this.txtPassword).type(password);
  }
  clickSubmit() {
    cy.get(this.btnSubmit).click();
  }
  verifyLogin() {
    cy.get(this.labelMessage);
  }
}
