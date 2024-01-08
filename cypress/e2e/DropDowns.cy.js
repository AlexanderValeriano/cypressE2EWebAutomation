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

  it.skip("Auto suggest dropdown", () => {
    cy.visit("https://www.wikipedia.org");
    cy.get("#searchInput").type("Delhi");
    cy.get(".suggestion-title").contains("Delhi Capitals").click();
  });

  it("Dynamic dropdown", () => {
    cy.visit("https://www.google.com");
    cy.get("#L2AGLb > .QS5gu").click();
    cy.get("#APjFqb").type("cypress automation");
    cy.get("div.wM6W7d>span").should("have.length", 13);
    cy.get("div.wM6W7d>span").each(($el, i, $list) => {
      if ($el.text() == "cypress automation tutorial") {
        cy.wrap($el).click();
      }
    });
    cy.get("#APjFqb").should("have.value", "cypress automation tutorial");
  });
});
