/// <reference types="cypress" />

describe("Check UI elements", () => {
  it("Checkin Radio Buttons", () => {
    cy.visit("https://demowebshop.tricentis.com/");

    // Visibility of radio buttons
    cy.contains("Excellent").should("be.visible");
    cy.contains("Good").should("be.visible");
    cy.contains("Poor").should("be.visible");
    cy.contains("Very bad").should("be.visible");
    // Selecting Radio buttons
    cy.get("#pollanswers-4").check().should("be.checked");
    cy.contains("Excellent").should("not.be.checked");
    cy.get("#vote-poll-1").click();
    // cy.get("block-poll-vote-error-1");
  });

  it("CheckBox", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.get("#user_login").type("username");
    cy.get("#user_password").type("password");
    cy.get("input#user_remember_me").should("be.visible").check();
    cy.get("input.btn[name='submit']").click();
  });

  it("CheckBoxPage2", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // Selecting and unselecting check boxes
    cy.get("#checkBoxOption1").should("be.visible");
    cy.get("#checkBoxOption1").check().should("be.checked");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    // Selecting all the check boxes

    cy.get("input[type='checkbox']").check().should("be.checked");
    cy.get("input[type='checkbox']").uncheck().should("not.be.checked");

    // Select the first and last checkbox

    cy.get("input[type='checkbox']").first().check().should("be.checked");
    cy.get("input[type='checkbox']").last().check().should("be.checked");
  });
});
