import "cypress-file-upload";

describe("File Uploads", () => {
  it("Single File upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("oneMegaPDF.pdf");
    cy.get("#file-submit").click();
    cy.wait(3000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });
  it.only("File upload - Rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile({
      filePath: "oneMegaPDF.pdf",
      fileName: "myFile.pdf",
    });
    cy.get("#file-submit").click();
    cy.wait(3000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    cy.get("#uploaded-files").contains("myFile.pdf");
  });
  it("Single File upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload");
  });
  it("Single File upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload");
  });
});
