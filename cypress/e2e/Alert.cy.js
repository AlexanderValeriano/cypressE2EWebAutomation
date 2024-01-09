describe("Alerts", () => {
  // Javascript Alert : It will be have some text and Ok button
  it.skip("JS Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();
    cy.on("window:alert", (alertWindow) => {
      expect(alertWindow).to.contains("I am a JS Alert");
    });

    // alert window automatically closed by cypress
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });
  //*** 1) Javascript Alert : It will be have some text and Ok button

  it.skip("JS Confirm alert - OK", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (confirmWindow) => {
      expect(confirmWindow).to.contains("I am a JS Confirm");
    });
    // alert window automatically closed by cypress

    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  //*** 2) Javascript Confirm Alert : It will be have some text and Cancel and Ok buttons

  it.skip("JS Confirm alert - Cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (confirmWindow) => {
      expect(confirmWindow).to.contains("I am a JS Confirm");
    });

    cy.on("window:confirm", () => false);
    // cypress automatically closed alert window by using ok button default

    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  //*** 3)Javascript Prompt Alert: It will be have some text with a text box for user input along with 'Ok' button  **/

  it("JS Prompt alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("AlexanderValeriano");
    });
    cy.get("button[onclick='jsPrompt()']").click();
    // cy.on("window:prompt", () => false);

    // cypress will  automatically closed promt alert it will use Ok button by default

    cy.get("#result").should("have.text", "You entered: AlexanderValeriano");
  });

  //*** 4) Authenticated Alert  **/

  it.only("Authenticated Alert", () => {
    //   Approach 1
    /*       cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: { username: "admin", password: "admin" },
    });
    cy.get("div[class='example'] p").should("have.contain", "Congratulations"); */

    //   Approach 2

    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("div[class='example'] p").should("have.contain", "Congratulations");
  });
});
