describe("User can create listing", () => {
            beforeEach(() => {
                cy.server();
                cy.visit("/");
                cy.route({
                    method: "POST",
                    url: "http://localhost:3000/api/v1/auth",
                    response: "fixture:registration_response.json",
                    headers: {
                        uid: "user@mail.com",
                    },
                });
                cy.get("[data-cy=login]").click();
                cy.get("[data-cy=login-form]").within(() => {
                    cy.get("[data-cy=email]").type("user@mail.com");
                    cy.get("[data-cy=password]").type("password");
                    cy.get("[data-cy=button]").contains("submit").click();
                });
            });

            it("user can click on create listing", () => {
                    cy.get("[data-cy=button]").contains("Create Listing").click()
                    cy.get("[data-cy=listing-form]").within(() => {
                            cy.get("[data-cy=button]").contains("Parking").click()
                            cy.get(" [data - cy = button]
                                ").click()
                                ").type("
                                Lead ") cy.get(" [data - cy = button]
                                ").contains("
                                Indoor ").click() cy.get("
                                ")

                            })
                    })
            });