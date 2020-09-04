describe("User can create listing", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/listings",
      response: '{"message": "The listing has been created successfully"}',
    });
    cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:login_response.json",
    })
    cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:login_response.json",
    })
    cy.visit('/')
    cy.get('[data-cy=button]').contains("Login").click()
    cy.get("[data-cy=login-form]").within(() => {
      cy.get("[data-cy=email]").type("user@mail.com");
      cy.get("[data-cy=password]").type("password");
      cy.get("[data-cy=button]").contains("Submit").click();
    });
  });

  it("user can click on create listing", () => {
    cy.get("[data-cy=button]").contains("Rent out a space!").click();
    cy.get("[data-cy=listing-form]").within(() => {
      cy.get("div[role='option']").contains("Parking").click({force: true});
      cy.get("div[role='option']").contains("Indoors").click({force: true});
      cy.get("[data-cy=lead]").type("Writing a nice lead")
      cy.get("[data-cy=description]").type("A nice description aiming to give more information")
      cy.get("[data-cy=address]").type("111 Whatever Street, 11111 Stockholm")
      cy.get("[data-cy=price]").type(200)
     
      cy.get("[data-cy=button]").contains("Submit Listing").click()
    });
    cy.get("[data-cy=message]").should("contain", "The listing has been created successfully")
  });
});
