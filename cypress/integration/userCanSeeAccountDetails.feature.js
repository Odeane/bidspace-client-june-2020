describe("User can see account page", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/account",
      response: "fixture:account_index.json",
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
    cy.visit("/");
    cy.get("[data-cy=button]").contains("Login").click();
    cy.get("[data-cy=login-form]").within(() => {
      cy.get("[data-cy=email]").type("user@mail.com");
      cy.get("[data-cy=password]").type("password");
      cy.get("[data-cy=button]").contains("Submit").click();
    });
  });

  it("Visitors can see listing one", () => {
    cy.get("[data-cy=button]").contains("My Account").click();
    cy.get("[data-cy=listing-1]").within(() => {
      cy.get("[data-cy=lead]").should("contain", "Vacant");
      cy.get("[data-cy=scene]").should("contain", "indoor");
      cy.get("[data-cy=image]").should("exist");
      cy.get("#category").should("contain", "Parking spot");
    });
  });

  it("user can see his/hers listings", () => {
    cy.get("[data-cy=listing-2]").within(() => {
      cy.get("[data-cy=lead]").should(
        "contain",
        "Great parking spot in central of Stockholm."
      );
      cy.get("[data-cy=scene]").should("contain", "indoor");
      cy.get("[data-cy=image]").should("exist");
      cy.get("#category").should("contain", "Parking spot");
    });
  });
});
