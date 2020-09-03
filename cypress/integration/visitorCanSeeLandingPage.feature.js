describe("Landing page successfully render", () => {
  beforeEach(() => {
  cy.visit("/")
  })
  
  it("vistiors can see different elements", () => {
    cy.get('#logo').should("be.visible")
    cy.get('[data-cy=button]').should("contain", "Login")
    cy.get('[data-cy=button]').should("contain", "Signup")
    cy.get('#burger-menu').should("be.visible")
    cy.get('[data-cy=button]').should("contain", "Rent a space!")
    cy.get('[data-cy=button]').should("contain", "Rent out a space!")
  })
 
  it("visitors can see items on burger menu", () => {
    cy.get('#burger-menu').click()
    cy.get('[data-cy=button]').should("contain", "FAQs")
    cy.get('[data-cy=button]').should("contain", "Contact us")
  })

  it('visit or can navigate to landlord page', () => {
    cy.get('[data-cy=button]').contains("Rent out a space!").click()
    cy.get("#rentout-title").contains("Landlord Rent your Space")
  })

  it('visitor can navigate to listing page', () => {
    cy.get('[data-cy=button]').contains("Rent a space!").click()
    cy.get("#rent-space-title").contains("Rent your space")
  })
})