describe("Handle Tabs", () => {
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get("button[type='submit']").click();

    // Customers main menu ==> Customers
    cy.get(".btn-close").click();
    cy.get("#menu-customer>a").click();
    cy.get("#menu-customer>ul>li:first-child").click();
  });

  it.skip("Check Number Rows & Columns", () => {
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should(
      "have.length",
      10
    );
    cy.get(
      'table[class="table table-bordered table-hover"]>thead>tr>td'
    ).should("have.length", 7);
  });

  it.skip("Check cell data from specific row & Column", () => {
    cy.get(
      'table[class="table table-bordered table-hover"]>tbody>tr:nth-child(2)>td:nth-child(3)'
    ).contains("olaola@das.com");
  });

  it.skip("Read all the rows & Columns data in the first page", () => {
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(
      ($row, index, $rows) => {
        //** with wrap give us one row and we use a submethod within for get all the TDs */
        cy.wrap($row).within(() => {
          cy.get("td").each(($column, index, $columns) => {
            cy.log($column.text());
          });
        });
      }
    );
  });

  it.only("Pagination", () => {
    // Using substring and indexOf methods
    //** Find total number of pages **/
    /* let totalPages;
    cy.get(".col-sm-6.text-end").then((el) => {
      let textValue = el.text();
      console.log(textValue); // Showing 1 to 10 of 17400 (1740 Pages)
      totalPages = textValue.substring(
        textValue.indexOf("(") + 1,
        textValue.indexOf("Pages") - 1
      );
      console.log(totalPages);
      cy.log("Total number of pages in a table ====>" + totalPages);
    }); */

    let totalPages = 5;

    for (let pag = 1; pag < totalPages; pag++) {
      if (totalPages > 1) {
        cy.log("****** Active page is ===" + pag);
        cy.get("ul.pagination>li:nth-child(" + pag + ")").click();
        cy.wait(1000);
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(
          ($row, index, $rows) => {
            cy.wrap($row).within(() => {
              cy.get("td:nth-child(3)").then((el) => {
                cy.log(el.text()); // print email
              });
            });
          }
        );
      }
    }
  });
});
