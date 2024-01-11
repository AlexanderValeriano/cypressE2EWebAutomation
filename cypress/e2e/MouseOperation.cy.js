import "cypress-iframe";
require("@4tw/cypress-drag-drop");

describe("Mouse operations", () => {
  it.skip("MouseHover", () => {
    cy.visit("https://demo.opencart.com/");
    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("not.be.visible");
    cy.get(".nav>:nth-child(1)>.dropdown-toggle").trigger("mouseover").click();
    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("be.visible");
  });

  it("Right click", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    //**  Approach 1   */

    /* cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
    cy.get(".context-menu-icon-copy").should("be.visible");
 */
    // */Approach 2

    cy.get(".context-menu-one.btn.btn-neutral").rightclick();
    cy.get(".context-menu-icon-copy").should("be.visible");
  });

  it("Double click", () => {
    cy.visit(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3"
    );
    cy.get("#accept-choices").click();
    cy.frameLoaded("#iframeResult"); // Load the frame

    //**  Approach 1 - trigger()  **//

    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .trigger("dblclick");
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");

    //**  Approach 2 - bdlclick()  **//

    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .dblclick();
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");
  });

  it.only("Drag and Drop", () => {
    cy.visit(
      "http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    );
    // **  Approach 1 - install npm install plugin drag & drop  **//
    cy.get("#box6").should("be.visible");
    cy.get("#box106").should("be.visible");
    cy.wait(3000);
    // Even the element is hiden for perform the action we put {force:true}
    cy.get("#box6").drag("#box106", { force: true });
    // cy.get("#box6").drag("#box106");
  });
});
