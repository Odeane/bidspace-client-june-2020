// describe("User can reopen listing", () => {
//   beforeEach(() => {
//     cy.server();
//     cy.route({
//       method: "GET",
//       url: "http://localhost:3000/api/v1/account/listings",
//       response: "fixture:account_index.json",
//     });
//     cy.route({
//       method: "GET",
//       url: "http://localhost:3000/api/v1/account/listings/2",
//       response: "fixture:account_show_tenant.json",
//     });
//     cy.route({
//       method: "PUT",
//       url: "http://localhost:3000/api/v1/account/listings/2",
//       response: '{"message": "The listing is now available again to the public"}',
//     });

//     cy.visit("/account/listings");
//     cy.get("[data-cy=listing-2]").within(() => {
//       cy.get("[data-cy=button]").click();
//     });
//   });

//   it("displays the content of the listing", () => {
//     cy.get("[data-cy=listing-2]").within(() => {
//       cy.get("[data-cy=lead]").should(
//         "contain",
//         "Great parking spot in central of Stockholm."
//       );
//       cy.get("[data-cy=image]").should("exist");
//       cy.get("[data-cy=scene]").should("contain", "indoor");
//       cy.get("[data-cy=price]").should("contain", "200");
//       cy.get("[data-cy=address]").should(
//         "contain",
//         "Sibyllegatan 18, 11442 Stockholm"
//       );
//       cy.get("[data-cy=description]").should(
//         "contain",
//         "Heated garage in the middle of Stockholm that fits one big SUV."
//       );
//     });
//     cy.get("#listing-1").should("not.exist");
//     cy.get("#listing-3").should("not.exist");
//     cy.get("[data-cy=reopen-button]").should("contain", "Reopen").click();
//     cy.get('[data-cy=reopen-message]').should("contain", "The listing is now available again to the public")
//   });
// });