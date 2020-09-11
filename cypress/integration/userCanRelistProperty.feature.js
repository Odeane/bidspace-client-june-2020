describe("user can relist their property", () => {
  context("successfully",() => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/account/listings",
      response: "fixture:account_index.json",
    });

    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/account/listings/2",
      response: "fixture:account_show.json",
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

    cy.get("[data-cy=button]").contains("My Account").click();

    cy.visit("/account/listings");
    cy.get("[data-cy=listing-2]").within(() => {
      cy.get("[data-cy=button]").click();
    });
  })

  it("displays the content of the listing", () => {
    cy.get("[data-cy=listing-2]").within(() => {
      cy.get("[data-cy=lead]").should(
        "contain",
        "Great parking spot in central of Stockholm."
      );
      cy.get("[data-cy=image]").should("exist");
      cy.get("[data-cy=scene]").should("contain", "indoor");
      cy.get("[data-cy=price]").should("contain", "200");
      cy.get("[data-cy=address]").should(
        "contain",
        "Sibyllegatan 18, 11442 Stockholm"
      );
      cy.get("[data-cy=description]").should(
        "contain",
        "Heated garage in the middle of Stockholm that fits one big SUV."
      );
    })

    cy.get("#listing-1").should("not.exist");
    cy.get("#listing-3").should("not.exist");
  })

  it("user can approve bidding", () => {
    cy.get("[data-cy=bid-2]").should("contain", "100");
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/account/listings/2",
      response: "fixture:account_show_accepted.json",
    });
    cy.get("[data-cy='accepted-2']").click();
    
  });

  it("user can reopen listing", () => {
    cy.get("[data-cy=button]").should("contain", "Reopen").click();
    cy.contains("Reopen").should("not.be.visible")
  })
})