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
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click();
    cy.get("input.select2-search__field").type("Peru").type("{enter}");
    cy.get("#select2-billing_country-container").should("have.text", "Peru");
  });

  it("Auto suggest dropdown", () => {
    cy.visit("https://www.wikipedia.org");
    cy.get("#searchInput").type("Delhi");
    cy.get(".suggestion-title").contains("Delhi Capitals").click();
  });
});
