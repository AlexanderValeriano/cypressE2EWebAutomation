# cypressE2EWebAutomation

Update with Pavan lecture 2023
Hello world E2E testing 2024
TestFor chapter3

# Hierarchie in Cypress

testSuite ==> Test Case ==> Test Steps

Spec File (cy.js) => describe blocks (test suites) ==> it blocks (tests)

# Locators

XPath

cy.get(Locator)

# CSS Selector

TAG is Optionnal
tag#id
tag.Class
tag[attribute='value']
tag.class[attribute='value']
Exemples:
#search_query_top
.search_query
input#search_query_top
input[name="search_query"]
input.search_query[name="search_query"]

# XPATH

sudo npm install -D cypress-xpath
Add entry in command.js
/// <reference types="cypress-xpath" />

Add e2e.js
require("cypress-xpath");

# Cypress Assertions

1. Implicit assertions

   should
   and

eq
contain
include
exist
have.lenght
have.value
etc...

2. Explicit Assertions

   expect more use in BDD
   assert more use in TDD
