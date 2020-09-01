describe("Landing page successfully render", () => {
  beforeEach(() => {
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

  it('visit or can navigate to landlord page', () => {
    cy.get("#rentout-button").click()
    cy.get("#rentout-title").contains("Landlord Rent your Space")
  })

  it('visitor can navigate to listing page', () => {
    cy.get('#rent-button').click()
    cy.get("#rent-space-title").contains("Rent your space")
  })
})