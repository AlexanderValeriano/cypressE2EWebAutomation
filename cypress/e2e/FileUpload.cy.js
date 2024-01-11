import "cypress-file-upload";

describe("File Uploads", () => {
  it("Single File upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("oneMegaPDF.pdf");
    cy.get("#file-submit").click();
    cy.wait(3000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });
  it("File upload - Rename", () => {
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
  it("File upload - Drag and Drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("oneMegaPDF.pdf", {
      subjectType: "drag-n-drop",
    });
    cy.wait(5000);
    cy.get(
      "#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span"
    ).contains("oneMegaPDF");
    /*     cy.get("#file-submit").click();
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    cy.get("#uploaded-files").contains("myFile.pdf");
 */
  });
  it("Multiple files upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile(["oneMegaPDF.pdf", "deuxMegasPDF.pdf"]);
    cy.wait(3000);
    cy.get(":nth-child(6) > strong").should(
      "contain.text",
      "Files You Selected:"
    );
    cy.get("ul[id='fileList'] li").should("contain.text", "oneMegaPDF.pdf");
  });

  it.only("File upload - Shadow DOM", () => {
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
    );
    cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile(
      "deuxMegasPDF.pdf"
    );
    cy.wait(5000);
    cy.get(".smart-item-name", { includeShadowDom: true }).contains(
      "deuxMegasPDF.pdf"
    );
  });
});
