describe("user can bid on listing", () => {
  context("successfully", () => {
    beforeEach(()=> {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:login_response.json",
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:login_response.json",
      });
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/bidings",
        response: '{"message":"Your bid was successfully sent"}' 
      })

      cy.visit("/");
      cy.get("[data-cy=button]").contains("Login").click();
      cy.get("[data-cy=login-form]").within(() => {
        cy.get("[data-cy=email]").type("user@mail.com");
        cy.get("[data-cy=password]").type("password");
        cy.get("[data-cy=button]").contains("Submit").click();
      });
    })

    it("user can click on register your bid", ()=> {
      cy.get("[data-cy=button]").contains("Register Your Bid").click();

    })
  })
})