describe("user can bid on listing", () => {
  context("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/listings",
        response: "fixture:listings_index.json",
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/listings/2",
        response: "fixture:listing_show.json",
      });
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
        url: "http://localhost:3000/api/v1/biddings",
        response: '{"message":"Your bid was successfully sent"}',
      });

      cy.visit("/");
      cy.get("[data-cy=button]").contains("Login").click();
      cy.get("[data-cy=login-form]").within(() => {
        cy.get("[data-cy=email]").type("user@mail.com");
        cy.get("[data-cy=password]").type("password");
        cy.get("[data-cy=button]").contains("Submit").click();
      });
      cy.get("[data-cy=button]").contains("Check out our spaces!").click();
      cy.get("[data-cy=listing-2]").within(() => {
        cy.get("[data-cy=button]").click();
      });
    });

    it("user can click on register your bid", () => {
      cy.get("[data-cy=input]").type(250);
      cy.get("[data-cy=button]").contains("Register Your Bid").click();
      cy.get("[data-cy=message]").should(
        "contain",
        "Your bid was successfully sent"
      );
    });
  })

    context("unsuccessfully", () => {
      beforeEach(() => {
        cy.server();
        cy.route({
          method: "GET",
          url: "http://localhost:3000/api/v1/listings",
          response: "fixture:listings_index.json",
        });
        cy.route({
          method: "GET",
          url: "http://localhost:3000/api/v1/listings/2",
          response: "fixture:listing_show.json",
        });

        cy.visit("/");
        cy.get("[data-cy=button]").contains("Check out our spaces!").click();
        cy.get("[data-cy=listing-2]").within(() => {
          cy.get("[data-cy=button]").click();
        });
      });

      it("if not logged in bid form does not show", () => {
        cy.get("[data-cy=message").should(
          "contain",
          "You need to log in to bid"
        );
        cy.get("[data-cy=button").should("contain", "Login");
    });
  });
});