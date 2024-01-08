describe("handle dropdowns", () => {
  it.skip("Dropdown with select", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#dropdown-class-example").should("be.visible");
    cy.get("#dropdown-class-example")
      .select("Option1")
      .should("have.value", "option1");
  });
  it.skip("Dropdown with select", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#dropdown-class-example").should("be.visible");
    cy.get("#dropdown-class-example")
      .select("Option1")
      .should("contain", "Option1");
  });

  it.skip("Dropdown without select", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#dropdown-class-example").should("be.visible");
    cy.get("#dropdown-class-example")
      .select("Option1")
      .should("contain", "Option1");
  });
});
