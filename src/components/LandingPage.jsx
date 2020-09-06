import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Button,
  Segment,
  Grid,
  Image,
  Divider,
} from "semantic-ui-react";

const LandingPage = (props) => {
  return (
    <>
      <Grid columns='equal' inverted>
        <Grid.Row id="top-grid" color="black">
          <Grid.Column>
        <Container text>
          <Header as="h1" content="BidSpace" id="h1-header" inverted />
          <Header
            as="h2"
            content="Find or rent a space that fits you!"
            inverted
            textAlign="center"
          />
        </Container>
        <Button id="read-more" primary size="huge">
          Read more below!
        </Button>
        </Grid.Column>
        </Grid.Row>
        </Grid>

      <Segment id="middle-segment" vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3">We help you find your space.</Header>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in
                molestias similique cumque labore fugiat minus animi, voluptatum
                maxime, voluptas odio modi consectetur voluptatibus quos
                laboriosam illo dignissimos mollitia. Impedit?
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src="https://miro.medium.com/max/920/1*YHrlHo8UNguNsKXzHx-kSw.jpeg"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Link data-cy="button" to="/rent-space">
                <Button color="black" size="huge">Check out our spaces!</Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Divider horizontal>Or</Divider>

      <Segment id="botton-segment"vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Link data-cy="button" to="/rentout-space">
                <Button color="black" size="huge">Rent out your space!</Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column floated="left" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src="https://advancedparking.co.uk/wp-content/uploads/2019/11/solutionimg1.png"
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h3">We help you rent out your space.</Header>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in
                molestias similique cumque labore fugiat minus animi, voluptatum
                maxime, voluptas odio modi consectetur voluptatibus quos
                laboriosam illo dignissimos mollitia. Impedit?
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    renderLoginForm: state.renderLoginForm,
    authenticated: state.authenticated,
  };
};

export default connect(mapStateToProps)(LandingPage);
