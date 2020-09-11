describe('User can see their bids', () => {
  context('successfully', () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/account/listings",
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

      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/account/biddings",
        response: "fixture:account_user_bids_index.json",
      });

      cy.visit("/");

      cy.get("[data-cy=button]").contains("Login").click();
      cy.get("[data-cy=login-form]").within(() => {
        cy.get("[data-cy=email]").type("user@mail.com");
        cy.get("[data-cy=password]").type("password");
        cy.get("[data-cy=button]").contains("Submit").click();
      });

      cy.get("[data-cy=button]").contains("My Account").click();

    })

    it('displays accepted bid', () => {
      cy.get("[data-cy=user-bids]").within(() => {
        cy.get("[data-cy=bid-1]").within(() => {
          cy.get("[data-cy=listing-image]").should("exist");
          cy.get("[data-cy=listing-lead]").should("contain", "Apartment in Vasa");
          cy.get("[data-cy=listing-scene]").should("contain", "indoor");
          cy.get("[data-cy=listing-category]").should("contain", "Apartment");

          cy.get("[data-cy=bid-status]").should("contain", "accepted");
          cy.get("[data-cy=bid-offer]").should("contain", "500");
        })
      })
    });

    it('displays pending bid', () => {
      cy.get("[data-cy=user-bids]").within(() => {
        cy.get("[data-cy=bid-2]").within(() => {
          cy.get("[data-cy=listing-image]").should("exist");
          cy.get("[data-cy=listing-lead]").should("contain", "Parking spot by Ullevi");
          cy.get("[data-cy=listing-scene]").should("contain", "outdoor");
          cy.get("[data-cy=listing-category]").should("contain", "Parking spot");

          cy.get("[data-cy=bid-status]").should("contain", "pending");
          cy.get("[data-cy=bid-offer]").should("contain", "600");
        })
      })
    });

    it('displays rejected bid', () => {
      cy.get("[data-cy=user-bids]").within(() => {
        cy.get("[data-cy=bid-3]").within(() => {
          cy.get("[data-cy=listing-image]").should("exist");
          cy.get("[data-cy=listing-lead]").should("contain", "Dungeon in Kville");
          cy.get("[data-cy=listing-scene]").should("contain", "indoor");
          cy.get("[data-cy=listing-category]").should("contain", "Apartment");

          cy.get("[data-cy=bid-status]").should("contain", "rejected");
          cy.get("[data-cy=bid-offer]").should("contain", "700");
        })
      })
    });

  })

  context('unsuccessfully', () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/account/listings",
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
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/account/biddings",
        response: "fixture:account_user_have_no_bids.json",
      });
      
      cy.visit("/");

      cy.get("[data-cy=button]").contains("Login").click();
      cy.get("[data-cy=login-form]").within(() => {
        cy.get("[data-cy=email]").type("user@mail.com");
        cy.get("[data-cy=password]").type("password");
        cy.get("[data-cy=button]").contains("Submit").click();
      });

      cy.get("[data-cy=button]").contains("My Account").click();
    })
    it('user have no bids', () => {
      cy.get("[data-cy=message]").should("contain", "You have not placed any bids.")
    });
  })
})
