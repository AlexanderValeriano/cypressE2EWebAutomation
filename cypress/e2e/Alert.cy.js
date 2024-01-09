describe("Alerts", () => {
  // Javascript Alert : It will be have some text and Ok button
  it("JS Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();
    cy.on("window:alert", (alertWindow) => {
      expect(alertWindow).to.contains("I am a JS Alert");
    });
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });
});
