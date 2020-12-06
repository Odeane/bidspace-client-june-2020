import React, { useEffect, useState } from "react";
import axios from "axios";
import { Label, Grid, Container, Header, Divider, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchListing } from "../state/action/listingsActions";

const SingleListing = (props) => {

  useEffect(() => {
    props.fetchListing(listingId)
    // eslint-disable-next-line
  }, []);

  const list = props.listing
  const listingId = props.match.params.id;

  const [message, setMessage] = useState("");
  const [biddingValue, setBiddingValue] = useState("");
  const isUserAuthenticated = props.authenticated;
  
  const onChangeHandler = (e) => {
    setBiddingValue(e.target.value);
  };
  
  const submitBid = async (event) => {
    event.preventDefault();
    let responseMessage, bidParams, response;
    let bid = biddingValue;
    const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    try {
      bidParams = {
        bid: parseFloat(bid),
        listing_id: list.id,
      };
      
      response = await axios.post(
        "/biddings",
        { bidding: bidParams },
        { headers: headers }
        );
        
        responseMessage = response.data.message;
      } catch (error) {
        responseMessage = error.response.data.message;
      } finally {
        setMessage(responseMessage);
      }
    };
    
    let biddingField;
    if (isUserAuthenticated) {
      biddingField = (
        <Form onSubmit={submitBid}>
        <Form.Input
        id={list.id}
        value={biddingValue}
        onChange={onChangeHandler}
        data-cy="input"
        type="number"
        />
        <Button positive data-cy="button">Register Your Bid</Button>
        </Form>
        );
      } else {
        biddingField = (
          <>
          <Container text data-cy="message"><strong>You need to log in to bid</strong></Container>
          </>
          );
        }
        
  let listingContent = (
    <>
      <Container textAlign="justified" divided
        data-cy={`listing-${list.id}`}
        data-id={list.id}
      >
        <h1 data-cy="lead">{list.lead}</h1>
        <Divider />
        <Container text data-cy="address"><strong>{list.address}</strong></Container>
        <Divider />
        <Container text data-cy="description">
          {list.description}
        </Container>
        <Divider />
        <Container text>
          <Label size="massive" data-cy="scene">{list.scene}</Label>
          <Label size="massive" data-cy="category">{list.category}</Label>
          <Label size="massive" data-cy="price">Target Price: {list.price}kr</Label>
        </Container>
        <Divider />
        <Container>{biddingField}</Container>
      </Container>
    </>
  );

  return (
    <>
      <Grid centered column={1} divided padded>
        <Grid.Row stretched>
          <Grid.Column width={4}>
            {
              list.images ?
                list.images.map(image => (
                  <img src={image.url} alt="carlots"/>
                ))
                :
                ('No images found')
           }
          </Grid.Column>
          <Grid.Column width={8}>
            <div>{listingContent}</div>
            <div> {message && <p data-cy="message">{message}</p>}</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

const mapStateToProps = ({ lists: { listing } }) => {
  return {
    listing: { ...listing.listing },
    /*authenticated: state.authenticated*/
  };
};

export default connect(mapStateToProps, { fetchListing })(SingleListing);
