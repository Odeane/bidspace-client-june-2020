import React, { useState } from "react";
import axios from "axios";
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from "react-stripe-elements";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Segment,
  Step,
  Icon,
  Container,
  Header
} from "semantic-ui-react";

const Subscription = (props) => {
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const payWithStripe = async (event) => {
    event.preventDefault();
    let stripeResponse = await props.stripe.createToken();

    if (stripeResponse.token) {
      stripeResponse.token && performPayment(stripeResponse.token.id);
    } else {
      setErrorMessage("Something went wrong!");
    }
  };

  const performPayment = async (stripeToken) => {
    let headers = await JSON.parse(localStorage.getItem("J-tockAuth-Storage"));

    try {
      let response = await axios.post(
        "/subscriptions",
        { stripeToken: stripeToken },
        { headers: headers }
      );

      if (response.data.paid === true) {
        setMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      <Container>
        <Segment placeholder>
          <Header as="h2">Payment Form</Header>
          <Grid columns={1} relaxed="very" stackable>
            <Grid.Column>
              <Form onSubmit={payWithStripe} id="payment-form">
                <label>Card number</label>
                <CardNumberElement />

                <label>Expiry Date</label>
                <CardExpiryElement />

                <label>CVC</label>
                <CardCVCElement />

                <Button data-cy="button" type="submit">
                  Submit Payment
                </Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Segment>

        {message && (
          <>
            <Step.Group>
              <Step completed>
                <Icon name="credit card" />
                <Step.Content>
                  <Step.Title data-cy="message">{message}</Step.Title>
                  <Step.Description>
                    <Link data-cy="link" to={{ pathname: "/" }}>
                      Back to listings
                    </Link>
                  </Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
          </>
        )}
        {errorMessage && (
          <>
            <Step.Group>
              <Step>
                <Icon name="x" color="red"/>
                <Step.Content>
                  <Step.Title data-cy="message">{errorMessage}</Step.Title>
                  <Step.Description>
                    <Link data-cy="link" to={{ pathname: "/" }}>
                      Back to listings
                    </Link>
                  </Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
          </>
        )}
      </Container>
    </>
  );
};
export default injectStripe(Subscription);
