// describe("Landing page successfully render", () => {
//   beforeEach(() => {
//   cy.visit("/")
//   })
  
//   it("visitors can see landing page elements", () => {
//     cy.get('[data-cy=button]').should("contain", "Login")
//     cy.get('[data-cy=button]').should("contain", "Signup")
//     cy.get('[data-cy=button]').should("contain", "Check out our spaces!")
//     cy.get('[data-cy=button]').should("contain", "Rent out your space!")
//     cy.get('[data-cy=button]').should("contain", "Home")
//     cy.get('[data-cy=button]').should("contain", "Contact Us")
//     cy.get('[data-cy=button]').should("contain", "F A Q")
//   })

//   it('visitors can navigate to landlord page', () => {
//     cy.get("[data-cy=button]").contains("Rent out your space!").click()
//     cy.get("[data-cy=title]").should("contain", "Rent my space")
//   })

//   it('visitor can navigate to listing page', () => {
//     cy.get('[data-cy=button]').contains("Check out our spaces!").click()
//     cy.get("#rent-space-title").contains("Rent your space")
//   })
// })