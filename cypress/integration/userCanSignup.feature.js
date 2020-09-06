describe("user can Sign up", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth",
      response: "fixture:signup_response.json" 
    })
    cy.visit("/")
  })
  it("by registrating with valid credentials", () => {
    cy.get("#Signup").click();
    cy.get('[cy-data=form]').within(() => {
      cy.get('[cy-data=email]').type("user@mail.com");
      cy.get('[cy-data=password]').type("password");
      cy.get('[cy-data=confirm-password]').type("password")
      cy.get(['cy-data=submit']).should("contain", "Signup").click();
    });
  })
})