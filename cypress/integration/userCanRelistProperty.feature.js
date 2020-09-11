describe("User can relist their property", () => {
  context("successfully", () => {
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

      cy.visit("/account/listings");
      cy.get("[data-cy=listing-2]").within(() => {
        cy.get("[data-cy=button]").click();
      });
    });
    it("displays the content of the listing", () => {
      cy.get("[data-cy=listing-2]").within(() => {
        cy.get("[data-cy=lead]").should(
          "contain",
          "Great parking spot in central of Stockholm."
        );
      });
      cy.get("#listing-1").should("not.exist");
      cy.get("#listing-3").should("not.exist");
    });
    
    it("user can approve bidding", () => {
      cy.get("[data-cy=bid-2]").should("contain", "100");
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/account/listings/2",
        response: "fixture:account_show_accepted.json",
      });
      cy.get("[data-cy='accepted-2']").click();
      cy.get("[data-cy='message']").should(
        "contain",
        "You have accepted this bid from user2@mail.com"
      );
    });

    it("user can reopen listing", () => {
      cy.get("[data-cy=button]").should("contain", "Reopen").click();
      cy.contains("Reopen").should("not.be.visible");
    });
  });
});