describe("Vistors can see index of listings", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/listings",
      response: "fixture:listings_index.json",
    });
    cy.visit("/rent-space");
  });
  it("Visitors can see listing one", () => {
    cy.get('[data-cy=listing-1]').within(() => {
      cy.get('[data-cy=lead]').should("contain", "Vacant");
      cy.get('[data-cy=scene]').should("contain", "indoor");
    });
  });

  it("Visitors can see listing two", () => {
    cy.get('[data-cy=listing-2]').within(() => {
      cy.get('[data-cy=lead]').should("contain", "Great parking spot in central of Stockholm.");
      cy.get('[data-cy=scene]').should("contain", "indoor");
    });
  });

  it("Visitors can see listing three", () => {
    cy.get('[data-cy=listing-3]').within(() => {
      cy.get('[data-cy=lead]').should("contain", "Parking spot in villa area.");
      cy.get('[data-cy=scene]').should("contain", "outdoor");
    });
  });
});