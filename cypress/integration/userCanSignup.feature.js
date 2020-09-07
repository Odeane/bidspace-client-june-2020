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
    cy.get("[data-cy=button]").contains("Signup").click();
    cy.get("[data-cy=sign-up]").within(() => {
      cy.get("[data-cy=email]").type("user@mail.com");
      cy.get("[data-cy=password]").type("password");
      cy.get("[data-cy=password-confirmation]").type("password");
      cy.get("[data-cy=button]").contains("Sign up now!").click();
    });
  })
})