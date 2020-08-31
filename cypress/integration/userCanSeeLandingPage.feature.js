describe("Landing page successfully render", () => {
  before(() => {
  cy.visit("/")
  })
  
  it("vistiors can see different elements", () => {
    cy.get("#logo").should("be.visible")
    cy.get("#login-button").should("be.visible")
    cy.get("#signup-button").should("be.visible")
    cy.get("#burger-menu").should("be.visible")
    cy.get("#rentout-button").should("be.visible")
    cy.get("#rent-button").should("be.visible")
  })
 
  it("visitors can see items on burger menu", () => {
    cy.get("#burger-menu").click()
    cy.contains("FAQs")
    cy.contains("Contact us")
  })

})