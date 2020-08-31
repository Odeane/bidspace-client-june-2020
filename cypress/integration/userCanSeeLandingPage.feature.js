describe("Visitors can see landing page", () => {
  before(() => {
  cy.visit("/")
  })
  
  it("and choose whether to rent out or rent a space", () => {
    cy.get("#logo").should("be.visible")
    cy.get("#login-button").should("be.visible")
    cy.get("#signup-button").should("be.visible")
    cy.get("hamburger-menu").should("be.visble")
    cy.get("#rentout-button").should("be.visible")
    cy.get("#rent-button").should("be.visible")
  })
})